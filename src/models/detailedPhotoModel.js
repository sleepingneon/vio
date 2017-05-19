import BaseModel from './baseModel'

export default class DetailedPhotoModel extends BaseModel
{

  constructor() {
    super();
    this.photo={};
    this.parentCollectionId="";

  }

  recievePhoto(photo=[],parentCollectionId=""){
  	this.photo=photo;
  	this.parentCollectionId=parentCollectionId;
    this.NotifySubscribers();
 }

}