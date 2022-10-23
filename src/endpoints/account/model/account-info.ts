/**
 * Account Information
 * @export
 * @interface AccountInfo
 */
export interface AccountInfo {
    /**
     * Cardano staking address (reward account) in bech32 format
     * @type {string}
     * @memberof AccountInfo
     */
    stakeAddress?: string;
    /**
     * Stake address status
     * @type {string}
     * @memberof AccountInfo
     */
    status?: StatusEnum;
    /**
     * Delegated Pool
     * @type {string}
     * @memberof AccountInfo
     */
    delegatedPool?: string;
    /**
     * Total balance of the account including UTxO, rewards and MIRs (in lovelace)
     * @type {string}
     * @memberof AccountInfo
     */
    totalBalance?: string;
    /**
     * Total UTxO balance of the account
     * @type {string}
     * @memberof AccountInfo
     */
    utxo?: string;
    /**
     * Total rewards earned by the account
     * @type {string}
     * @memberof AccountInfo
     */
    rewards?: string;
    /**
     * Total rewards withdrawn by the account
     * @type {string}
     * @memberof AccountInfo
     */
    withdrawals?: string;
    /**
     * Total rewards available for withdawal
     * @type {string}
     * @memberof AccountInfo
     */
    rewardsAvailable?: string;
    /**
     * Total reserves MIR value of the account
     * @type {string}
     * @memberof AccountInfo
     */
    reserves?: string;
    /**
     * Total treasury MIR value of the account
     * @type {string}
     * @memberof AccountInfo
     */
    treasury?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum StatusEnum {
    Registered = <any> 'registered',
    NotRegistered = <any> 'not registered'
}