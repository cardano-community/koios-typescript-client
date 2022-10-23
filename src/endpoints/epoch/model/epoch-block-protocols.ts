/**
 * Epoch's Block Protocols
 * @export
 * @interface EpochBlockProtocols
 */
export interface EpochBlockProtocols {
    /**
     * Protocol major version
     * @type {number}
     * @memberof EpochBlockProtocols
     */
    protoMajor?: number;
    /**
     * Protocol major version
     * @type {number}
     * @memberof EpochBlockProtocols
     */
    protoMinor?: number;
    /**
     * Amount of blocks with specified major and protocol combination
     * @type {number}
     * @memberof EpochBlockProtocols
     */
    blocks?: number;
}