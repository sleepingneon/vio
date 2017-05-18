//import { Handlebars } from 'handlebars'
var Handlebars=require('handlebars/runtime');
var template = require("./collections.handlebars");
//import { template } from './collections.handlebars'

Handlebars.registerHelper('page', function(text) {
	console.log(text);
  if(text===1){
	return new Handlebars.SafeString("<a href='" + (+text+1) + "' class='button'>next</a>");  
  }else{
	  return new Handlebars.SafeString("<a href='" + (+text-1) + "' class='button'>prev</a>"+
										"<a href='" + (+text+1) + "' class='button'>next</a>");  
  }
  
});

module.exports = (model)=>{	
	let html=template(model);
	let root=document.getElementById("root");
	root.innerHTML = html;
}


