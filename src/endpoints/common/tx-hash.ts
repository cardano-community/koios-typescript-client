/**
 * Transaction Hash
 * @export
 * @interface TxHash
 */
export interface TxHash {
    /**
     * Transaction Hash
     * @type {string}
     * @memberof TxHash
     */
    txHash?: string;
    /**
     * Epoch number of the block
     * @type {number}
     * @memberof TxHash
     */
    epochNo?: number;
    /**
     * Block Height
     * @type {number}
     * @memberof TxHash
     */
    blockHeight?: number;
    /**
     * UNIX timestamp of the block
     * @type {number}
     * @memberof TxHash
     */
    blockTime?: number;
}