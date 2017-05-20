import BaseModel from './baseModel'

export default class CollectionsModel extends BaseModel
{

  constructor() {
    super();
    this.collections=[];
  }

  recieveCollections(collections){
  	this.collections=collections;
    this.render();
 }

}