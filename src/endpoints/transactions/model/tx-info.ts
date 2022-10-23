/**
 * Transaction Information
 * @export
 * @interface TxInfo
 */
import {Datum} from "./datum";
import {InlineDatum} from "../../common/inline-datum";
import {ReferenceScript} from "../../common/reference-script";
import {TxIO} from "./tx-io";
import {TxAsset} from "./tx-asset";

export interface TxInfo {
    /**
     * Hash identifier of the transaction
     * @type {string}
     * @memberof TxInfo
     */
    txHash?: string;
    /**
     * Hash of the Block
     * @type {string}
     * @memberof TxInfo
     */
    blockHash?: string;
    /**
     * Block height
     * @type {number}
     * @memberof TxInfo
     */
    blockHeight?: number;
    /**
     * Epoch number of the block
     * @type {number}
     * @memberof TxInfo
     */
    epochNo?: number;
    /**
     * Slot number of the block in epoch
     * @type {number}
     * @memberof TxInfo
     */
    epochSlot?: number;
    /**
     * Absolute slot number of the block
     * @type {number}
     * @memberof TxInfo
     */
    absoluteSlot?: number;
    /**
     * UNIX timestamp of the transaction
     * @type {number}
     * @memberof TxInfo
     */
    txTimestamp?: number;
    /**
     * Index of transaction within block
     * @type {number}
     * @memberof TxInfo
     */
    txBlockIndex?: number;
    /**
     * Size in bytes of transaction
     * @type {number}
     * @memberof TxInfo
     */
    txSize?: number;
    /**
     * Total sum of all transaction outputs (in lovelaces)
     * @type {string}
     * @memberof TxInfo
     */
    totalOutput?: string;
    /**
     * Total Transaction fee (in lovelaces)
     * @type {string}
     * @memberof TxInfo
     */
    fee?: string;
    /**
     * Total Deposits included in transaction (for example, if it is registering a pool/key)
     * @type {string}
     * @memberof TxInfo
     */
    deposit?: string;
    /**
     * Slot before which transaction cannot be validated (if supplied, else null)
     * @type {number}
     * @memberof TxInfo
     */
    invalidBefore?: number;
    /**
     * Slot after which transaction cannot be validated
     * @type {number}
     * @memberof TxInfo
     */
    invalidAfter?: number;
    /**
     * An array of UTxO outputs created by the transaction
     * @type {Array<TxIO>}
     * @memberof TxInfo
     */
    collateralInputs?: Array<TxIO>;
    /**
     * Collateral output
     * @type {TxIO}
     * @memberof TxInfo
     */
    collateralOutput?: TxIO;
    /**
     * Reference Inputs
     * @type {Array<TxIO>}
     * @memberof TxInfo
     */
    referenceInputs?: Array<TxIO>;
    /**
     * An array with details about inputs used in a transaction
     * @type {Array<TxIO>}
     * @memberof TxInfo
     */
    inputs?: Array<TxIO>;
    /**
     * An array of UTxO outputs created by the transaction
     * @type {Array<TxIO>}
     * @memberof TxInfo
     */
    outputs?: Array<TxIO>;
    /**
     * Array of withdrawals with-in a transaction
     * @type {Array<TxWithdrawal>}
     * @memberof TxInfo
     */
    withdrawals?: Array<TxWithdrawal>;
    /**
     * Array of minted assets with-in a transaction
     * @type {Array<TxAsset>}
     * @memberof TxInfo
     */
    assetsMinted?: Array<TxAsset>;
    /**
     * Metadata present with-in a transaction (if any)
     * @type {any}
     * @memberof TxInfo
     */
    metadata?: any;
    /**
     * Certificates present with-in a transaction (if any)
     * @type {Array<TxCertificate>}
     * @memberof TxInfo
     */
    certificates?: Array<TxCertificate>;
    /**
     * Native scripts present in a transaction (if any)
     * @type {Array<TxNativeScript>}
     * @memberof TxInfo
     */
    nativeScripts?: Array<TxNativeScript>;
    /**
     * Plutus contracts present in transaction (if any)
     * @type {Array<TxPlutusContract>}
     * @memberof TxInfo
     */
    plutusContracts?: Array<TxPlutusContract>;
}

/**
 * withdrawals within a transaction
 * @export
 * @interface TxWithdrawal
 */
export interface TxWithdrawal {
    /**
     * Withdrawal amount (in lovelaces)
     * @type {string}
     * @memberof TxWithdrawal
     */
    amount?: string;
    /**
     * List of withdrawals with-in a transaction (if any)
     * @type {string}
     * @memberof TxWithdrawal
     */
    stakeAddr?: string;
}

/**
 * Certificates present within a transaction
 * @export
 * @interface TxCertificate
 */
export interface TxCertificate {
    /**
     * Certificate index
     * @type {number}
     * @memberof TxCertificate
     */
    index?: number;
    /**
     * Type of certificate (could be delegation, stake_registration, stake_deregistraion, pool_update, pool_retire, param_proposal, reserve_MIR, treasury_MIR)
     * @type {string}
     * @memberof TxCertificate
     */
    type?: string;
    /**
     * A JSON array containing information from the certificate
     * @type {TxCertificateInfo}
     * @memberof TxCertificate
     */
    info?: TxCertificateInfo;
}

/**
 * Certificate Info
 * @export
 * @interface TxCertificateInfo
 */
export interface TxCertificateInfo {
    /**
     * Cardano staking address in bech32 format
     * @type {string}
     * @memberof TxCertificateInfo
     */
    stakeAddress?: string;
    /**
     * Cardano pool ID in bech32 format
     * @type {string}
     * @memberof TxCertificateInfo
     */
    poolIdBech32?: string;
    /**
     * Pool ID (Hex format)
     * @type {string}
     * @memberof TxCertificateInfo
     */
    poolIdHex?: string;
}

/**
 * Native Script
 * @export
 * @interface TxNativeScript
 */
export interface TxNativeScript {
    /**
     * Hash of a script
     * @type {string}
     * @memberof TxNativeScript
     */
    scriptHash?: string;
    /**
     * JSON representation of the timelock script (null for other script types)
     * @type {any}
     * @memberof TxNativeScript
     */
    scriptJson?: any;
}

/**
 * Plutus Contract
 * @export
 * @interface TxPlutusContract
 */
export interface TxPlutusContract {
    /**
     * Plutus script address
     * @type {string}
     * @memberof TxPlutusContract
     */
    address?: string;
    /**
     * Hash of a script
     * @type {string}
     * @memberof TxPlutusContract
     */
    scriptHash?: string;
    /**
     * CBOR-encoded Plutus script data
     * @type {string}
     * @memberof TxPlutusContract
     */
    bytecode?: string;
    /**
     * The size of the CBOR serialised script (in bytes)
     * @type {number}
     * @memberof TxPlutusContract
     */
    size?: number;
    /**
     * True if the contract is valid or there is no contract
     * @type {boolean}
     * @memberof TxPlutusContract
     */
    validContract?: boolean;
    /**
     * Plutus Script Input
     * @type {PlutusScriptInput}
     * @memberof TxPlutusContract
     */
    input?: PlutusScriptInput;
    /**
     * Plutus Script Input
     * @type {PlutusScriptOutput}
     * @memberof TxPlutusContract
     */
    output?: PlutusScriptOutput;
}

/**
 * Plutus Script Input
 * @export
 * @interface PlutusScriptInput
 */
export interface PlutusScriptInput {
    /**
     * Plutus Script Redeemer
     * @type {PlutusScriptRedeemer}
     * @memberof PlutusScriptInput
     */
    redeemer?: PlutusScriptRedeemer;
    /**
     * Datum
     * @type {Datum}
     * @memberof PlutusScriptInput
     */
    datum?: Datum;
}

/**
 * Plutus Script Redeemer
 * @export
 * @interface PlutusScriptRedeemer
 */
export interface PlutusScriptRedeemer {
    /**
     * What kind of validation this redeemer is used for
     * @type {Purpose}
     * @memberof PlutusScriptRedeemer
     */
    purpose?: Purpose;
    /**
     * The budget in fees to run a script - the fees depend on the ExUnits and the current prices
     * @type {string}
     * @memberof PlutusScriptRedeemer
     */
    fee?: string;
    /**
     * Unit
     * @type {Unit}
     * @memberof PlutusScriptRedeemer
     */
    unit?: Unit;
    /**
     * Datum
     * @type {Datum}
     * @memberof PlutusScriptRedeemer
     */
    datum?: Datum;
}

/**
 * Unit
 * @export
 * @interface Unit
 */
export interface Unit {
    /**
     * The budget in Cpu steps to run a script
     * @type {number}
     * @memberof Unit
     */
    steps?: number;
    /**
     * The budget in Memory to run a script
     * @type {number}
     * @memberof Unit
     */
    mem?: number;
}

/**
 * Kind of validation of redeemer
 * @export
 * @enum {string}
 */
export enum Purpose {
    spend = <any> 'spend',
    mint = <any> 'mint',
    cert = <any> 'cert',
    reward = <any> 'reward'
}

/**
 * Plutus Script Output
 * @export
 * @interface PlutusScriptOutput
 */
export interface PlutusScriptOutput {
    /**
     * The Hash of the Plutus Data
     * @type {string}
     * @memberof PlutusScriptOutput
     */
    hash?: string;
    /**
     * The actual data in json format
     * @type {string}
     * @memberof PlutusScriptOutput
     */
    value?: any;
}