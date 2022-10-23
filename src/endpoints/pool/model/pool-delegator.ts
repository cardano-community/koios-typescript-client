/**
 * Pool Delegator
 * @export
 * @interface PoolDelegator
 */
export interface PoolDelegator {
    /**
     * Cardano staking address (reward account) in bech32 format
     * @type {string}
     * @memberof PoolDelegator
     */
    stakeAddress?: string;
    /**
     * Current delegator live stake (in lovelace)
     * @type {string}
     * @memberof PoolDelegator
     */
    amount?: string;
    /**
     * Epoch number in which the delegation becomes active
     * @type {number}
     * @memberof PoolDelegator
     */
    activeEpochNo?: number;
    /**
     * Latest transaction hash used for delegation by the account
     * @type {string}
     * @memberof PoolDelegator
     */
    latestDelegationHash?: string;
}