import {BASE_PATH, Configuration} from "../../config/configuration";
import url from "url";
import {FetchAPI, FetchArgs} from "../base/base-service";
import isomorphicFetch from "isomorphic-fetch";
import {AssetAddress} from "./model/asset-address";
import {AssetHistory} from "./model/asset-history";
import {AssetInfo} from "../address/model/address-asset";
import {Asset} from "./model/asset";
import {PolicyAsset} from "./model/policy-asset";
import {AssetSummary} from "./model/asset-summary";
import {TxHash} from "../common/tx-hash";
import {RequiredError} from "../base/error/required-error";

/**
 * AssetServiceFp - functional programming interface
 * @export
 */
export const AssetServiceFp = function(configuration?: Configuration) {
    return {
        /**
         * Get the list of all addresses holding a given asset
         * @summary Asset Address List
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {string} [assetName] Asset Name in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetAddressListGet(assetPolicy: string, assetName?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<AssetAddress>> {
            const localVarFetchArgs = AssetApiFetchParamCreator(configuration).assetAddressListGet(assetPolicy, assetName, options);
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
         * Get the mint/burn history of an asset
         * @summary Asset History
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {string} [assetName] Asset Name in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetHistoryGet(assetPolicy: string, assetName?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<AssetHistory>> {
            const localVarFetchArgs = AssetApiFetchParamCreator(configuration).assetHistoryGet(assetPolicy, assetName, options);
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
         * Get the information of an asset including first minting & token registry metadata
         * @summary Asset Information
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {string} [assetName] Asset Name in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetInfoGet(assetPolicy: string, assetName?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<AssetInfo>> {
            const localVarFetchArgs = AssetApiFetchParamCreator(configuration).assetInfoGet(assetPolicy, assetName, options);
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
         * Get the list of all native assets (paginated)
         * @summary Asset List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetListGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Asset>> {
            const localVarFetchArgs = AssetApiFetchParamCreator(configuration).assetListGet(options);
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
         * Get the information for all assets under the same policy
         * @summary Asset Policy Information
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetPolicyInfoGet(assetPolicy: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<PolicyAsset>> {
            const localVarFetchArgs = AssetApiFetchParamCreator(configuration).assetPolicyInfoGet(assetPolicy, options);
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
         * Get the summary of an asset (total transactions exclude minting/total wallets include only wallets with asset balance)
         * @summary Asset Summary
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {string} [assetName] Asset Name in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetSummaryGet(assetPolicy: string, assetName?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<AssetSummary>> {
            const localVarFetchArgs = AssetApiFetchParamCreator(configuration).assetSummaryGet(assetPolicy, assetName, options);
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
         * Get the list of all asset transaction hashes (newest first)
         * @summary Asset Transaction History
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {string} [assetName] Asset Name in hexadecimal format (hex)
         * @param {number} [afterBlockHeight] Block height for specifying time delta
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetTxsGet(assetPolicy: string, assetName?: string, afterBlockHeight?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<TxHash>> {
            const localVarFetchArgs = AssetApiFetchParamCreator(configuration).assetTxsGet(assetPolicy, assetName, afterBlockHeight, options);
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
 * AssetApi - fetch parameter creator
 * @export
 */
export const AssetApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the list of all addresses holding a given asset
         * @summary Asset Address List
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {string} [assetName] Asset Name in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetAddressListGet(assetPolicy: string, assetName?: string, options: any = {}): FetchArgs {
            // verify required parameter 'assetPolicy' is not null or undefined
            if (assetPolicy === null || assetPolicy === undefined) {
                throw new RequiredError('assetPolicy','Required parameter assetPolicy was null or undefined when calling assetAddressListGet.');
            }
            const localVarPath = `/asset_address_list`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (assetPolicy !== undefined) {
                localVarQueryParameter['_asset_policy'] = assetPolicy;
            }

            if (assetName !== undefined) {
                localVarQueryParameter['_asset_name'] = assetName;
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
         * Get the mint/burn history of an asset
         * @summary Asset History
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {string} [assetName] Asset Name in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetHistoryGet(assetPolicy: string, assetName?: string, options: any = {}): FetchArgs {
            // verify required parameter 'assetPolicy' is not null or undefined
            if (assetPolicy === null || assetPolicy === undefined) {
                throw new RequiredError('assetPolicy','Required parameter assetPolicy was null or undefined when calling assetHistoryGet.');
            }
            const localVarPath = `/asset_history`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (assetPolicy !== undefined) {
                localVarQueryParameter['_asset_policy'] = assetPolicy;
            }

            if (assetName !== undefined) {
                localVarQueryParameter['_asset_name'] = assetName;
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
         * Get the information of an asset including first minting & token registry metadata
         * @summary Asset Information
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {string} [assetName] Asset Name in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetInfoGet(assetPolicy: string, assetName?: string, options: any = {}): FetchArgs {
            // verify required parameter 'assetPolicy' is not null or undefined
            if (assetPolicy === null || assetPolicy === undefined) {
                throw new RequiredError('assetPolicy','Required parameter assetPolicy was null or undefined when calling assetInfoGet.');
            }
            const localVarPath = `/asset_info`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (assetPolicy !== undefined) {
                localVarQueryParameter['_asset_policy'] = assetPolicy;
            }

            if (assetName !== undefined) {
                localVarQueryParameter['_asset_name'] = assetName;
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
         * Get the list of all native assets (paginated)
         * @summary Asset List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetListGet(options: any = {}): FetchArgs {
            const localVarPath = `/asset_list`;
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
         * Get the information for all assets under the same policy
         * @summary Asset Policy Information
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetPolicyInfoGet(assetPolicy: string, options: any = {}): FetchArgs {
            // verify required parameter 'assetPolicy' is not null or undefined
            if (assetPolicy === null || assetPolicy === undefined) {
                throw new RequiredError('assetPolicy','Required parameter assetPolicy was null or undefined when calling assetPolicyInfoGet.');
            }
            const localVarPath = `/asset_policy_info`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (assetPolicy !== undefined) {
                localVarQueryParameter['_asset_policy'] = assetPolicy;
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
         * Get the summary of an asset (total transactions exclude minting/total wallets include only wallets with asset balance)
         * @summary Asset Summary
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {string} [assetName] Asset Name in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetSummaryGet(assetPolicy: string, assetName?: string, options: any = {}): FetchArgs {
            // verify required parameter 'assetPolicy' is not null or undefined
            if (assetPolicy === null || assetPolicy === undefined) {
                throw new RequiredError('assetPolicy','Required parameter assetPolicy was null or undefined when calling assetSummaryGet.');
            }
            const localVarPath = `/asset_summary`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (assetPolicy !== undefined) {
                localVarQueryParameter['_asset_policy'] = assetPolicy;
            }

            if (assetName !== undefined) {
                localVarQueryParameter['_asset_name'] = assetName;
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
         * Get the list of all asset transaction hashes (newest first)
         * @summary Asset Transaction History
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {string} [assetName] Asset Name in hexadecimal format (hex)
         * @param {number} [afterBlockHeight] Block height for specifying time delta
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetTxsGet(assetPolicy: string, assetName?: string, afterBlockHeight?: number, options: any = {}): FetchArgs {
            // verify required parameter 'assetPolicy' is not null or undefined
            if (assetPolicy === null || assetPolicy === undefined) {
                throw new RequiredError('assetPolicy','Required parameter assetPolicy was null or undefined when calling assetTxsGet.');
            }
            const localVarPath = `/asset_txs`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (assetPolicy !== undefined) {
                localVarQueryParameter['_asset_policy'] = assetPolicy;
            }

            if (assetName !== undefined) {
                localVarQueryParameter['_asset_name'] = assetName;
            }

            if (afterBlockHeight !== undefined) {
                localVarQueryParameter['_after_block_height'] = afterBlockHeight;
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