import {fetchFromUnsplash}from '../helpers'
import CollectionPhotosModel from '../models/collectionPhotosModel'
import collectionPhotosView from '../views/collectionPhotosView'

export default (collectionId=0,title="untitled",parentPage=1) => {
	const collectionPhotosModel=new CollectionPhotosModel();

	collectionPhotosModel.addListener((model)=>collectionPhotosView(model));
	
	fetchFromUnsplash(
		`/collections/${collectionId}/photos`,
		(photos)=>{
			collectionPhotosModel.recievePhotos(photos,title,parentPage);
		},
		(error)=>alert(error)
	);




	
	
	//let model=
}