
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchdata, coinRankingApi} from "../Utils/fetchData";
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import Loading from './Loading';
import LineChart from './LineChart';

const {Title,Text} = Typography;
const {Option} = Select;
const CryptoDetails = () => {

  const {coinId}= useParams();
  const [timePeriod,setTimePeriod] = useState('7d')

    // code lines from 16 - 30 is used for fetching global crypto stats
    const [coinsdata, setCoinsdata] = useState({});
    const [timehistory,setTimehistory]=useState(null);
    // used for render it when we reload it
    useEffect(() => {
      const fetchcoins = async () => {
        const data = await fetchdata(
          `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
          coinRankingApi
        );
        // console.log(data);
        setCoinsdata(data.data.coin);

        const timedata = await fetchdata(`https://coinranking1.p.rapidapi.com/coin/${coinId}/history?timePeriod=${timePeriod}`,coinRankingApi);
        // console.log(timedata);
        setTimehistory(timedata.data);
      };
      fetchcoins();
    }, [timePeriod,coinId]);

    
    const time = ['3h','24h','7d','30d','3m','1y','3y','5y'];

  const stats = coinsdata ? [
  {title:'Price to USD',value:`$ ${coinsdata.price ? millify(coinsdata.price):'N/A'}`,icon:<DollarCircleOutlined/>},
  {title:'Rank',value:`${coinsdata.rank}`,icon:<NumberOutlined/>},
  {title:'24h Volume',value:`$ ${coinsdata?.['24hVolume']?millify(coinsdata?.['24hVolume']):"N/A"}`,icon:<ThunderboltOutlined/>},
  {title:'Market Cap',value:`$ ${coinsdata.marketCap?millify(coinsdata.marketCap):'N/A'}`,icon:<DollarCircleOutlined/>},
  {title:'All-time-high(daily avg.)',value:`$ ${coinsdata.allTimeHigh ? millify(coinsdata.allTimeHigh.price):'N/A'}`,icon:<TrophyOutlined/>},
]:[];

  const genericStats =  coinsdata? [
  { title: 'Number Of Markets', value: coinsdata.numberOfMarkets?coinsdata.numberOfMarkets:"N/A", icon: <FundOutlined /> },
  { title: 'Number Of Exchanges', value: coinsdata.numberOfExchanges?coinsdata.numberOfExchanges:"N/A", icon: <MoneyCollectOutlined /> },
  { title: 'Aprroved Supply', value: coinsdata.supply?coinsdata.supply.confirmed ? <CheckOutlined /> : <StopOutlined />:'N/A', icon: <ExclamationCircleOutlined /> },
  { title: 'Total Supply', value: `$ ${coinsdata.supply?millify(coinsdata.supply.total):'N/A'}`, icon: <ExclamationCircleOutlined /> },
  { title: 'Circulating Supply', value: `$ ${coinsdata.supply?millify(coinsdata.supply.circulating):'N/A'}`, icon: <ExclamationCircleOutlined /> },
]:[];
  return (
    <>
    {
      coinsdata ? 
      <Col className='coin-detail-container'>
        {/* heading of the chart */}
        <Col className='coin-heading-container'>
          <Title level={2} className='coin-name'>
            {coinsdata.name} ({coinsdata.symbol}) Price
          </Title>
          <p>
          {coinsdata.name} live price in US dollars.
          View value statistics, market cap and supply.
          </p>
        </Col>
        <Select 
        defaultValue="7d" 
        className='select-timeperiod' 
        placeholder="Select Time Period"
        onChange={(value)=>setTimePeriod(value)}
        > 
        {time.map((date)=><Option key={date}>{date}</Option>)}
        </Select>
        {/* For drawing graph */}
        <LineChart coinHistory={timehistory} currentPrice = {coinsdata.price?millify(coinsdata.price):0} coinName= {coinsdata.name}/>

        <Col className='stats-container'>
          {/* Coin value statistics */}
          <Col className='coin-value-statistics'>
            <Col className='coin-value=statistics-heading'>
              <Title level={3} className='coin-detailes-heading' style={{marginTop:"40px"}}>
                {coinsdata.name} Value Statistics
              </Title>
              <p>
                An overview showing the stats of {coinsdata.name}
              </p>
            </Col>
            {stats.map(({icon,title,value})=>
              <Col className='coin-stats'>
                <Col className='coin-stats-name'>
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className='stats'>{value}</Text>
              </Col>
            )}
          </Col>
          {/* Other statistics */}
          <Col className='other-stats-info'>
            <Col className='coin-value=statistics-heading'>
              <Title level={3} className='coin-detailes-heading' style={{marginTop:"40px"}}>
                Other Statistics
              </Title>
              <p>
                An overview showing the stats of all cryptocurrencies
              </p>
            </Col>
            {genericStats.map(({icon,title,value})=>
              <Col className='coin-stats'>
                <Col className='coin-stats-name'>
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className='stats'>{value}</Text>
              </Col>
            )}
          </Col>
        </Col>

        <Col className='coin-desc-link'>
          {/* for description */}
         <Row className='coin-desc'>
          <div>
           <Title level={3} className='coin-details-heading'>What is {coinsdata.name}</Title>
           <Title level={5}>
             {coinsdata.description}
           </Title>
           <Title level={5}>Visit to : <a href={coinsdata.websiteUrl} target='_blank' rel='noreferrer' style={{textDecoration:"underline"}}>{coinsdata.websiteUrl}</a> to know more</Title>
           </div>
         </Row>
         {/* for links */}
         <Col className='coin-links'>
          <Title level={3} className='coin-details-heading'>
            {coinsdata.name} Links
          </Title>
          {
            coinsdata.links? coinsdata.links.map((link)=>(
              <Row className='coin-link'>
                <Title level={5} className='link-name'>
                  {link.type}
                </Title>
                <a href={link.url} target='_blank' rel='noreferrer'>{link.name}</a>
              </Row>
            )):null
          }
         </Col>
        </Col>
      </Col>:<Loading/>
    }
    </>
  )
}

export default CryptoDetails



