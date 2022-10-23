/**
 * Plutus Script
 * @export
 * @interface PlutusScript
 */
export interface PlutusScript {
    /**
     * Hash of a script
     * @type {string}
     * @memberof PlutusScript
     */
    scriptHash?: string;
    /**
     * Hash of the script creation transaction
     * @type {string}
     * @memberof PlutusScript
     */
    creationTxHash?: string;
}