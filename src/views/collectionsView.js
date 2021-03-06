//import { Handlebars } from 'handlebars'
var Handlebars=require('handlebars/runtime');
var template = require("./collections.handlebars");
import collectionsController from '../controllers/collectionsController'
import collectionPhotosController from '../controllers/collectionPhotosController'

Handlebars.registerHelper('page', function(text) {

	if(text==1){
		return new Handlebars.SafeString("<a href='" + (+text+1) + "' class='button nav-button'>Next page</a>");  
	}else{
		return new Handlebars.SafeString("<a href='" + (+text-1) + "' class='button nav-button'>Previous page</a>"+
			"<a href='" + (+text+1) + "' class='button nav-button'>Next page</a>");  
	}

});

module.exports = (model)=>{	

	let html=template(model);
	let root=document.getElementById("root");
	root.innerHTML = html;


var collectionsLinks=document.getElementsByClassName("collection__link");
for(let i=0;i<collectionsLinks.length;i++){
	collectionsLinks[i].onclick=(event)=>{
		event.preventDefault();
		let link=collectionsLinks[i].closest('.collection__link');
		let collectionId=link.getAttribute("href");

		let title=link.getElementsByClassName("collection__title")[0].innerHTML;

		collectionPhotosController(collectionId,title);
	}
}

var navButtons=document.getElementsByClassName("nav-button");
for(let i=0;i<navButtons.length;i++){
	navButtons[i].onclick=function(event){
		event.preventDefault();
		let pageToMoveTo=navButtons[i].getAttribute("href");
		collectionsController(pageToMoveTo);
	}
}
}


