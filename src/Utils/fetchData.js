// currently used in the code
export const coinRankingApi = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
		'x-rapidapi-key': '7ade7dad79mshb0968b75e6d2d26p14a33fjsn8526acffd254',
	}
};

export const CryptoNews = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'cryptonews16.p.rapidapi.com',
		// 'x-rapidapi-key': '7ade7dad79mshb0968b75e6d2d26p14a33fjsn8526acffd254', // ashu2100ag
		// 'x-rapidapi-key': '2cd2c89ba7msh9227dfae65653c3p16fa66jsn6face0470b79', // ashu2300ag
		// 'x-rapidapi-key': '0ec7cf5698mshc72abeaf31f30d7p1fad4djsn9f648dbbbe37', // ashu2005ag
		// 'x-rapidapi-key': '2c1e5f9f97mshddb1691900b51e3p1ddda6jsndb547b27fd4a', // adarsh001ag
		// 'x-rapidapi-key': '4802a145dbmshc4fbda572ad0644p19da34jsnc275fdbda30b', // adarsh002ag

	}
};
// current used in the code
export const CryptocurrencyNews = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7ade7dad79mshb0968b75e6d2d26p14a33fjsn8526acffd254',
		'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
	}
};

// for sending the converted data  when user provide url and key
export const fetchdata = async(url,options)=>{
    let response = await fetch(url,options);
    let data = await response.json();
    return data;
}