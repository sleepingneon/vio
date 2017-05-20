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

Handlebars.registerHelper('date', function(value) {
		value=(new Date(value)).toDateString();
		return new Handlebars.SafeString("<p>Date: "+value+"</p>");  
});

module.exports = (model)=>{	

	let html=template(model);
	let root=document.getElementById("root");
	root.innerHTML = html;

	document.getElementsByClassName("photo-wrapper")[0].style.backgroundColor=model.photo.color;

	var backButton=document.getElementsByClassName("back-button")[0];
	backButton.onclick=function(event){
		event.preventDefault();
		collectionPhotosController(model.navigation.collection,model.navigation.collectionTitle);
	}
}


