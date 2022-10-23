/**
 * Account Address
 * @export
 * @interface AccountAddress
 */
export interface AccountAddress {
    /**
     * Cardano staking address (reward account) in bech32 format
     * @type {string}
     * @memberof AccountAddress
     */
    stakeAddress?: string;
    /**
     * Array of A Cardano payment/base address (bech32 encoded) for transaction's input UTxO
     * @type {Array<string>}
     * @memberof AccountAddress
     */
    addresses?: Array<string>;
}