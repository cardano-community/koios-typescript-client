/**
 * Pool Information
 * @export
 * @interface PoolInfo
 */
import {PoolStatusEnum} from "./pool-status-enum";

export interface PoolInfo {
    /**
     * Pool ID (bech32 format)
     * @type {string}
     * @memberof PoolInfo
     */
    poolIdBech32?: string;
    /**
     * Pool ID (Hex format)
     * @type {string}
     * @memberof PoolInfo
     */
    poolIdHex?: string;
    /**
     * Block number on chain where transaction was included
     * @type {number}
     * @memberof PoolInfo
     */
    activeEpochNo?: number;
    /**
     * Pool VRF key hash
     * @type {string}
     * @memberof PoolInfo
     */
    vrfKeyHash?: string;
    /**
     * Margin (decimal format)
     * @type {number}
     * @memberof PoolInfo
     */
    margin?: number;
    /**
     * Pool fixed cost per epoch
     * @type {string}
     * @memberof PoolInfo
     */
    fixedCost?: string;
    /**
     * Pool pledge in lovelace
     * @type {string}
     * @memberof PoolInfo
     */
    pledge?: string;
    /**
     * Pool reward address
     * @type {string}
     * @memberof PoolInfo
     */
    rewardAddr?: string;
    /**
     * Array of Pool (co)owner address
     * @type {Array<string>}
     * @memberof PoolInfo
     */
    owners?: Array<string>;
    /**
     * Array of Pool Relays
     * @type {Array<any>}
     * @memberof PoolInfo
     */
    relays?: Array<any>;
    /**
     * Pool metadata URL
     * @type {string}
     * @memberof PoolInfo
     */
    metaUrl?: string;
    /**
     * Pool metadata hash
     * @type {string}
     * @memberof PoolInfo
     */
    metaHash?: string;
    /**
     * Pool Metadata json
     * @type {any}
     * @memberof PoolInfo
     */
    metaJson?: any;
    /**
     * Pool status
     * @type {PoolStatusEnum}
     * @memberof PoolInfo
     */
    poolStatus?: PoolStatusEnum;
    /**
     * Announced retiring epoch (nullable)
     * @type {number}
     * @memberof PoolInfo
     */
    retiringEpoch?: number;
    /**
     * Pool latest operational certificate hash
     * @type {string}
     * @memberof PoolInfo
     */
    opCert?: string;
    /**
     * Pool latest operational certificate counter value
     * @type {number}
     * @memberof PoolInfo
     */
    opCertCounter?: number;
    /**
     * Pool active stake (will be null post epoch transition until dbsync calculation is complete)
     * @type {string}
     * @memberof PoolInfo
     */
    activeStake?: string;
    /**
     * Pool relative active stake share
     * @type {number}
     * @memberof PoolInfo
     */
    sigma?: number;
    /**
     * Total pool blocks on chain
     * @type {number}
     * @memberof PoolInfo
     */
    blockCount?: number;
    /**
     * Summary of account balance for all pool owner's
     * @type {string}
     * @memberof PoolInfo
     */
    livePledge?: string;
    /**
     * Pool live stake
     * @type {string}
     * @memberof PoolInfo
     */
    liveStake?: string;
    /**
     * Pool live delegator count
     * @type {number}
     * @memberof PoolInfo
     */
    liveDelegators?: number;
    /**
     * Pool live saturation (decimal format)
     * @type {number}
     * @memberof PoolInfo
     */
    liveSaturation?: number;
}