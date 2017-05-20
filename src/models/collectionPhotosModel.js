import BaseModel from './baseModel'

export default class CollectionPhotosModel extends BaseModel {

  constructor() {
    super();
    this.photos=[];
  }

  recievePhotos(photos){
   this.photos=photos;
   this.render();
 }

}