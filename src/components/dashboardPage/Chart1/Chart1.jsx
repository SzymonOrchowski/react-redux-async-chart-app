import React, { useEffect } from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ReactFC from "react-fusioncharts";

import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../ducks/chart1";

import IBMschema from "../../../data/ibm-data-schema.json"
import IBMdata from "../../../data/ibm-data-data.json"


ReactFC.fcRoot(FusionCharts, TimeSeries);

// const dataFetch = IBMdata
const schemaFetch = IBMschema


// const schemaFetch = [{
//     "name": "Closing Price",
//     "type": "number"
// }]

const dataSource = {
  chart: {},
  caption: {
    text: "Stock history of IBM"
  },
  subcaption: {
    text: "Over one million data points"
  },
  yaxis: [
    {
      plot: {
        value: "Closing Price",
        connectnulldata: true
      },
      format: {
        prefix: "$"
      },
      title: "Closing Stock Price"
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
      const schema = schemaFetch;
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

const Chart1 = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getData());
    }, [dispatch])

    const data = useSelector((state) => state.chart1.data);

    return (
        <div>
            {data
            ?
                <ChartViewer data={data}/>
            :
                "loading"
            }  
        </div>
    );
};

export default Chart1;