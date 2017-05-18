export const fetchFromUnsplash=(url,resolve=()=>{},reject=()=>{}, options={})=>{
	const authHeader={
		Authorization: "Client-ID d3365b84f32cf16b3f9e35cfc7ddfd24a0554ba8552895342431fae19f447ff1"
	};
	options.headers=Object.assign({},options.headers,authHeader);


	fetch("https://api.unsplash.com"+url,options)
		.then((response)=>{ /*console.log(response);*/ return response.json();})
		.then((data)=>{ /*console.log(JSON.stringify(data));*/ return resolve(data);})
		.catch((error)=>reject(error));
	}
