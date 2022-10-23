/**
 * Asset included in input/output UTxO
 * @export
 * @interface TxAsset
 */
export interface TxAsset {
    /**
     * Asset Policy ID (hex)
     * @type {string}
     * @memberof TxAsset
     */
    policyId?: string;
    /**
     * Asset Name (hex)
     * @type {string}
     * @memberof TxAsset
     */
    assetName?: string;
    /**
     * The CIP14 fingerprint of the asset
     * @type {string}
     * @memberof TxAsset
     */
    fingerprint?: string;
    /**
     * Sum of assets for input/output UTxO
     * @type {string}
     * @memberof TxAsset
     */
    quantity?: string;
}