/**
 * Transaction Status
 * @export
 * @interface TxStatus
 */
export interface TxStatus {
    /**
     * Hash of the transaction for which details are being shown
     * @type {string}
     * @memberof TxStatus
     */
    txHash?: string;
    /**
     * Number of block confirmations
     * @type {number}
     * @memberof TxStatus
     */
    numConfirmations?: number;
}