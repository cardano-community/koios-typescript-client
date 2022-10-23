/**
 * Block
 * @export
 * @interface Block
 */
export interface Block {
    /**
     * Hash of the block
     * @type {string}
     * @memberof Block
     */
    hash?: string;
    /**
     * Epoch number of the block
     * @type {number}
     * @memberof Block
     */
    epochNo?: number;
    /**
     * Absolute slot number of the block
     * @type {number}
     * @memberof Block
     */
    absSlot?: number;
    /**
     * Slot number of the block in epoch
     * @type {number}
     * @memberof Block
     */
    epochSlot?: number;
    /**
     * Block height
     * @type {number}
     * @memberof Block
     */
    blockHeight?: number;
    /**
     * Block size in bytes
     * @type {number}
     * @memberof Block
     */
    blockSize?: number;
    /**
     * UNIX timestamp of the block
     * @type {number}
     * @memberof Block
     */
    blockTime?: number;
    /**
     * Number of transactions in the block
     * @type {number}
     * @memberof Block
     */
    txCount?: number;
    /**
     * VRF key of the block producer
     * @type {string}
     * @memberof Block
     */
    vrfKey?: string;
    /**
     * Pool ID in bech32 format (null for pre-Shelley blocks)
     * @type {string}
     * @memberof Block
     */
    pool?: string;
    /**
     * Counter value of the operational certificate used to create this block
     * @type {number}
     * @memberof Block
     */
    opCertCounter?: number;
    /**
     * The protocol major version
     * @type {number}
     * @memberof Block
     */
    protoMajor?: number;
    /**
     * The protocol minor version
     * @type {number}
     * @memberof Block
     */
    protoMinor?: number;
}