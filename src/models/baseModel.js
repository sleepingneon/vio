export default class BaseModel {

   constructor() {
     this.listeners=[];
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