import React from 'react';
import Chart1 from './Chart1/Chart1';
import Chart2 from './Chart2/Chart2';
import Chart3 from './Chart3/Chart3';
import 'bootstrap/dist/css/bootstrap.min.css'

const Charts = () => {
    return (
        <div className='p-4'>
            <div className='mt-5 mb-3'>
                <Chart1 />
            </div>
            <div className='d-flex justify-content-between mb-4' style={{width:'100%'}}>
                <Chart2 />
                <div style={{flex:1.5}}></div>
                <Chart3 />
            </div>
        </div>
    );
};

export default Charts;