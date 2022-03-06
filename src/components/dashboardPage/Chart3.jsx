import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getData, getSchema } from "../../ducks/chart3";

import ChartViewer from './ChartViewer'
import { dataSourceChart3 } from "../../data/dataSourcesForCharts/dataSourceChart3";

const Chart3 = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getData());
        dispatch(getSchema());
    }, [dispatch])

    const data = useSelector((state) => state.chart3.data);
    const schema = useSelector((state) => state.chart3.schema);

    return (
        <div style={{flex:47}}>
            {data && schema
            ?
                <ChartViewer data={data} schema={schema} dataSource={dataSourceChart3}/>
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