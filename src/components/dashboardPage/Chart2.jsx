import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getData, getSchema } from "../../ducks/chart2";

import ChartViewer from './ChartViewer'
import { dataSourceChart2 } from "../../data/dataSourcesForCharts/dataSourceChart2";

const Chart2 = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getData());
      dispatch(getSchema());
  }, [dispatch])

  const data = useSelector((state) => state.chart2.data);
  const schema = useSelector((state) => state.chart2.schema);

  return (
      <div style={{flex:47}}>
          {data && schema
          ?
              <ChartViewer data={data} schema={schema} dataSource={dataSourceChart2}/>
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

export default Chart2;