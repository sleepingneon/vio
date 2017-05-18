export default class CollectionsModel {

  constructor() {
	this.collections=[];
	this.page=1;
	this.listeners=[];
  }

  recieveCollections(collections=[],page=1){
  	this.collections=collections;
  	this.page=page;
  }

  addListener(listener){
  	this.listeners.push(listener);
  }

  NotifySubscribers() {
    for(let i=0;i<this.listeners.length;i++){
    	this.listeners[i](this);
    }
  }

}