import {InlineDatum} from "../../common/inline-datum";
import {ReferenceScript} from "../../common/reference-script";
import {TxAsset} from "./tx-asset";

/**
 * TX Input or Output
 * @export
 * @interface TxIO
 */
export interface TxIO {
    /**
     * A Cardano payment/base address for transaction's input/output UTxO
     * @type {TxPaymentAddress}
     * @memberof TxIO
     */
    paymentAddr?: TxPaymentAddress;
    /**
     * A Cardano staking address (reward account, bech32 encoded) for transaction's input/output UTxO
     * @type {string}
     * @memberof TxIO
     */
    stakeAddr?: string;
    /**
     * Hash of this transaction
     * @type {string}
     * @memberof TxIO
     */
    txHash?: string;
    /**
     * Index of output UTxO
     * @type {number}
     * @memberof TxIO
     */
    txIndex?: number;
    /**
     * Hash of datum (if any) connected to UTxO
     * @type {string}
     * @memberof TxIO
     */
    datumHash?: string;
    /**
     * Allows datums to be attached to UTxO (CIP-32)
     * @type {InlineDatum}
     * @memberof TxIO
     */
    inlineDatum?: InlineDatum;
    /**
     * Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33)
     * @type {ReferenceScript}
     * @memberof TxIO
     */
    referenceScript?: ReferenceScript;
    /**
     * An array of assets included in input/output UTxO
     * @type {Array<TxAsset>}
     * @memberof TxIO
     */
    assetList?: Array<TxAsset>;
}

/**
 * A Cardano payment/base address for transaction's input/output UTxO
 * @export
 * @interface TxPaymentAddress
 */
export interface TxPaymentAddress {
    /**
     * A Cardano payment/base address (bech32 encoded) for transaction's input/output UTxO
     * @type {string}
     * @memberof TxPaymentAddress
     */
    bech32?: string;
    /**
     * Payment credential
     * @type {string}
     * @memberof TxPaymentAddress
     */
    cred?: string;
}