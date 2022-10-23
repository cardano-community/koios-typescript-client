/**
 * Script Redeemer
 * @export
 * @interface ScriptRedeemer
 */
export interface ScriptRedeemer {
    /**
     * Hash of Transaction for which details are being shown
     * @type {string}
     * @memberof ScriptRedeemer
     */
    scriptHash?: string;
    /**
     * Array of Redeemers
     * @type {Array<Redeemer>}
     * @memberof ScriptRedeemer
     */
    redeemers?: Array<Redeemer>;
}

/**
 * Redeemer
 * @export
 * @interface Redeemer
 */
export interface Redeemer {
    /**
     * Hash of Transaction containing the redeemer
     * @type {string}
     * @memberof Redeemer
     */
    txHash?: string;
    /**
     * The index of the redeemer pointer in the transaction
     * @type {number}
     * @memberof Redeemer
     */
    txIndex?: number;
    /**
     * The budget in Memory to run a script
     * @type {number}
     * @memberof Redeemer
     */
    unitMem?: number;
    /**
     * The budget in Cpu steps to run a script
     * @type {number}
     * @memberof Redeemer
     */
    unitSteps?: number;
    /**
     * The budget in fees to run a script - the fees depend on the ExUnits and the current prices
     * @type {string}
     * @memberof Redeemer
     */
    fee?: string;
    /**
     * What kind pf validation this redeemer is used for, it can be one of 'spend', 'mint', 'cert', 'reward'
     * @type {string}
     * @memberof Redeemer
     */
    purpose?: string;
    /**
     * The Hash of the Plutus Data
     * @type {string}
     * @memberof Redeemer
     */
    datumHash?: string;
    /**
     * The actual data in json format
     * @type {any}
     * @memberof Redeemer
     */
    datumValue?: any;
}