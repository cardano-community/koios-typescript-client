/**
 * Asset Summary
 * @export
 * @interface AssetSummary
 */
export interface AssetSummary {
    /**
     * Asset Policy ID (hex)
     * @type {string}
     * @memberof AssetSummary
     */
    policyId?: string;
    /**
     * Asset Name (hex)
     * @type {string}
     * @memberof AssetSummary
     */
    assetName?: string;
    /**
     * Total number of transactions including the given asset
     * @type {number}
     * @memberof AssetSummary
     */
    totalTransactions?: number;
    /**
     * Total number of registered wallets holding the given asset
     * @type {number}
     * @memberof AssetSummary
     */
    stakedWallets?: number;
    /**
     * Total number of payment addresses (not belonging to registered wallets) holding the given asset
     * @type {number}
     * @memberof AssetSummary
     */
    unstakedAddresses?: number;
}