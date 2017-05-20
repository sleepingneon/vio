export default class BaseModel {

   constructor() {
	   this.navigation={};
     this.renderer=()=>{};
   }
   
   //добавить навигацию к модели (не вызывает перерисовку)
   setNavigation(navigation){
	   this.navigation=navigation;
   }

  //задать в контроллере отрисовщик (представление)
   setRenderer(renderer){
     this.renderer=renderer;
   }

  //вызвать представление с моделью
   render() {
    this.renderer(this);   
  }

}