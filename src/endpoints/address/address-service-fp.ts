import {BASE_PATH, Configuration} from "../../config/configuration";
import isomorphicFetch from "isomorphic-fetch";
import url from "url";
import {FetchAPI, FetchArgs} from "../base/base-service";
import {AddressAsset} from "./model/address-asset";
import {AddressInfo} from "./model/address-info";
import {TxHash} from "../common/tx-hash";

/**
 * AddressApi - functional programming interface
 * @export
 */
export const AddressServiceFp = function(configuration?: Configuration) {
    return {
        /**
         * Get the list of all the assets (policy, name and quantity) for given addresses
         * @summary Address Assets
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addressAssetsPost(body?: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<AddressAsset>> {
            const localVarFetchArgs = AddressApiFetchParamCreator(configuration).addressAssetsPost(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Get address info - balance, associated stake address (if any) and UTxO set for given addresses
         * @summary Address Information
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addressInfoPost(body?: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<AddressInfo>> {
            const localVarFetchArgs = AddressApiFetchParamCreator(configuration).addressInfoPost(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Get the transaction hash list of input address array, optionally filtering after specified block height (inclusive)
         * @summary Address Transactions
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addressTxsPost(body?: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<TxHash>> {
            const localVarFetchArgs = AddressApiFetchParamCreator(configuration).addressTxsPost(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Get the transaction hash list of input payment credential array, optionally filtering after specified block height (inclusive)
         * @summary Transactions from payment credentials
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        credentialTxsPost(body?: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<TxHash>> {
            const localVarFetchArgs = AddressApiFetchParamCreator(configuration).credentialTxsPost(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * AddressApi - fetch parameter creator
 * @export
 */
export const AddressApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the list of all the assets (policy, name and quantity) for given addresses
         * @summary Address Assets
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addressAssetsPost(body?: any, options: any = {}): FetchArgs {
            const localVarPath = `/address_assets`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"any" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get address info - balance, associated stake address (if any) and UTxO set for given addresses
         * @summary Address Information
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addressInfoPost(body?: any, options: any = {}): FetchArgs {
            const localVarPath = `/address_info`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"any" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the transaction hash list of input address array, optionally filtering after specified block height (inclusive)
         * @summary Address Transactions
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addressTxsPost(body?: any, options: any = {}): FetchArgs {
            const localVarPath = `/address_txs`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"any" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the transaction hash list of input payment credential array, optionally filtering after specified block height (inclusive)
         * @summary Transactions from payment credentials
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        credentialTxsPost(body?: any, options: any = {}): FetchArgs {
            const localVarPath = `/credential_txs`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"any" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};