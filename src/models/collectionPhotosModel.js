import BaseModel from './baseModel'

export default class CollectionPhotosModel extends BaseModel {

  constructor() {
    super();
    this.photos=[];
    this.parentPage=1;
    this.title="untitled";
  }

  recievePhotos(photos,title,parentPage){
   this.photos=photos;
   this.title=title;
   this.parentPage=parentPage;
   this.NotifySubscribers();
 }

}