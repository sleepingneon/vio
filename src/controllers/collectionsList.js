export {fetchFromUnsplash}from '../helpers'
export CollectionsModel from '../models/collectionsModel'

export default () => {
	const collectionsModel=new CollectionsModel();

	collectionsModel.addListener((model)=>collectionsView(model))
	
	fetchFromUnsplash(
		`/collections?page=${page}`,
		(collections)=>collectionsModel.recieveCollections(collections,1)
		)




	
	
	//let model=
}