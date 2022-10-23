/**
 * Tip
 * @export
 * @interface Tip
 */
export interface Tip {
    /**
     * Block Hash in hex
     * @type {string}
     * @memberof Tip
     */
    hash?: string;
    /**
     * Epoch number
     * @type {number}
     * @memberof Tip
     */
    epochNo?: number;
    /**
     * Absolute Slot number (slots not divided into epochs)
     * @type {number}
     * @memberof Tip
     */
    absSlot?: number;
    /**
     * Slot number within Epoch
     * @type {number}
     * @memberof Tip
     */
    epochSlot?: number;
    /**
     * Block Height number on chain
     * @type {number}
     * @memberof Tip
     */
    blockNo?: number;
    /**
     * UNIX timestamp of the block
     * @type {number}
     * @memberof Tip
     */
    blockTime?: number;
}