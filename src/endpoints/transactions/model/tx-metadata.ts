/**
 * Transaction Metadata
 * @export
 * @interface TxMetadata
 */
export interface TxMetadata {
    /**
     * Hash of the transaction for which details are being shown
     * @type {string}
     * @memberof TxMetadata
     */
    txHash?: string;
    /**
     * A JSON array containing details about metadata within transaction
     * @type {any}
     * @memberof TxMetadata
     */
    metadata?: any;
}