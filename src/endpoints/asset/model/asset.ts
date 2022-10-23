/**
 * Asset
 * @export
 * @interface Asset
 */
export interface Asset {
    /**
     * Asset Policy ID (hex)
     * @type {string}
     * @memberof Asset
     */
    policyId?: string;
    /**
     * AssetNames Object
     * @type {AssetNames}
     * @memberof Asset
     */
    assetNames?: AssetNames;
}

/**
 * Asset Names
 * @export
 * @interface AssetNames
 */
export interface AssetNames {
    /**
     * Asset Names (hex)
     * @type {Array<string>}
     * @memberof AssetNames
     */
    hex?: Array<string>;
    /**
     * Asset Names (ASCII)
     * @type {Array<string>}
     * @memberof AssetNames
     */
    ascii?: Array<string>;
}