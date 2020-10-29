
import {  
  ItemsApiClientUrlsInterface,  
  ItemsApiClientInterface,  
  ItemsApiClientModel  
} from '@/models/api-client/items' 

const urls: ItemsApiClientUrlsInterface = { 
  fetchItems: '/path/to/your/api/end-point' 
} 

// instantiate the ItemsApiClient pointing at the url that 
// returns static json mock data 
const itemsApiClient: ItemsApiClientInterface = new 
ItemsApiClientModel(urls) 

// export our instance 
export default itemsApiClient
