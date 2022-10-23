/**
 * Address Information
 * @export
 * @interface AddressInfo
 */
import {InlineDatum} from "../../common/inline-datum";
import {ReferenceScript} from "../../common/reference-script";

export interface AddressInfo {
    /**
     * A Cardano payment/base address (bech32 encoded) for transaction's input UTxO
     * @type {string}
     * @memberof AddressInfo
     */
    address?: string;
    /**
     * Sum of all UTxO values belonging to address
     * @type {string}
     * @memberof AddressInfo
     */
    balance?: string;
    /**
     * Cardano staking address in bech32 format
     * @type {string}
     * @memberof AddressInfo
     */
    stakeAddress?: string;
    /**
     * Signifies whether the address is a script address
     * @type {boolean}
     * @memberof AddressInfo
     */
    scriptAddress?: boolean;
    /**
     * Array of UTxOs of Address for which details are being shown
     * @type {Array<AddressUtxo>}
     * @memberof AddressInfo
     */
    utxoSet?: Array<AddressUtxo>;
}

/**
 * Address UTxO
 * @export
 * @interface AddressUtxo
 */
export interface AddressUtxo {
    /**
     * Hash of the UTxO
     * @type {string}
     * @memberof AddressUtxo
     */
    txHash?: string;
    /**
     * Index of UTxO
     * @type {number}
     * @memberof AddressInfo
     */
    txIndex?: number;
    /**
     * Block height
     * @type {number}
     * @memberof AddressInfo
     */
    blockHeight?: number;
    /**
     * Timestamp of the block
     * @type {number}
     * @memberof AddressInfo
     */
    blockTime?: number;
    /**
     * Total sum on the output address
     * @type {string}
     * @memberof AddressInfo
     */
    value?: string;
    /**
     * The Hash of the Plutus Data
     * @type {string}
     * @memberof AddressInfo
     */
    datumHash?: string;
    /**
     * Allows datums to be attached to UTxO (CIP-32)
     * @type {InlineDatum}
     * @memberof AddressInfo
     */
    inlineDatum?: InlineDatum;
    /**
     * Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33)
     * @type {ReferenceScript}
     * @memberof AddressInfo
     */
    referenceScript?: ReferenceScript;

    /**
     * An array of assets which are included in the UTxO
     * @type {Array<Asset>}
     * @memberof AddressInfo
     */
    assetList?: Array<Asset>
}

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
     * Asset Name (hex)
     * @type {string}
     * @memberof Asset
     */
    assetName?: string;
    /**
     * Sum of assets for output UTxO
     * @type {string}
     * @memberof Asset
     */
    quantity?: string;
}