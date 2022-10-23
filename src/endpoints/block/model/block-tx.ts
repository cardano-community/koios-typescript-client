/**
 * Block Tx
 * @export
 * @interface BlockTx
 */
export interface BlockTx {
    /**
     * Hash of the block
     * @type {string}
     * @memberof BlockTx
     */
    blockHash?: string;
    /**
     * Array of Hash identifiers of the transaction
     * @type {Array<string>}
     * @memberof BlockTx
     */
    txHashes?: Array<string>;
}