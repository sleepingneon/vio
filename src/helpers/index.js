//обертка над фетч с промисами и авторизацией для ансплэш
export const fetchFromUnsplash=(url,resolve=()=>{},reject=()=>{}, options={})=>{
	const authHeader={
		Authorization: "Client-ID d3365b84f32cf16b3f9e35cfc7ddfd24a0554ba8552895342431fae19f447ff1"
	};
	options.headers=Object.assign({},options.headers,authHeader);


	fetch("https://api.unsplash.com"+url,options)
	.then((response)=>{ 
		if(response.status===403){
			throw(new Error("access denied! maybe because of the requests limit.."))
		} 
		else if(response.status!==200){
			throw(new Error("network error!"))
		} 
		return response.json();
	})
	.then((data)=>	{
		return resolve(data);
	})
	.catch((error)=>reject(error));
}

//общая навигация между экранами
export const navigation={
	page:1,
	collection:0,
	collectionTitle:""
}
