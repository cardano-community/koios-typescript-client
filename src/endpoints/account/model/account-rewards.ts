/**
 * Account Rewards
 * @export
 * @interface AccountRewards
 */
export interface AccountRewards {
    /**
     * Cardano staking address (reward account) in bech32 format
     * @type {string}
     * @memberof AccountRewards
     */
    stakeAddress?: string;
    /**
     * Array of Account Rewards
     * @type {Array<AccountReward>}
     * @memberof AccountRewards
     */
    rewards?: Array<AccountReward>;
}

/**
 * Account Rewards Inner
 * @export
 * @interface AccountReward
 */
export interface AccountReward {
    /**
     * Earned Rewards Epoch
     * @type {number}
     * @memberof AccountReward
     */
    earnedEpoch?: number;
    /**
     * Spendable Epoch
     * @type {number}
     * @memberof AccountReward
     */
    spendableEpoch?: number;
    /**
     * Amount of rewards earned (in lovelace)
     * @type {string}
     * @memberof AccountReward
     */
    amount?: string;
    /**
     * The source of the rewards
     * Allowed: member|leader|treasury|reserves
     * @type {string}
     * @memberof AccountReward
     */
    type?: string;
    /**
     * Bech32 representation of pool ID
     * @type {string}
     * @memberof AccountReward
     */
    poolId?: string;
}