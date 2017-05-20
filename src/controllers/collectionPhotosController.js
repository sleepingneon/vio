import {fetchFromUnsplash, navigation }from '../helpers'
import CollectionPhotosModel from '../models/collectionPhotosModel'
import collectionPhotosView from '../views/collectionPhotosView'

export default (collectionId=0,title="") => {
	const collectionPhotosModel=new CollectionPhotosModel();

	collectionPhotosModel.setRenderer((model)=>collectionPhotosView(model));
	
	fetchFromUnsplash(
		`/collections/${collectionId}/photos`,
		(photos)=>{
			navigation.collection=collectionId;
			navigation.collectionTitle=title;
			collectionPhotosModel.setNavigation(navigation);
			collectionPhotosModel.recievePhotos(photos);
		},
		(error)=>{alert(error);}
	);

}