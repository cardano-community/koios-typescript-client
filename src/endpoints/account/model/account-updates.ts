/**
 * Account Updates
 * @export
 * @interface AccountUpdates
 */
export interface AccountUpdates {
    /**
     * Cardano staking address (reward account) in bech32 format
     * @type {string}
     * @memberof AccountUpdates
     */
    stakeAddress?: string;
    /**
     * Array of Account Updates
     * @type {Array<AccountUpdate>}
     * @memberof AccountUpdates
     */
    updates?: Array<AccountUpdate>;
}

/**
 * Account Update
 */
export interface AccountUpdate {
    /**
     * Type of certificate submitted
     * Allowed: registration | delegation | withdrawal | deregistration
     */
    actionType?: string;
    /**
     * Hash identifier of the transaction
     */
    txHash?: string;
    /**
     * Epoch number of the block
     */
    epochNo?: number;
    /**
     * Slot number of the block in epoch
     */
    epochSlot?: number;
    /**
     * Absolute slot number of the block
     */
    absoluteSlot: number;
    /**
     * UNIX timestamp of the block
     */
    blockTime: number;
}