import BaseModel from './baseModel'

export default class DetailedPhotoModel extends BaseModel
{

  constructor() {
    super();
    this.photo={};
  }

  recievePhoto(photo={}){
  	this.photo=photo;
    this.render();
 }

}