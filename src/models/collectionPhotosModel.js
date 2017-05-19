import BaseModel from './baseModel'

export default class CollectionPhotosModel extends BaseModel {

  constructor() {
    super();
    this.photos=[];
    this.parentPage=1;
    this.collectionId=0;
    this.title="untitled";
  }

  recievePhotos(photos,title,collectionId,parentPage){
   this.photos=photos;
   this.title=title;
   this.collectionId=collectionId;
   this.parentPage=parentPage;
   this.NotifySubscribers();
 }

}