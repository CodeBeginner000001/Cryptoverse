import React, { useEffect, useState } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { fetchdata, coinRankingApi} from "../Utils/fetchData";
import { Cryptocurrencies, News } from "./index";
import Loading from "./Loading";
// simplify our work from this <typography.title> to
const { Title } = Typography;

const Homepage = () => {
  // code lines from 12 - 20 is used for fetching global crypto stats
  const [coinsdata, setCoinsdata] = useState(null);

  // used for render it when we reload it
  useEffect(() => {
    const fetchcoins = async () => {
      const data = await fetchdata(
        `https://coinranking1.p.rapidapi.com/coins`,
        coinRankingApi
      );
      // console.log(data);
      setCoinsdata(data);
    };
    fetchcoins();
  }, []);


  return (
    <>
     {/* Global Crypto Stats */}
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      {
       coinsdata ?
      //  Details of Global Crypto Stats
          <Row>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value={coinsdata.data.stats.total}/></Col>
            <Col span={12}><Statistic title="Total Coins" value={coinsdata.data.stats.totalCoins}/></Col>
            <Col span={12}> <Statistic title="Total Exchanges" value={millify(coinsdata.data.stats.totalExchanges)}/></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(coinsdata.data.stats.totalMarketCap)}/></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value={millify(coinsdata.data.stats.total24hVolume)}/></Col>
            <Col span={12}><Statistic title="Total Markets" value={millify(coinsdata.data.stats.totalMarkets)}/></Col>
          </Row>:<Loading/>
      }

      {/* Top 12 Cryptocurrencies in the world */}
      <div className="home-heading-container">
            <Title level={2} className="home-title"> Top 12 Cryptocurrencies in the world </Title>
            <Title level={3} className="show-more"> <Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      {
        coinsdata ? <Cryptocurrencies simplified={true}/>:<Loading/>
      }

      {/* Latest Crypto News */}
      <div className="home-heading-container">
            <Title level={2} className="home-title">Latest Crypto News</Title>
            <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
        <News simplified={true}/>
    </>
  );
};

export default Homepage;
