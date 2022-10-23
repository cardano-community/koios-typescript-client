/**
 * Pool
 * @export
 * @interface Pool
 */
export interface Pool {
    /**
     * Bech32 representation of pool ID
     * @type {string}
     * @memberof Pool
     */
    poolIdBech32?: string;
    /**
     * Pool ticker
     * @type {string}
     * @memberof Pool
     */
    ticker?: string;
}