/**
 * Pool Updates
 * @export
 * @interface PoolUpdates
 */
import {Relay} from "./relay";
import {PoolStatusEnum} from "./pool-status-enum";

export interface PoolUpdates {
    /**
     * Hash identifier of the transaction
     * @type {string}
     * @memberof PoolUpdates
     */
    txHash?: string;
    /**
     * UNIX timestamp of the block
     * @type {number}
     * @memberof PoolUpdates
     */
    blockTime?: number;
    /**
     * Pool ID (bech32 format)
     * @type {string}
     * @memberof PoolUpdates
     */
    poolIdBech32?: string;
    /**
     * Pool ID (Hex format)
     * @type {string}
     * @memberof PoolUpdates
     */
    poolIdHex?: string;
    /**
     * Epoch number in which the update becomes active
     * @type {number}
     * @memberof PoolUpdates
     */
    activeEpochNo?: number;
    /**
     * Pool VRF key hash
     * @type {string}
     * @memberof PoolUpdates
     */
    vrfKeyHash?: string;
    /**
     * Margin (decimal format)
     * @type {number}
     * @memberof PoolUpdates
     */
    margin?: number;
    /**
     * Pool fixed cost per epoch
     * @type {number}
     * @memberof PoolUpdates
     */
    fixedCost?: number;
    /**
     * Pool pledge in lovelace
     * @type {number}
     * @memberof PoolUpdates
     */
    pledge?: number;
    /**
     * Pool reward address
     * @type {string}
     * @memberof PoolUpdates
     */
    rewardAddr?: string;
    /**
     * Pool (co)owner addresses
     * @type {Array<string>}
     * @memberof PoolUpdates
     */
    owners?: Array<string>;
    /**
     * Relays
     * @type {Array<Relay>}
     * @memberof PoolUpdates
     */
    relays?: Array<Relay>;
    /**
     * Pool metadata URL
     * @type {string}
     * @memberof PoolUpdates
     */
    metaUrl?: string;
    /**
     * Pool metadata hash
     * @type {string}
     * @memberof PoolUpdates
     */
    metaHash?: string;
    /**
     * Historical metadata information
     * @type {any}
     * @memberof PoolUpdates
     */
    metaJson?: any;
    /**
     * Pool status
     * Allowed: registered | retiring | retired
     * @type {PoolStatusEnum}
     * @memberof PoolUpdates
     */
    poolStatus?: PoolStatusEnum;
    /**
     * Announced retiring epoch (nullable)
     * @type {number}
     * @memberof PoolUpdates
     */
    retiringEpoch?: number;
}