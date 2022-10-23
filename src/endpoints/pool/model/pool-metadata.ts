/**
 * Pool Metadata
 * @export
 * @interface PoolMetadata
 */
export interface PoolMetadata {
    /**
     * Pool ID (bech32 format)
     * @type {string}
     * @memberof PoolMetadata
     */
    poolIdBech32?: string;
    /**
     * Pool metadata URL
     * @type {string}
     * @memberof PoolMetadata
     */
    metaUrl?: string;
    /**
     * Pool metadata hash
     * @type {string}
     * @memberof PoolMetadata
     */
    metaHash?: string;
    /**
     * Pool Metadata
     * @type {any}
     * @memberof PoolMetadata
     */
    metaJson?: any;
}