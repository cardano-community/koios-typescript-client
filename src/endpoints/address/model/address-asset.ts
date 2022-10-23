/**
 * Address Asset
 * @export
 * @interface AddressAsset
 */
export interface AddressAsset {
    /**
     * A Cardano payment/base address (bech32 encoded) for transaction's input UTxO
     * @type {string}
     * @memberof AddressAsset
     */
    address?: string;
    /**
     * An array of assets on the UTxO
     * @type {Array<AssetInfo>}
     * @memberof AddressAsset
     */
    assets?: Array<AssetInfo>;
}

/**
 * Asset Information
 * @export
 * @interface AssetInfoInner
 */
export interface AssetInfo {
    /**
     * Asset Policy ID (hex)
     * @type {string}
     * @memberof AssetInfo
     */
    policyId?: string;
    /**
     * Asset Name (hex)
     * @type {string}
     * @memberof AssetInfo
     */
    assetName?: string;
    /**
     * Sum of assets for output UTxO
     * @type {string}
     * @memberof AssetInfo
     */
    quantity?: string;
    /**
     * The CIP14 fingerprint of the asset
     * @type {string}
     * @memberof AssetInfo
     */
    fingerprint?: string;
}

