export const coinRankingApi = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
		'x-rapidapi-key': '7ade7dad79mshb0968b75e6d2d26p14a33fjsn8526acffd254',
	}
};

export const fetchdata = async(url,options)=>{
    let response = await fetch(url,options);
    let data = await response.json();
    return data;
}