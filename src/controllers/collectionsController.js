import {fetchFromUnsplash}from '../helpers'
import CollectionsModel from '../models/collectionsModel'
import collectionsView from '../views/collectionsView'

export default (page=1) => {
	const collectionsModel=new CollectionsModel();

	collectionsModel.addListener((model)=>collectionsView(model));
	
	fetchFromUnsplash(
		`/collections?page=${page}&per_page=9`,
		(collections)=>{console.log("here comes recieve");collectionsModel.recieveCollections(collections,page);},
		(error)=>alert(error)
	);




	
	
	//let model=
}