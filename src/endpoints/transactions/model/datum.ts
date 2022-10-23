/**
 * Datum
 * @export
 * @interface Datum
 */
export interface Datum {
    /**
     * The Hash of the Plutus Data
     * @type {string}
     * @memberof Datum
     */
    hash?: string;
    /**
     * The actual data in json format
     * @type {any}
     * @memberof Datum
     */
    value?: any;
}