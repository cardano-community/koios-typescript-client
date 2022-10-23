import {BASE_PATH, Configuration} from "../../config/configuration";
import {FetchAPI, FetchArgs} from "../base/base-service";
import isomorphicFetch from "isomorphic-fetch";
import {BlockInfo} from "./model/block-info";
import {BlockTx} from "./model/block-tx";
import {Block} from "./model/block";
import url from "url";

/**
 * BlockServiceFp - functional programming interface
 * @export
 */
export const BlockServiceFp = function(configuration?: Configuration) {
    return {
        /**
         * Get detailed information about a specific block
         * @summary Block Information
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blockInfoPost(body?: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<BlockInfo>> {
            const localVarFetchArgs = BlockApiFetchParamCreator(configuration).blockInfoPost(body, options);
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
         * Get a list of all transactions included in provided blocks
         * @summary Block Transactions
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blockTxsPost(body?: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<BlockTx>> {
            const localVarFetchArgs = BlockApiFetchParamCreator(configuration).blockTxsPost(body, options);
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
         * Get summarised details about all blocks (paginated - latest first)
         * @summary Block List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blocksGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Block>> {
            const localVarFetchArgs = BlockApiFetchParamCreator(configuration).blocksGet(options);
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
 * BlockApi - fetch parameter creator
 * @export
 */
export const BlockApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get detailed information about a specific block
         * @summary Block Information
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blockInfoPost(body?: any, options: any = {}): FetchArgs {
            const localVarPath = `/block_info`;
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
         * Get a list of all transactions included in provided blocks
         * @summary Block Transactions
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blockTxsPost(body?: any, options: any = {}): FetchArgs {
            const localVarPath = `/block_txs`;
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
         * Get summarised details about all blocks (paginated - latest first)
         * @summary Block List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blocksGet(options: any = {}): FetchArgs {
            const localVarPath = `/blocks`;
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
    }
};