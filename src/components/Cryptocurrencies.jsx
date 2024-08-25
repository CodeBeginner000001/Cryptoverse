import React,{useState,useEffect} from 'react'
import { fetchdata, coinRankingApi } from "../Utils/fetchData";
import millify from 'millify';
import {Link } from 'react-router-dom';
import {Card,Row,Col} from "antd";
import Loading from './Loading';
const Cryptocurrencies = ({simplified}) => {

  //  for limiting the number of data fetch depending upon simplified
    let count = simplified ? 12:100;
    // code lines from 12 - 20 is used for fetching the data and limit it according to its call
    const [coinsdata, setCoinsdata] = useState(null);
    useEffect(() => {
      const fetchcoins = async () => {
        const data = await fetchdata(
          `https://coinranking1.p.rapidapi.com/coins?limit=${count}`,
          coinRankingApi
        );
        // console.log(data);
        setCoinsdata(data);
      };
      fetchcoins();
    }, [count]);

    // This line is used for search bar in the cryptocurrencies.
    let [searchTerm,setSearchTerm]= useState("")

    // It is the filter that is applied in this component.
    const [filteredCoins, setFilterCoins]= useState([]);
    useEffect(()=>{
      if(coinsdata){ // if coinsdata is available then apply the filter else dont do nothing
        const filteredData = coinsdata.data.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilterCoins(filteredData);
      }
    },[searchTerm,coinsdata]);


  return (
    <>
    
    {// for Search bar in this component 
    !simplified?
      <div className='search-crypto'>
      <input type="text" placeholder='Search Cryptocurrency' onChange={(e)=> setSearchTerm(e.target.value)} style={{padding:"10px", width:"200px"}}/>
     </div>:null
    }
    { 
    // for card component and adding the details in the card
    coinsdata ?
      <Row gutter={[32,32]} className='crypto-card-container'>
        { 
          filteredCoins.map((currency)=>(
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
              <Link to={`/crypto/${currency.uuid}`}>
                <Card title={`${currency.rank}. ${currency.name}`} 
                      extra={<img className='crypto-image' src={currency.iconUrl} alt='none'/>}
                      hoverable={true} >
                  <p>Price : {millify(currency.price)}</p>
                  <p>Market Cap : {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>
               </Card>
              </Link>
            </Col>
          ))
        }
      </Row>:<Loading/>
     }
    </>
  )
}

export default Cryptocurrencies
