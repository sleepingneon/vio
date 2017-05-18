import { fetchFromUnsplash } from './helpers'
import collectionsController from './controllers/collectionsController'

collectionsController();

//fetchFromUnsplash("https://api.unsplash.com/photos?page=1",null,null,{headers:{someHeader:"some value"}});

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