/**
 * Pool Delegator History
 * @export
 * @interface PoolDelegatorsHistory
 */
export interface PoolDelegatorsHistory {
    /**
     * Cardano staking address (reward account) in bech32 format
     * @type {string}
     * @memberof PoolDelegatorsHistory
     */
    stakeAddress?: string;
    /**
     * Current delegator live stake (in lovelace)
     * @type {string}
     * @memberof PoolDelegatorsHistory
     */
    amount?: string;
    /**
     * Epoch number for the delegation history
     * @type {number}
     * @memberof PoolDelegatorsHistory
     */
    epochNo?: number;
}