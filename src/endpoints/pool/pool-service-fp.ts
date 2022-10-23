import {BASE_PATH, Configuration} from "../../config/configuration";
import {FetchAPI, FetchArgs} from "../base/base-service";
import {RequiredError} from "../base/error/required-error";
import url from "url";
import isomorphicFetch from "isomorphic-fetch";
import {PoolBlock} from "./model/pool-block";
import {PoolDelegator} from "./model/pool-delegator";
import {PoolDelegatorsHistory} from "./model/pool-delegators-history";
import {PoolHistoryInfo} from "./model/pool-history-info";
import {PoolInfo} from "./model/pool-info";
import {Pool} from "./model/pool";
import {PoolMetadata} from "./model/pool-metadata";
import {PoolRelay} from "./model/pool-relay";
import {PoolSnapshot} from "./model/pool-snapshot";
import {PoolUpdates} from "./model/pool-updates";

/**
 * PoolServiceFp - functional programming interface
 * @export
 */
export const PoolServiceFp = function(configuration?: Configuration) {
    return {
        /**
         * Return information about blocks minted by a given pool for all epochs (or _epoch_no if provided)
         * @summary Pool Blocks
         * @param {string} poolBech32 Pool ID in bech32 format
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolBlocksGet(poolBech32: string, epochNo?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<PoolBlock>> {
            const localVarFetchArgs = PoolApiFetchParamCreator(configuration).poolBlocksGet(poolBech32, epochNo, options);
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
         * Return information about live delegators for a given pool.
         * @summary Pool Delegators List
         * @param {string} poolBech32 Pool ID in bech32 format
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolDelegatorsGet(poolBech32: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<PoolDelegator>> {
            const localVarFetchArgs = PoolApiFetchParamCreator(configuration).poolDelegatorsGet(poolBech32, options);
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
         * Return information about active delegators (incl. history) for a given pool and epoch number (all epochs if not specified).
         * @summary Pool Delegators History
         * @param {string} poolBech32 Pool ID in bech32 format
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolDelegatorsHistoryGet(poolBech32: string, epochNo?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<PoolDelegatorsHistory>> {
            const localVarFetchArgs = PoolApiFetchParamCreator(configuration).poolDelegatorsHistoryGet(poolBech32, epochNo, options);
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
         * Return information about pool stake, block and reward history in a given epoch _epoch_no (or all epochs that pool existed for, in descending order if no _epoch_no was provided)
         * @summary Pool Stake, Block and Reward History
         * @param {string} poolBech32 Pool ID in bech32 format
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolHistoryGet(poolBech32: string, epochNo?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<PoolHistoryInfo>> {
            const localVarFetchArgs = PoolApiFetchParamCreator(configuration).poolHistoryGet(poolBech32, epochNo, options);
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
         * Current pool statuses and details for a specified list of pool ids
         * @summary Pool Information
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolInfoPost(body?: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<PoolInfo>> {
            const localVarFetchArgs = PoolApiFetchParamCreator(configuration).poolInfoPost(body, options);
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
         * A list of all currently registered/retiring (not retired) pools
         * @summary Pool List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolListGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Pool>> {
            const localVarFetchArgs = PoolApiFetchParamCreator(configuration).poolListGet(options);
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
         * Metadata (on & off-chain) for all currently registered/retiring (not retired) pools
         * @summary Pool Metadata
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolMetadataPost(body?: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<PoolMetadata>> {
            const localVarFetchArgs = PoolApiFetchParamCreator(configuration).poolMetadataPost(body, options);
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
         * A list of registered relays for all currently registered/retiring (not retired) pools
         * @summary Pool Relays
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolRelaysGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<PoolRelay>> {
            const localVarFetchArgs = PoolApiFetchParamCreator(configuration).poolRelaysGet(options);
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
         * Returns Mark, Set and Go stake snapshots for the selected pool, useful for leaderlog calculation
         * @summary Pool Stake Snapshot
         * @param {string} poolBech32 Pool ID in bech32 format
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolStakeSnapshotGet(poolBech32: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<PoolSnapshot>> {
            const localVarFetchArgs = PoolApiFetchParamCreator(configuration).poolStakeSnapshotGet(poolBech32, options);
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
         * Return all pool updates for all pools or only updates for specific pool if specified
         * @summary Pool Updates (History)
         * @param {string} [poolBech32] Pool ID in bech32 format (optional)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolUpdatesGet(poolBech32?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<PoolUpdates>> {
            const localVarFetchArgs = PoolApiFetchParamCreator(configuration).poolUpdatesGet(poolBech32, options);
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
 * PoolApi - fetch parameter creator
 * @export
 */
export const PoolApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Return information about blocks minted by a given pool for all epochs (or _epoch_no if provided)
         * @summary Pool Blocks
         * @param {string} poolBech32 Pool ID in bech32 format
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolBlocksGet(poolBech32: string, epochNo?: string, options: any = {}): FetchArgs {
            // verify required parameter 'poolBech32' is not null or undefined
            if (poolBech32 === null || poolBech32 === undefined) {
                throw new RequiredError('poolBech32','Required parameter poolBech32 was null or undefined when calling poolBlocksGet.');
            }
            const localVarPath = `/pool_blocks`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (poolBech32 !== undefined) {
                localVarQueryParameter['_pool_bech32'] = poolBech32;
            }

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
         * Return information about live delegators for a given pool.
         * @summary Pool Delegators List
         * @param {string} poolBech32 Pool ID in bech32 format
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolDelegatorsGet(poolBech32: string, options: any = {}): FetchArgs {
            // verify required parameter 'poolBech32' is not null or undefined
            if (poolBech32 === null || poolBech32 === undefined) {
                throw new RequiredError('poolBech32','Required parameter poolBech32 was null or undefined when calling poolDelegatorsGet.');
            }
            const localVarPath = `/pool_delegators`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (poolBech32 !== undefined) {
                localVarQueryParameter['_pool_bech32'] = poolBech32;
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
         * Return information about active delegators (incl. history) for a given pool and epoch number (all epochs if not specified).
         * @summary Pool Delegators History
         * @param {string} poolBech32 Pool ID in bech32 format
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolDelegatorsHistoryGet(poolBech32: string, epochNo?: string, options: any = {}): FetchArgs {
            // verify required parameter 'poolBech32' is not null or undefined
            if (poolBech32 === null || poolBech32 === undefined) {
                throw new RequiredError('poolBech32','Required parameter poolBech32 was null or undefined when calling poolDelegatorsHistoryGet.');
            }
            const localVarPath = `/pool_delegators_history`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (poolBech32 !== undefined) {
                localVarQueryParameter['_pool_bech32'] = poolBech32;
            }

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
         * Return information about pool stake, block and reward history in a given epoch _epoch_no (or all epochs that pool existed for, in descending order if no _epoch_no was provided)
         * @summary Pool Stake, Block and Reward History
         * @param {string} poolBech32 Pool ID in bech32 format
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolHistoryGet(poolBech32: string, epochNo?: string, options: any = {}): FetchArgs {
            // verify required parameter 'poolBech32' is not null or undefined
            if (poolBech32 === null || poolBech32 === undefined) {
                throw new RequiredError('poolBech32','Required parameter poolBech32 was null or undefined when calling poolHistoryGet.');
            }
            const localVarPath = `/pool_history`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (poolBech32 !== undefined) {
                localVarQueryParameter['_pool_bech32'] = poolBech32;
            }

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
         * Current pool statuses and details for a specified list of pool ids
         * @summary Pool Information
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolInfoPost(body?: any, options: any = {}): FetchArgs {
            const localVarPath = `/pool_info`;
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
         * A list of all currently registered/retiring (not retired) pools
         * @summary Pool List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolListGet(options: any = {}): FetchArgs {
            const localVarPath = `/pool_list`;
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
         * Metadata (on & off-chain) for all currently registered/retiring (not retired) pools
         * @summary Pool Metadata
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolMetadataPost(body?: any, options: any = {}): FetchArgs {
            const localVarPath = `/pool_metadata`;
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
         * A list of registered relays for all currently registered/retiring (not retired) pools
         * @summary Pool Relays
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolRelaysGet(options: any = {}): FetchArgs {
            const localVarPath = `/pool_relays`;
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
         * Returns Mark, Set and Go stake snapshots for the selected pool, useful for leaderlog calculation
         * @summary Pool Stake Snapshot
         * @param {string} poolBech32 Pool ID in bech32 format
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolStakeSnapshotGet(poolBech32: string, options: any = {}): FetchArgs {
            // verify required parameter 'poolBech32' is not null or undefined
            if (poolBech32 === null || poolBech32 === undefined) {
                throw new RequiredError('poolBech32','Required parameter poolBech32 was null or undefined when calling poolStakeSnapshotGet.');
            }
            const localVarPath = `/pool_stake_snapshot`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (poolBech32 !== undefined) {
                localVarQueryParameter['_pool_bech32'] = poolBech32;
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
         * Return all pool updates for all pools or only updates for specific pool if specified
         * @summary Pool Updates (History)
         * @param {string} [poolBech32] Pool ID in bech32 format (optional)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolUpdatesGet(poolBech32?: string, options: any = {}): FetchArgs {
            const localVarPath = `/pool_updates`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (poolBech32 !== undefined) {
                localVarQueryParameter['_pool_bech32'] = poolBech32;
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