import {fetchFromUnsplash}from '../helpers'
import CollectionsModel from '../models/collectionsModel'
import collectionsView from '../views/collectionsView'

export default () => {
	const collectionsModel=new CollectionsModel();

	collectionsModel.addListener((model)=>collectionsView(model));
	
	fetchFromUnsplash(
		'/collections?page=1',
		(collections)=>{console.log("here comes recieve");collectionsModel.recieveCollections(collections,1);},
		(error)=>alert(error)
		)




	
	
	//let model=
}