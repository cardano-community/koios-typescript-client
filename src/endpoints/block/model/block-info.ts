/**
 * Block Information
 * @export
 * @interface BlockInfo
 */
export interface BlockInfo {
    /**
     * Hash of the block
     * @type {string}
     * @memberof BlockInfo
     */
    hash?: string;
    /**
     * Epoch number of the block
     * @type {number}
     * @memberof BlockInfo
     */
    epochNo?: number;
    /**
     * Absolute slot number of the block
     * @type {number}
     * @memberof BlockInfo
     */
    absSlot?: number;
    /**
     * Slot number of the block in epoch
     * @type {number}
     * @memberof BlockInfo
     */
    epochSlot?: number;
    /**
     * Block Height
     * @type {number}
     * @memberof BlockInfo
     */
    blockHeight?: number;
    /**
     * Block size in bytes
     * @type {number}
     * @memberof BlockInfo
     */
    blockSize?: number;
    /**
     * UNIX timestamp of the block
     * @type {number}
     * @memberof BlockInfo
     */
    blockTime?: number;
    /**
     * Number of transactions in the block
     * @type {number}
     * @memberof BlockInfo
     */
    txCount?: number;
    /**
     * VRF key of the block producer
     * @type {string}
     * @memberof BlockInfo
     */
    vrfKey?: string;
    /**
     * Hash of the block producers' operational certificate
     * @type {string}
     * @memberof BlockInfo
     */
    opCert?: string;
    /**
     * Pool ID in bech32 format
     * @type {number}
     * @memberof BlockInfo
     */
    opCertCounter?: number;
    /**
     *
     * @type {string}
     * @memberof BlockInfo
     */
    pool?: string;
    /**
     * The protocol major version
     * @type {number}
     * @memberof BlockInfo
     */
    protoMajor?: number;
    /**
     * The protocol minor version
     * @type {number}
     * @memberof BlockInfo
     */
    protoMinor?: number;
    /**
     * Total output of the block (in lovelace)
     * @type {string}
     * @memberof BlockInfo
     */
    totalOutput?: string;
    /**
     * Total fees of the block (in lovelace)
     * @type {string}
     * @memberof BlockInfo
     */
    totalFees?: string;
    /**
     * Number of confirmations for the block
     * @type {number}
     * @memberof BlockInfo
     */
    numConfirmations?: number;
    /**
     * Hash of the parent of this block
     * @type {string}
     * @memberof BlockInfo
     */
    parentHash?: string;
    /**
     * Hash of the child of this block (if present)
     * @type {string}
     * @memberof BlockInfo
     */
    childHash?: string;
}