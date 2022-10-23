/**
 * Token Registry Metadata
 * @export
 * @interface TokenRegistryMetadata
 */
export interface TokenRegistryMetadata {
    /**
     * Name
     * @type {string}
     * @memberof TokenRegistryMetadata
     */
    name?: string;
    /**
     * Description
     * @type {string}
     * @memberof TokenRegistryMetadata
     */
    description?: string;
    /**
     * Ticker
     * @type {string}
     * @memberof TokenRegistryMetadata
     */
    ticker?: string;
    /**
     * URL
     * @type {string}
     * @memberof TokenRegistryMetadata
     */
    url?: string;
    /**
     * Logo
     * @type {string}
     * @memberof TokenRegistryMetadata
     */
    logo?: string;
    /**
     * Decimals
     * @type {number}
     * @memberof TokenRegistryMetadata
     */
    decimals?: number;
}