import {fetchFromUnsplash, navigation } from '../helpers'
import DetailedPhotoModel from '../models/detailedPhotoModel'
import detailedPhotoView from '../views/detailedPhotoView'

export default (photoId) => {
	const detailedPhotoModel=new DetailedPhotoModel();

	detailedPhotoModel.setRenderer((model)=>detailedPhotoView(model));
	
	fetchFromUnsplash(
		`/photos/${photoId}`,
		(photo)=>{
			detailedPhotoModel.setNavigation(navigation);			
			detailedPhotoModel.recievePhoto(photo);
		},
		(error)=>{alert(error);}
	);
}