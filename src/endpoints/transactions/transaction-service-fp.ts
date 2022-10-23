import {BASE_PATH, Configuration} from "../../config/configuration";
import {FetchAPI, FetchArgs} from "../base/base-service";
import url from "url";
import isomorphicFetch from "isomorphic-fetch";
import {TxInfo} from "./model/tx-info";
import {TxMetadata} from "./model/tx-metadata";
import {TxMetalabels} from "./model/tx-metalabels";
import {TxStatus} from "./model/tx-status";
import {TxUtxos} from "./model/tx-utxos";

/**
 * Transaction Service - functional programming interface
 * @export
 */
export const TransactionServiceFp = function(configuration?: Configuration) {
    return {
        /**
         * Submit an already serialized transaction to the network.
         * @summary Submit Transaction
         * @param {Object} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submittxPost(body?: Object, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string> {
            const localVarFetchArgs = TransactionsApiFetchParamCreator(configuration).submittxPost(body, options);
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
         * Get detailed information about transaction(s)
         * @summary Transaction Information
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        txInfoPost(body?: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<TxInfo>> {
            const localVarFetchArgs = TransactionsApiFetchParamCreator(configuration).txInfoPost(body, options);
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
         * Get metadata information (if any) for given transaction(s)
         * @summary Transaction Metadata
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        txMetadataPost(body?: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<TxMetadata>> {
            const localVarFetchArgs = TransactionsApiFetchParamCreator(configuration).txMetadataPost(body, options);
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
         * Get a list of all transaction metalabels
         * @summary Transaction Metadata Labels
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        txMetalabelsGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<TxMetalabels>> {
            const localVarFetchArgs = TransactionsApiFetchParamCreator(configuration).txMetalabelsGet(options);
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
         * Get the number of block confirmations for a given transaction hash list
         * @summary Transaction Status (Block Confirmations)
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        txStatusPost(body?: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<TxStatus>> {
            const localVarFetchArgs = TransactionsApiFetchParamCreator(configuration).txStatusPost(body, options);
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
         * Get UTxO set (inputs/outputs) of transactions.
         * @summary Transaction UTxOs
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        txUtxosPost(body?: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<TxUtxos>> {
            const localVarFetchArgs = TransactionsApiFetchParamCreator(configuration).txUtxosPost(body, options);
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
 * TransactionsApi - fetch parameter creator
 * @export
 */
export const TransactionsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Submit an already serialized transaction to the network.
         * @summary Submit Transaction
         * @param {Object} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submittxPost: function (body?: Object, options: any = {}): FetchArgs {
            const localVarPath = `/submittx`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({method: 'POST'}, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/cbor';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"Object" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get detailed information about transaction(s)
         * @summary Transaction Information
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        txInfoPost: function (body?: any, options: any = {}): FetchArgs {
            const localVarPath = `/tx_info`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({method: 'POST'}, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"any" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get metadata information (if any) for given transaction(s)
         * @summary Transaction Metadata
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        txMetadataPost(body?: any, options: any = {}): FetchArgs {
            const localVarPath = `/tx_metadata`;
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
         * Get a list of all transaction metalabels
         * @summary Transaction Metadata Labels
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        txMetalabelsGet(options: any = {}): FetchArgs {
            const localVarPath = `/tx_metalabels`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the number of block confirmations for a given transaction hash list
         * @summary Transaction Status (Block Confirmations)
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        txStatusPost(body?: any, options: any = {}): FetchArgs {
            const localVarPath = `/tx_status`;
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
         * Get UTxO set (inputs/outputs) of transactions.
         * @summary Transaction UTxOs
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        txUtxosPost(body?: any, options: any = {}): FetchArgs {
            const localVarPath = `/tx_utxos`;
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