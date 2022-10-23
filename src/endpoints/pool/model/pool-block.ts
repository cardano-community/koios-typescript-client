/**
 * Pool Block
 * @export
 * @interface PoolBlock
 */
export interface PoolBlock {
    /**
     * Epoch number
     * @type {number}
     * @memberof PoolBlock
     */
    epochNo?: number;
    /**
     * Slot number of the block in epoch
     * @type {number}
     * @memberof PoolBlock
     */
    epochSlot?: number;
    /**
     * Absolute slot number of the block
     * @type {number}
     * @memberof PoolBlock
     */
    absSlot?: number;
    /**
     * Block height
     * @type {number}
     * @memberof PoolBlock
     */
    blockHeight?: number;
    /**
     * Hash of the block
     * @type {string}
     * @memberof PoolBlock
     */
    blockHash?: string;
    /**
     * Timestamp of the block
     * @type {number}
     * @memberof PoolBlock
     */
    blockTime?: number;
}