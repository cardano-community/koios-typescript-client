import {BaseService} from "../base/base-service";
import {PoolServiceFp} from "./pool-service-fp";

/**
 * Pool Service - object-oriented interface
 * @export
 * @class PoolApi
 * @extends {BaseService}
 */
export class PoolService extends BaseService {
    /**
     * Return information about blocks minted by a given pool for all epochs (or _epoch_no if provided)
     * @summary Pool Blocks
     * @param {string} poolBech32 Pool ID in bech32 format
     * @param {string} [epochNo] Epoch Number to fetch details for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolApi
     */
    public poolBlocksGet(poolBech32: string, epochNo?: string, options?: any) {
        return PoolServiceFp(this.configuration).poolBlocksGet(poolBech32, epochNo, options)(this.fetch, this.basePath);
    }

    /**
     * Return information about live delegators for a given pool.
     * @summary Pool Delegators List
     * @param {string} poolBech32 Pool ID in bech32 format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolApi
     */
    public poolDelegatorsGet(poolBech32: string, options?: any) {
        return PoolServiceFp(this.configuration).poolDelegatorsGet(poolBech32, options)(this.fetch, this.basePath);
    }

    /**
     * Return information about active delegators (incl. history) for a given pool and epoch number (all epochs if not specified).
     * @summary Pool Delegators History
     * @param {string} poolBech32 Pool ID in bech32 format
     * @param {string} [epochNo] Epoch Number to fetch details for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolApi
     */
    public poolDelegatorsHistoryGet(poolBech32: string, epochNo?: string, options?: any) {
        return PoolServiceFp(this.configuration).poolDelegatorsHistoryGet(poolBech32, epochNo, options)(this.fetch, this.basePath);
    }

    /**
     * Return information about pool stake, block and reward history in a given epoch _epoch_no (or all epochs that pool existed for, in descending order if no _epoch_no was provided)
     * @summary Pool Stake, Block and Reward History
     * @param {string} poolBech32 Pool ID in bech32 format
     * @param {string} [epochNo] Epoch Number to fetch details for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolApi
     */
    public poolHistoryGet(poolBech32: string, epochNo?: string, options?: any) {
        return PoolServiceFp(this.configuration).poolHistoryGet(poolBech32, epochNo, options)(this.fetch, this.basePath);
    }

    /**
     * Current pool statuses and details for a specified list of pool ids
     * @summary Pool Information
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolApi
     */
    public poolInfoPost(body?: any, options?: any) {
        return PoolServiceFp(this.configuration).poolInfoPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * A list of all currently registered/retiring (not retired) pools
     * @summary Pool List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolApi
     */
    public poolListGet(options?: any) {
        return PoolServiceFp(this.configuration).poolListGet(options)(this.fetch, this.basePath);
    }

    /**
     * Metadata (on & off-chain) for all currently registered/retiring (not retired) pools
     * @summary Pool Metadata
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolApi
     */
    public poolMetadataPost(body?: any, options?: any) {
        return PoolServiceFp(this.configuration).poolMetadataPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * A list of registered relays for all currently registered/retiring (not retired) pools
     * @summary Pool Relays
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolApi
     */
    public poolRelaysGet(options?: any) {
        return PoolServiceFp(this.configuration).poolRelaysGet(options)(this.fetch, this.basePath);
    }

    /**
     * Returns Mark, Set and Go stake snapshots for the selected pool, useful for leaderlog calculation
     * @summary Pool Stake Snapshot
     * @param {string} poolBech32 Pool ID in bech32 format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolApi
     */
    public poolStakeSnapshotGet(poolBech32: string, options?: any) {
        return PoolServiceFp(this.configuration).poolStakeSnapshotGet(poolBech32, options)(this.fetch, this.basePath);
    }

    /**
     * Return all pool updates for all pools or only updates for specific pool if specified
     * @summary Pool Updates (History)
     * @param {string} [poolBech32] Pool ID in bech32 format (optional)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolApi
     */
    public poolUpdatesGet(poolBech32?: string, options?: any) {
        return PoolServiceFp(this.configuration).poolUpdatesGet(poolBech32, options)(this.fetch, this.basePath);
    }
}