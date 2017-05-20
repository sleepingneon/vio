import {fetchFromUnsplash, navigation }from '../helpers'
import CollectionsModel from '../models/collectionsModel'
import collectionsView from '../views/collectionsView'

export default (page=1) => {
	const collectionsModel=new CollectionsModel();

	collectionsModel.setRenderer((model)=>collectionsView(model));
	
	fetchFromUnsplash(
		`/collections?page=${page}&per_page=9`,
		(collections)=>{
			navigation.page=page;
			collectionsModel.setNavigation(navigation);
			collectionsModel.recieveCollections(collections);
		},
		(error)=>{alert(error);}
	);
}