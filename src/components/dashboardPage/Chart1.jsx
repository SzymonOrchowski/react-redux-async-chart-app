import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getData, getSchema } from "../../ducks/chart1";

import ChartViewer from './ChartViewer'
import { dataSourceChart1 } from '../../data/dataSourcesForCharts/dataSourceChart1'

const Chart1 = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getData());
        dispatch(getSchema());
    }, [dispatch])

    const data = useSelector((state) => state.chart1.data);
    const schema = useSelector((state) => state.chart1.schema);

    return (
        <div>
            {data && schema
            ?
                <ChartViewer data={data} schema={schema} dataSource={dataSourceChart1}/>
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