/**
 * Asset Address
 * @export
 * @interface AssetAddress
 */
export interface AssetAddress {
    /**
     * A Cardano payment/base address (bech32 encoded) for transaction's input UTxO
     * @type {string}
     * @memberof AssetAddress
     */
    paymentAddress?: string;
    /**
     * Asset balance on the payment address
     * @type {string}
     * @memberof AssetAddress
     */
    quantity?: string;
}