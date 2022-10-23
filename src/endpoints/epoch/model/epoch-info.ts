/**
 * Epoch Information
 * @export
 * @interface EpochInfo
 */
export interface EpochInfo {
    /**
     * Epoch number
     * @type {number}
     * @memberof EpochInfo
     */
    epochNo?: number;
    /**
     * Total output value across all transactions in epoch
     * @type {string}
     * @memberof EpochInfo
     */
    outSum?: string;
    /**
     * Total fees incurred by transactions in epoch
     * @type {string}
     * @memberof EpochInfo
     */
    fees?: string;
    /**
     * Number of transactions submitted in epoch
     * @type {number}
     * @memberof EpochInfo
     */
    txCount?: number;
    /**
     * Number of blocks created in epoch
     * @type {number}
     * @memberof EpochInfo
     */
    blkCount?: number;
    /**
     * UNIX timestamp of the epoch start
     * @type {number}
     * @memberof EpochInfo
     */
    startTime?: number;
    /**
     * UNIX timestamp of the epoch end
     * @type {number}
     * @memberof EpochInfo
     */
    endTime?: number;
    /**
     * UNIX timestamp of the epoch's first block
     * @type {number}
     * @memberof EpochInfo
     */
    firstBlockTime?: number;
    /**
     * UNIX timestamp of the epoch's last block
     * @type {number}
     * @memberof EpochInfo
     */
    lastBlockTime?: number;
    /**
     * Total active stake in epoch stake snapshot (null for pre-Shelley epochs)
     * @type {string}
     * @memberof EpochInfo
     */
    activeStake?: string;
    /**
     * Total rewards earned in epoch (null for pre-Shelley epochs)
     * @type {string}
     * @memberof EpochInfo
     */
    totalRewards?: string;
    /**
     * Average block reward for epoch (null for pre-Shelley epochs)
     * @type {string}
     * @memberof EpochInfo
     */
    avgBlkReward?: string;
}