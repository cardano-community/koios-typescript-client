/**
 * Pool Stake Snapshot
 * @export
 * @interface PoolSnapshot
 */
export interface PoolSnapshot {
    /**
     * Type of snapshot (\"Mark\", \"Set\" or \"Go\")
     * @type {string}
     * @memberof PoolSnapshot
     */
    snapshot?: string;
    /**
     * Epoch number for the snapshot entry
     * @type {number}
     * @memberof PoolSnapshot
     */
    epochNo?: number;
    /**
     * The nonce value for this epoch
     * @type {string}
     * @memberof PoolSnapshot
     */
    nonce?: string;
    /**
     * Pool's Active Stake for the given epoch
     * @type {string}
     * @memberof PoolSnapshot
     */
    poolStake?: string;
    /**
     * Total Active Stake for the given epoch
     * @type {string}
     * @memberof PoolSnapshot
     */
    activeStake?: string;
}