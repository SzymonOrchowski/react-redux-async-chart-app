import React, { useEffect } from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ReactFC from "react-fusioncharts";

import { useDispatch, useSelector } from "react-redux";
import { getData, getSchema } from "../../../ducks/chart3";

ReactFC.fcRoot(FusionCharts, TimeSeries);

const dataSource = {
  chart: {},
  caption: {
    text: "Sales Analysis"
  },
  subcaption: {
    text: "Grocery & Footwear"
  },
  series: "Type",
  yaxis: [
    {
      plot: "Sales Value",
      title: "Sale Value",
      format: {
        prefix: "$"
      }
    }
  ]
};

class ChartViewer extends React.Component {
  constructor(props) {
    super(props);
    this.onFetchData = this.onFetchData.bind(this);
    this.state = {
      timeseriesDs: {
        type: "timeseries",
        renderAt: "container",
        width: "600",
        height: "400",
        dataSource
      }
    };
  }

  componentDidMount() {
    this.onFetchData();
  }

  onFetchData() {
      const data = this.props.data;
      const schema = this.props.schema;
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
      timeseriesDs.dataSource.data = fusionTable;
      this.setState({
        timeseriesDs
      });
  }

  render() {
    return (
      <div>
        {this.state.timeseriesDs.dataSource.data ? (
          <ReactFC {...this.state.timeseriesDs} />
        ) : (
          "loading"
        )}
      </div>
    );
  }
}

const Chart3 = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getData());
        dispatch(getSchema());
    }, [dispatch])

    const data = useSelector((state) => state.chart3.data);
    const schema = useSelector((state) => state.chart3.schema);

    return (
        <div>
            {data && schema
            ?
                <ChartViewer data={data} schema={schema}/>
            :
                "loading"
            }  
        </div>
    );
};

export default Chart3;