/**
 * Account History
 * @export
 * @interface AccountHistory
 */
export interface AccountHistory {
    /**
     * Cardano staking address (reward account) in bech32 format
     * @type {string}
     * @memberof AccountHistoryInner
     */
    stakeAddress?: string;
    /**
     * Array of Account Histories
     * @type {Array<any>}
     * @memberof AccountHistoryInner
     */
    history?: Array<AccountHistoryInner>;
}

/**
 * Account History
 * @export
 * @interface AccountHistoryInner
 */
export interface AccountHistoryInner {
    /**
     * Bech32 representation of pool ID
     * @type {string}
     * @memberof AccountHistoryInner
     */
    poolId?: string;
    /**
     * Epoch number
     * @type {number}
     * @memberof AccountHistoryInner
     */
    epochNo?: number;
    /**
     * Active stake amount (in lovelaces)
     * @type {string}
     * @memberof AccountHistoryInner
     */
    activeStake?: string;
}