import {Configuration} from "../../config/configuration";
import {FetchAPI} from "../base/base-service";
import {PoolServiceFp} from "./pool-service-fp";

/**
 * PoolServiceFactory - factory interface
 * @export
 */
export const PoolServiceFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Return information about blocks minted by a given pool for all epochs (or _epoch_no if provided)
         * @summary Pool Blocks
         * @param {string} poolBech32 Pool ID in bech32 format
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolBlocksGet(poolBech32: string, epochNo?: string, options?: any) {
            return PoolServiceFp(configuration).poolBlocksGet(poolBech32, epochNo, options)(fetch, basePath);
        },
        /**
         * Return information about live delegators for a given pool.
         * @summary Pool Delegators List
         * @param {string} poolBech32 Pool ID in bech32 format
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolDelegatorsGet(poolBech32: string, options?: any) {
            return PoolServiceFp(configuration).poolDelegatorsGet(poolBech32, options)(fetch, basePath);
        },
        /**
         * Return information about active delegators (incl. history) for a given pool and epoch number (all epochs if not specified).
         * @summary Pool Delegators History
         * @param {string} poolBech32 Pool ID in bech32 format
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolDelegatorsHistoryGet(poolBech32: string, epochNo?: string, options?: any) {
            return PoolServiceFp(configuration).poolDelegatorsHistoryGet(poolBech32, epochNo, options)(fetch, basePath);
        },
        /**
         * Return information about pool stake, block and reward history in a given epoch _epoch_no (or all epochs that pool existed for, in descending order if no _epoch_no was provided)
         * @summary Pool Stake, Block and Reward History
         * @param {string} poolBech32 Pool ID in bech32 format
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolHistoryGet(poolBech32: string, epochNo?: string, options?: any) {
            return PoolServiceFp(configuration).poolHistoryGet(poolBech32, epochNo, options)(fetch, basePath);
        },
        /**
         * Current pool statuses and details for a specified list of pool ids
         * @summary Pool Information
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolInfoPost(body?: any, options?: any) {
            return PoolServiceFp(configuration).poolInfoPost(body, options)(fetch, basePath);
        },
        /**
         * A list of all currently registered/retiring (not retired) pools
         * @summary Pool List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolListGet(options?: any) {
            return PoolServiceFp(configuration).poolListGet(options)(fetch, basePath);
        },
        /**
         * Metadata (on & off-chain) for all currently registered/retiring (not retired) pools
         * @summary Pool Metadata
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolMetadataPost(body?: any, options?: any) {
            return PoolServiceFp(configuration).poolMetadataPost(body, options)(fetch, basePath);
        },
        /**
         * A list of registered relays for all currently registered/retiring (not retired) pools
         * @summary Pool Relays
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolRelaysGet(options?: any) {
            return PoolServiceFp(configuration).poolRelaysGet(options)(fetch, basePath);
        },
        /**
         * Returns Mark, Set and Go stake snapshots for the selected pool, useful for leaderlog calculation
         * @summary Pool Stake Snapshot
         * @param {string} poolBech32 Pool ID in bech32 format
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolStakeSnapshotGet(poolBech32: string, options?: any) {
            return PoolServiceFp(configuration).poolStakeSnapshotGet(poolBech32, options)(fetch, basePath);
        },
        /**
         * Return all pool updates for all pools or only updates for specific pool if specified
         * @summary Pool Updates (History)
         * @param {string} [poolBech32] Pool ID in bech32 format (optional)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolUpdatesGet(poolBech32?: string, options?: any) {
            return PoolServiceFp(configuration).poolUpdatesGet(poolBech32, options)(fetch, basePath);
        },
    };
};