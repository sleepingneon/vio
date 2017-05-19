import BaseModel from './baseModel'

export default class CollectionsModel extends BaseModel
{

  constructor() {
    super();
    this.collections=[];
    this.page=1;

  }

  recieveCollections(collections=[],page=1){
  	this.collections=collections;
  	this.page=page;
    this.NotifySubscribers();
 }

}