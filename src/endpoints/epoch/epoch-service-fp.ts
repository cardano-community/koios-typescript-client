import {BASE_PATH, Configuration} from "../../config/configuration";
import {FetchAPI, FetchArgs} from "../base/base-service";
import url from "url";
import isomorphicFetch from "isomorphic-fetch";
import {EpochBlockProtocols} from "./model/epoch-block-protocols";
import {EpochInfo} from "./model/epoch-info";
import {EpochParams} from "./model/epoch-params";

/**
 * EpochServiceFp - functional programming interface
 * @export
 */
export const EpochServiceFp = function(configuration?: Configuration) {
    return {
        /**
         * Get the information about block protocol distribution in epoch
         * @summary Epoch's Block Protocols
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        epochBlockProtocolsGet(epochNo?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<EpochBlockProtocols>> {
            const localVarFetchArgs = EpochApiFetchParamCreator(configuration).epochBlockProtocolsGet(epochNo, options);
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
         * Get the epoch information, all epochs if no epoch specified
         * @summary Epoch Information
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        epochInfoGet(epochNo?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<EpochInfo>> {
            const localVarFetchArgs = EpochApiFetchParamCreator(configuration).epochInfoGet(epochNo, options);
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
         * Get the protocol parameters for specific epoch, returns information about all epochs if no epoch specified
         * @summary Epoch's Protocol Parameters
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        epochParamsGet(epochNo?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<EpochParams>> {
            const localVarFetchArgs = EpochApiFetchParamCreator(configuration).epochParamsGet(epochNo, options);
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
 * EpochApi - fetch parameter creator
 * @export
 */
export const EpochApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the information about block protocol distribution in epoch
         * @summary Epoch's Block Protocols
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        epochBlockProtocolsGet(epochNo?: string, options: any = {}): FetchArgs {
            const localVarPath = `/epoch_block_protocols`;
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
        /**
         * Get the epoch information, all epochs if no epoch specified
         * @summary Epoch Information
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        epochInfoGet(epochNo?: string, options: any = {}): FetchArgs {
            const localVarPath = `/epoch_info`;
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
        /**
         * Get the protocol parameters for specific epoch, returns information about all epochs if no epoch specified
         * @summary Epoch's Protocol Parameters
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        epochParamsGet(epochNo?: string, options: any = {}): FetchArgs {
            const localVarPath = `/epoch_params`;
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