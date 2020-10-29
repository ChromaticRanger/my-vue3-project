
import { ItemsApiClientInterface } from './items'

/**
 * @Name ApiClientInterface
 * @description
 * Interface wraps all api client modules into one place, 
 * keeping code organised.
 */
export interface ApiClientInterface {
    items: ItemsApiClientInterface
}
