/**
 * Pool History Information
 * @export
 * @interface PoolHistoryInfo
 */
export interface PoolHistoryInfo {
    /**
     * Epoch for which the pool history data is shown
     * @type {number}
     * @memberof PoolHistoryInfo
     */
    epochNo?: number;
    /**
     * Amount of delegated stake to this pool at the time of epoch snapshot (in lovelaces)
     * @type {string}
     * @memberof PoolHistoryInfo
     */
    activeStake?: string;
    /**
     * Active stake for the pool, expressed as a percentage of total active stake on network
     * @type {number}
     * @memberof PoolHistoryInfo
     */
    activeStakePct?: number;
    /**
     * Saturation percentage of a pool at the time of snapshot (2 decimals)
     * @type {number}
     * @memberof PoolHistoryInfo
     */
    saturationPct?: number;
    /**
     * Number of blocks pool created in that epoch
     * @type {number}
     * @memberof PoolHistoryInfo
     */
    blockCnt?: number;
    /**
     * Number of delegators to the pool for that epoch snapshot
     * @type {number}
     * @memberof PoolHistoryInfo
     */
    delegatorCnt?: number;
    /**
     * Margin (decimal format)
     * @type {number}
     * @memberof PoolHistoryInfo
     */
    margin?: number;
    /**
     * Pool fixed cost per epoch (in lovelaces)
     * @type {string}
     * @memberof PoolHistoryInfo
     */
    fixedCost?: string;
    /**
     * Total amount of fees earned by pool owners in that epoch (in lovelaces)
     * @type {string}
     * @memberof PoolHistoryInfo
     */
    poolFees?: string;
    /**
     * Total amount of rewards earned by delegators in that epoch (in lovelaces)
     * @type {string}
     * @memberof PoolHistoryInfo
     */
    delegRewards?: string;
    /**
     * Annualized ROS (return on staking) for delegators for this epoch
     * @type {number}
     * @memberof PoolHistoryInfo
     */
    epochRos?: number;
}