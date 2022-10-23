import {BaseService} from "../base/base-service";
import {AddressServiceFp} from "./address-service-fp";

/**
 * AddressService - object-oriented interface
 * @export
 * @class AddressApi
 * @extends {BaseService}
 */
export class AddressService extends BaseService {
    /**
     * Get the list of all the assets (policy, name and quantity) for given addresses
     * @summary Address Assets
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressApi
     */
    public addressAssetsPost(body?: any, options?: any) {
        return AddressServiceFp(this.configuration).addressAssetsPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * Get address info - balance, associated stake address (if any) and UTxO set for given addresses
     * @summary Address Information
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressApi
     */
    public addressInfoPost(body?: any, options?: any) {
        return AddressServiceFp(this.configuration).addressInfoPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * Get the transaction hash list of input address array, optionally filtering after specified block height (inclusive)
     * @summary Address Transactions
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressApi
     */
    public addressTxsPost(body?: any, options?: any) {
        return AddressServiceFp(this.configuration).addressTxsPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * Get the transaction hash list of input payment credential array, optionally filtering after specified block height (inclusive)
     * @summary Transactions from payment credentials
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressApi
     */
    public credentialTxsPost(body?: any, options?: any) {
        return AddressServiceFp(this.configuration).credentialTxsPost(body, options)(this.fetch, this.basePath);
    }

}