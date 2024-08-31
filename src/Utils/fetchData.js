// currently used in the code
export const coinRankingApi = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
		'x-rapidapi-key': process.env.REACT_APP_COINRANKING_API, // ashu2100ag
	}
};

export const CryptoNews = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'cryptonews16.p.rapidapi.com',
		// 'x-rapidapi-key': process.env.REACT_APP_CRYPTONEWS_API, // ashu2100ag
		// 'x-rapidapi-key': process.env.REACT_APP_CRYPTONEWS_API_1, // ashu2300ag
		// 'x-rapidapi-key': process.env.REACT_APP_CRYPTONEWS_API_2, // ashu2005ag
		// 'x-rapidapi-key': process.env.REACT_APP_CRYPTONEWS_API_3, // adarsh001ag
		// 'x-rapidapi-key': process.env.REACT_APP_CRYPTONEWS_API_4, // adarsh002ag

	}
};
// current used in the code
export const CryptocurrencyNews = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com',
		
		'x-rapidapi-key': process.env.REACT_APP_CRYPTOCURRENCYNEWS_API,  // ashu2300ag
		// 'x-rapidapi-key': process.env.REACT_APP_CRYPTOCURRENCYNEWS_API_1, // ashu2100ag
		
	}
};

// for sending the converted data  when user provide url and key
export const fetchdata = async(url,options)=>{
    let response = await fetch(url,options);
    let data = await response.json();
    return data;
}