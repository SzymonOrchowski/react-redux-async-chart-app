import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getData, getSchema } from "../../ducks/chart3";

import ChartViewer from './ChartViewer'

const Chart3 = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getData());
        dispatch(getSchema());
    }, [dispatch])

    const data = useSelector((state) => state.chart3.data);
    const schema = useSelector((state) => state.chart3.schema);

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

    return (
        <div style={{flex:47}}>
            {data && schema
            ?
                <ChartViewer data={data} schema={schema} dataSource={dataSource}/>
            :
                <div className='loaderContainer' style={{ height: '400px'}}>
                    <div>
                        Loading data...<br/><br/>
                        <Spinner animation='border'/>
                    </div>
                </div>
            }  
        </div>
    );
};

export default Chart3;