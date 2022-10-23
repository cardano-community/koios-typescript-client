import {BASE_PATH, Configuration} from "../../config/configuration";
import {FetchAPI, FetchArgs} from "../base/base-service";
import url from "url";
import isomorphicFetch from "isomorphic-fetch";
import {Genesis} from "./model/genesis";
import {Tip} from "./model/tip";
import {Totals} from "./model/totals";

/**
 * NetworkServiceFp - functional programming interface
 * @export
 */
export const NetworkServiceFp = function(configuration?: Configuration) {
    return {
        /**
         * Get the Genesis parameters used to start specific era on chain
         * @summary Get Genesis info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        genesisGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Genesis> {
            const localVarFetchArgs = NetworkApiFetchParamCreator(configuration).genesisGet(options);
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
         * Get the tip info about the latest block seen by chain
         * @summary Query Chain Tip
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tipGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Tip> {
            const localVarFetchArgs = NetworkApiFetchParamCreator(configuration).tipGet(options);
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
         * Get the circulating utxo, treasury, rewards, supply and reserves in lovelace for specified epoch, all epochs if empty
         * @summary Get historical tokenomic stats
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        totalsGet(epochNo?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Totals>> {
            const localVarFetchArgs = NetworkApiFetchParamCreator(configuration).totalsGet(epochNo, options);
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
 * NetworkService - fetch parameter creator
 * @export
 */
export const NetworkApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the Genesis parameters used to start specific era on chain
         * @summary Get Genesis info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        genesisGet(options: any = {}): FetchArgs {
            const localVarPath = `/genesis`;
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
         * Get the tip info about the latest block seen by chain
         * @summary Query Chain Tip
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tipGet(options: any = {}): FetchArgs {
            const localVarPath = `/tip`;
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
         * Get the circulating utxo, treasury, rewards, supply and reserves in lovelace for specified epoch, all epochs if empty
         * @summary Get historical tokenomic stats
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        totalsGet(epochNo?: string, options: any = {}): FetchArgs {
            const localVarPath = `/totals`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (epochNo !== undefined) {
                localVarQueryParameter['_epoch_no'] = epochNo;
            }

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