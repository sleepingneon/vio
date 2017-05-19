//import { Handlebars } from 'handlebars'
var Handlebars=require('handlebars/runtime');
var template = require("./collectionPhotos.handlebars");
import collectionsController from '../controllers/collectionsController'


module.exports = (model)=>{	
	console.log(model);
	let html=template(model);
	let root=document.getElementById("root");
	root.innerHTML = html;


var photosLinks=document.getElementsByClassName("photo-item__link");
for(let i=0;i<photosLinks.length;i++){
	photosLinks[i].onclick=(event)=>{
		event.preventDefault();
		var photoId=photosLinks[i].closest('.photo-item__link').getAttribute("href");

	}
}

var backButton=document.getElementsByClassName("back-button")[0];

	backButton.onclick=function(event){
		event.preventDefault();
		let pageToMoveTo=backButton.getAttribute("href");
		collectionsController(pageToMoveTo);
	}

}


