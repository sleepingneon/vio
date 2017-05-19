//import { Handlebars } from 'handlebars'
var Handlebars=require('handlebars/runtime');
var template = require("./detailedPhoto.handlebars");
import collectionPhotosController from '../controllers/collectionPhotosController'

Handlebars.registerHelper('ifDefined', function(label, value) {
	if(value){
		return new Handlebars.SafeString("<p>"+label+": "+value+"</p>");  
	}else{
		return "";  
	}

});

module.exports = (model)=>{	
	console.log(model);
	let html=template(model);
	let root=document.getElementById("root");
	root.innerHTML = html;


	var backButton=document.getElementsByClassName("back-button")[0];
	console.log(backButton);
	backButton.onclick=function(event){
		event.preventDefault();
		//let pageToMoveTo=backButton.getAttribute("href");
		collectionPhotosController(model.parentCollectionId);
	}
}


