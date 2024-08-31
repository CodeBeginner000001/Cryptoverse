import React,{useEffect,useState} from 'react'
import {Typography,Row,Col,Avatar,Card} from 'antd';
import { fetchdata , CryptocurrencyNews } from '../Utils/fetchData';
import moment from 'moment';
import Loading from './Loading';
import { v4 as uuidv4 } from 'uuid';

const {Title}=Typography;

const News = ({simplified}) => {

  //  for fecthing the news data and using it in this component
  let [news,setNews]=useState(null);
  useEffect(()=>{
    const fetchNews = async ()=>{
      const newsdata = await fetchdata(`https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk`,CryptocurrencyNews);
      // console.log(CryptocurrencyNews);
      // console.log(newsdata);
      setNews(newsdata.data);
    }
    fetchNews();
  },[])


  let finalNews=news; // used for applying slice method when simplified is true
  if(simplified){
    finalNews = news? news.slice(0,6):null;
  }
 
 const demo = "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg"; // for news
 const newsproviderIcon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiA0XJqwon6XGTG9E2AReHPI9d9JeVfgTbZw&s" // news provider
 const coindesklogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/CoinDesk_logo.svg/1024px-CoinDesk_logo.svg.png"
  
 return (
    <>
    { // used for heading in this component.
      !simplified?<div className='news-heading'><Title level={2} className="home-title">Top News from &nbsp;</Title><img src={coindesklogo} style={{height:"35px"}} alt='none'></img></div>:null
    }
    {
    // for card component and adding the details in the card
      finalNews ? <Row gutter={[24,24]}>
        {
          finalNews.map((cryptonews)=>(
            <Col xs={24} sm={12} lg={12} key={uuidv4()}>
            <Card hoverable className='news-card'>
              <a href={cryptonews.url} target='_blank' rel='noreferrer'>
                <div className='news-image-container'>
                  <Title className='news-title' level={5}>{cryptonews.title}</Title>
                  <img src={cryptonews.thumbnail || demo} alt="" style={{height:"100px",marginLeft:"20px",marginBottom:"20px"}}/>
                </div>
                <p>
                  {cryptonews.description}
                </p>
                {/* This part container the time in the news card */}
                <div className="provider-container">
                  <div>
                    <Avatar src={newsproviderIcon} alt='new-provider'></Avatar>
                    <Typography className='provider-name'>{"CoinDesk"}</Typography>
                  </div>
                  <Typography>{moment(cryptonews.createdAt).startOf('ss').fromNow()}</Typography>
                </div>
              </a>
            </Card>
            </Col>
          ))
        }
      </Row>:<Loading/>
    }
    </>
  )
}

export default News
