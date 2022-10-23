/**
 * Native Script
 * @export
 * @interface NativeScript
 */
export interface NativeScript {
    /**
     * Hash of a script
     * @type {string}
     * @memberof NativeScript
     */
    scriptHash?: string;
    /**
     * Hash of the script creation transaction
     * @type {string}
     * @memberof NativeScript
     */
    creationTxHash?: string;
    /**
     * Type of the script
     * @type {string}
     * @memberof NativeScript
     */
    type?: TypeEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum TypeEnum {
    Timelock = <any> 'timelock',
    Multisig = <any> 'multisig'
}