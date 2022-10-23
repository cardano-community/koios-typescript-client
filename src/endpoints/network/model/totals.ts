/**
 * Totals
 * @export
 * @interface Totals
 */
export interface Totals {
    /**
     * Epoch number
     * @type {number}
     * @memberof Totals
     */
    epochNo?: number;
    /**
     * Circulating UTxOs for given epoch (in lovelaces)
     * @type {string}
     * @memberof Totals
     */
    circulation?: string;
    /**
     * Funds in treasury for given epoch (in lovelaces)
     * @type {string}
     * @memberof Totals
     */
    treasury?: string;
    /**
     * Rewards accumulated as of given epoch (in lovelaces)
     * @type {string}
     * @memberof Totals
     */
    reward?: string;
    /**
     * Total Active Supply (sum of treasury funds, rewards, UTxOs, deposits and fees) for given epoch (in lovelaces)
     * @type {string}
     * @memberof Totals
     */
    supply?: string;
    /**
     * Total Reserves yet to be unlocked on chain
     * @type {string}
     * @memberof Totals
     */
    reserves?: string;
}