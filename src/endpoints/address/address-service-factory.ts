import {Configuration} from "../../config/configuration";
import {AddressServiceFp} from "./address-service-fp";
import {FetchAPI} from "../base/base-service";

/**
 * AddressApi - factory interface
 * @export
 */
export const AddressServiceFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Get the list of all the assets (policy, name and quantity) for given addresses
         * @summary Address Assets
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addressAssetsPost(body?: any, options?: any) {
            return AddressServiceFp(configuration).addressAssetsPost(body, options)(fetch, basePath);
        },
        /**
         * Get address info - balance, associated stake address (if any) and UTxO set for given addresses
         * @summary Address Information
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addressInfoPost(body?: any, options?: any) {
            return AddressServiceFp(configuration).addressInfoPost(body, options)(fetch, basePath);
        },
        /**
         * Get the transaction hash list of input address array, optionally filtering after specified block height (inclusive)
         * @summary Address Transactions
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addressTxsPost(body?: any, options?: any) {
            return AddressServiceFp(configuration).addressTxsPost(body, options)(fetch, basePath);
        },
        /**
         * Get the transaction hash list of input payment credential array, optionally filtering after specified block height (inclusive)
         * @summary Transactions from payment credentials
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        credentialTxsPost(body?: any, options?: any) {
            return AddressServiceFp(configuration).credentialTxsPost(body, options)(fetch, basePath);
        },
    };
};