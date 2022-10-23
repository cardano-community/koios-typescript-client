/**
 * Transaction UTxOs
 * @export
 * @interface TxUtxos
 */
import {TxIO} from "./tx-io";

export interface TxUtxos {
    /**
     * Hash of Transaction for which details are being shown
     * @type {string}
     * @memberof TxUtxos
     */
    txHash?: string;
    /**
     * An array with details about inputs used in a transaction
     * @type {Array<TxIO>}
     * @memberof TxUtxos
     */
    inputs?: Array<TxIO>;
    /**
     * An array with details about outputs from the transaction
     * @type {Array<TxIO>}
     * @memberof TxUtxos
     */
    outputs?: Array<TxIO>;
}