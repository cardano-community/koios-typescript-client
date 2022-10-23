/**
 * Account Assets
 * @export
 * @interface AccountAssets
 */
export interface AccountAssets {
    /**
     * Cardano staking address (reward account) in bech32 format
     * @type {string}
     * @memberof AccountAssets
     */
    stakeAddress?: string;
    /**
     * Array of Assets
     * @type {Array<any>}
     * @memberof AccountAssets
     */
    assets?: Array<AccountAsset>;
}

/**
 * Account Asset
 */
export interface AccountAsset {
    /**
     *  Asset Policy ID (hex)
     */
    policyId: string;

    /**
     * Array of Assets
     */
    assets: Array<AssetInner>;
}

/**
 * Asset Inner
 */
export interface AssetInner {
    /**
     * Asset Name (ASCII)
     */
    assetName: string;
    /**
     * Asset Policy ID (hex)
     */
    assetPolicy: string;
    /**
     * Asset quantity owned by account
     */
    balance: string;
}