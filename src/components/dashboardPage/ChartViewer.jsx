import React, { Component } from 'react';
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, TimeSeries);

class ChartViewer extends Component {
    constructor(props) {
        super(props);
        this.onFetchData = this.onFetchData.bind(this);
        this.state = {
          timeseriesDs: {
            type: "timeseries",
            renderAt: "container",
            width: "100%",
            height: "400",
            dataSource: this.props.dataSource
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
              null
            )}
          </div>
        );
      }
}

export default ChartViewer;
