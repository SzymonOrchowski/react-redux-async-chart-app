import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getData, getSchema } from "../../ducks/chart1";

import ChartViewer from './ChartViewer'

const Chart1 = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getData());
        dispatch(getSchema());
    }, [dispatch])

    const data = useSelector((state) => state.chart1.data);
    const schema = useSelector((state) => state.chart1.schema);

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

    return (
        <div>
            {data && schema
            ?
                <ChartViewer data={data} schema={schema} dataSource={dataSource}/>
            :
                <div className='loaderContainer' style={{ width: '100%', height: '400px'}}>
                    <div>
                        Loading data...<br/><br/>
                        <Spinner animation='border'/>
                    </div>
                </div>
            }  
        </div>
    );
};

export default Chart1;