export const fetchFromUnsplash=(url,resolve=()=>{},reject=()=>{}, options={})=>{
	const authHeader={
		Authorization: "Client-ID ___d3365b84f32cf16b3f9e35cfc7ddfd24a0554ba8552895342431fae19f447ff1"
	};
	options.headers=Object.assign({},options.headers,authHeader);

	console.log(options);
/*
	fetch("https://api.unsplash.com/photos?page=1",options)
		.then((response)=>response.json())
		.then((data)=>resolve(data))
		.catch((error)=>reject(error));*/
	}


//alert("fuck yeah");
/*

photos?page=1

categories
:
Array(0)
color
:
"#E6B864"
created_at
:
"2017-05-17T13:17:39-04:00"
current_user_collections
:
Array(0)
height
:
6000
id
:
"2pdDHpqbKr8"
liked_by_user
:
false
likes
:
19
links
:
Object
updated_at
:
"2017-05-18T07:29:05-04:00"
urls
:
Object
user
:
Object
width
:
4000

*/