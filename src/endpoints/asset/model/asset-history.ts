/**
 * Asset History
 * @export
 * @interface AssetHistory
 */
export interface AssetHistory {
    /**
     * Asset Policy ID (hex)
     * @type {string}
     * @memberof AssetHistory
     */
    policyId?: string;
    /**
     * Asset Name (hex)
     * @type {string}
     * @memberof AssetHistory
     */
    assetName?: string;
    /**
     * Array of all mint/burn transactions for an asset
     * @type {Array<MintingTx>}
     * @memberof AssetHistory
     */
    mintingTxs?: Array<MintingTx>;
}

/**
 * Minting Transaction
 * @export
 * @interface MintingTx
 */
export interface MintingTx {
    /**
     * Transaction Hash
     * @type {string}
     * @memberof MintingTx
     */
    txHash?: string;
    /**
     * UNIX timestamp of the block
     * @type {number}
     * @memberof MintingTx
     */
    blockTime?: number;
    /**
     * Quantity minted/burned (negative numbers indicate burn transactions)
     * @type {string}
     * @memberof MintingTx
     */
    quantity?: string;
    /**
     * A JSON array containing details about metadata within transaction
     * @type {any}
     * @memberof MintingTx
     */
    metadata?: any;
}