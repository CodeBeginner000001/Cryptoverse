import React, { useState, useEffect } from "react";
import { fetchdata, coinRankingApi } from "../Utils/fetchData";
import { Row, Col, Avatar, Collapse, Typography } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";
import  Loading from "./Loading"
const { Text } = Typography;
const { Panel } = Collapse;
const Exchanges = () => {
  let [coindata, setCoinsdata] = useState(null);
  useEffect(() => {
    const fetchcoinData = async () => {
      const data = await fetchdata(
        `https://coinranking1.p.rapidapi.com/coins`,
        coinRankingApi
      );
      // console.log(data.data.coins);
      setCoinsdata(data.data.coins);
    };
    fetchcoinData();
  }, []);
  return (
    <>
    <Row  className="exchange-data exchange-heading" style={{marginBottom:"10px"}}>
      <Col xs={12} sm={6}><strong>Exchanges</strong></Col>
      <Col xs={4} sm={6}><strong>24h Trade Volume</strong></Col>
      <Col xs={4} sm={6} className="exchange-listedAt"><strong>Listed At</strong></Col>
      <Col xs={4} sm={6} className="exchange-change"><strong>Change</strong></Col>
    </Row>
     
    { coindata?
      <Row>
        {
      coindata.map((coin)=>(
        <Col span={24}>
          <Collapse>
           <Panel key={coin.uuid} 
           showArrow={false} 
           header={
            <Row key={coin.uuid} className="exchange-data">
              <Col xs={12} sm={6}>
              <Text><strong>{coin.rank}</strong></Text>
               <Avatar className="exchange-image" src={coin.iconUrl}/>
               <Text className="exchange-symbol"><strong>{coin.symbol}</strong></Text>
              </Col>
              <Col xs={4} sm={6} >{millify(coin?.['24hVolume'])}</Col>
              <Col xs={4} sm={6} className="exchange-listedAt">{millify(coin.listedAt)}</Col>
              <Col xs={4} sm={6} className="exchange-change">{coin.change}%</Col>
            </Row>
           }>

            <Row className="panel-coin-heading">
              <Avatar src={coin.iconUrl}></Avatar>
              <Text className="panel-coin-heading-text"><strong>{coin.name}</strong></Text>
            </Row>

            <Row className="panel-coin-body" 
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
            >
              <Col xs={12} sm={12} md={8} lg={6} className="panel-coin-heading-body-text" ><Text><strong>Rank = &nbsp;</strong>{coin.rank}</Text></Col>
              <Col xs={12} sm={12} md={8} lg={6} className="panel-coin-heading-body-text"><Text><strong>Price = &nbsp;</strong>$ {millify(coin.price)}</Text></Col>
              <Col xs={12} sm={12} md={8} lg={6} className="panel-coin-heading-body-text" ><Text><strong>BTC Price = &nbsp;</strong>{millify(coin.btcPrice)}</Text></Col>
              <Col xs={12} sm={12} md={8} lg={6} className="panel-coin-heading-body-text"><Text><strong>Market Cap = &nbsp;</strong>{millify(coin.marketCap)}</Text></Col>
              <Col xs={12} sm={12} md={8} lg={6} className="panel-coin-heading-body-text"><Text><strong>24h Volume = &nbsp;</strong>{millify(coin?.["24hVolume"])}</Text></Col>
              <Col xs={12} sm={12} md={8} lg={6} className="panel-coin-heading-body-text"><Text><strong>Listed At = &nbsp;</strong>{millify(coin.listedAt)}</Text></Col>
              <Col xs={12} sm={12} md={8} lg={6} className="panel-coin-heading-body-text"><Text><strong>Symbol = &nbsp;</strong>{coin.symbol}</Text></Col>
              <Col xs={12} sm={12} md={8} lg={6} className="panel-coin-heading-body-text"><Link to={coin.coinrankingUrl}>To know more</Link></Col>
            </Row>
           </Panel>
          </Collapse>
        </Col>
      ))
      }
      </Row>:<Loading/>
    }
    </>
  );
};

export default Exchanges;
