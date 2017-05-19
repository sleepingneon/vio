import {fetchFromUnsplash}from '../helpers'
import DetailedPhotoModel from '../models/detailedPhotoModel'
import detailedPhotoView from '../views/detailedPhotoView'

export default (photoId,parentCollectionId) => {
	const detailedPhotoModel=new DetailedPhotoModel();

	detailedPhotoModel.addListener((model)=>detailedPhotoView(model));
	
	fetchFromUnsplash(
		`/photos/${photoId}`,
		(photo)=>{detailedPhotoModel.recievePhoto(photo,parentCollectionId);},
		(error)=>alert(error)
	);
}