import React from 'react'
import {Chart as ChartJS} from "chart.js/auto"
import {Line} from 'react-chartjs-2'
import {Col,Row,Typography} from 'antd';
import Loading from './Loading';

const {Title} = Typography;
const LineChart = ({coinHistory,currentPrice,coinName}) => {
    let coinPrice =[];
    let coinTimestamp = [];
    if(coinHistory){
    for(let i=0;i<coinHistory.history.length;i+=1)
    {
        coinPrice.push(coinHistory.history[i].price)
        coinTimestamp.push(new Date(coinHistory.history[i].timestamp *1000).toLocaleDateString());
    }}

    const data={
        labels:coinTimestamp,
        datasets:[
            {
                label:'Price in USD',
                data: coinPrice,
                fill:false,
                backgroundColor: '#0071bd',
                borderColor:'#0071bd'
            }
        ]
    }

  return (
    <>
    {
        console.log(coinTimestamp[5])
    }
    { 
    coinHistory?<div>
     <Row className='chart-header'>
        <Title level={2} className='chart-title'>{coinName} Price Chart </Title>
        <Col className='price-container'>
            <Title level={5} className='price-change'>{coinHistory.change}</Title>
            <Title level={5} className='current-price'>&nbsp;&nbsp;Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
    </Row>
    <Line data={data}/>
    </div>: <Loading/>
   }
    </>
  )
}

export default LineChart
