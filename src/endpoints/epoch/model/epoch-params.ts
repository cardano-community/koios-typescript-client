/**
 * Epoch Parameters
 * @export
 * @interface EpochParams
 */
export interface EpochParams {
    /**
     * Epoch number
     * @type {number}
     * @memberof EpochParamsInner
     */
    epochNo?: number;
    /**
     * The 'a' parameter to calculate the minimum transaction fee
     * @type {number}
     * @memberof EpochParamsInner
     */
    minFeeA?: number;
    /**
     * The 'b' parameter to calculate the minimum transaction fee
     * @type {number}
     * @memberof EpochParamsInner
     */
    minFeeB?: number;
    /**
     * The maximum block size (in bytes)
     * @type {number}
     * @memberof EpochParamsInner
     */
    maxBlockSize?: number;
    /**
     * The maximum transaction size (in bytes)
     * @type {number}
     * @memberof EpochParamsInner
     */
    maxTxSize?: number;
    /**
     * The maximum block header size (in bytes)
     * @type {number}
     * @memberof EpochParamsInner
     */
    maxBhSize?: number;
    /**
     * The amount (in lovelace) required for a deposit to register a stake address
     * @type {string}
     * @memberof EpochParamsInner
     */
    keyDeposit?: string;
    /**
     * The amount (in lovelace) required for a deposit to register a stake pool
     * @type {string}
     * @memberof EpochParamsInner
     */
    poolDeposit?: string;
    /**
     * The maximum number of epochs in the future that a pool retirement is allowed to be scheduled for
     * @type {number}
     * @memberof EpochParamsInner
     */
    maxEpoch?: number;
    /**
     * The optimal number of stake pools
     * @type {number}
     * @memberof EpochParamsInner
     */
    optimalPoolCount?: number;
    /**
     * The pledge influence on pool rewards
     * @type {number}
     * @memberof EpochParamsInner
     */
    influence?: number;
    /**
     * The monetary expansion rate
     * @type {number}
     * @memberof EpochParamsInner
     */
    monetaryExpandRate?: number;
    /**
     * The treasury growth rate
     * @type {number}
     * @memberof EpochParamsInner
     */
    treasuryGrowthRate?: number;
    /**
     * The decentralisation parameter (1 fully centralised, 0 fully decentralised)
     * @type {number}
     * @memberof EpochParamsInner
     */
    decentralisation?: number;
    /**
     * The hash of 32-byte string of extra random-ness added into the protocol's entropy pool
     * @type {string}
     * @memberof EpochParamsInner
     */
    extraEntropy?: string;
    /**
     * The protocol major version
     * @type {number}
     * @memberof EpochParamsInner
     */
    protocolMajor?: number;
    /**
     * The protocol minor version
     * @type {number}
     * @memberof EpochParamsInner
     */
    protocolMinor?: number;
    /**
     * The minimum value of a UTxO entry
     * @type {string}
     * @memberof EpochParamsInner
     */
    minUtxoValue?: string;
    /**
     * The minimum pool cost
     * @type {string}
     * @memberof EpochParamsInner
     */
    minPoolCost?: string;
    /**
     * The nonce value for this epoch
     * @type {string}
     * @memberof EpochParamsInner
     */
    nonce?: string;
    /**
     * The hash of the first block where these parameters are valid
     * @type {string}
     * @memberof EpochParamsInner
     */
    blockHash?: string;
    /**
     * The per language cost models
     * @type {string}
     * @memberof EpochParamsInner
     */
    costModels?: string;
    /**
     * The per word cost of script memory usage
     * @type {number}
     * @memberof EpochParamsInner
     */
    priceMem?: number;
    /**
     * The cost of script execution step usage
     * @type {number}
     * @memberof EpochParamsInner
     */
    priceStep?: number;
    /**
     * The maximum number of execution memory allowed to be used in a single transaction
     * @type {number}
     * @memberof EpochParamsInner
     */
    maxTxExMem?: number;
    /**
     * The maximum number of execution steps allowed to be used in a single transaction
     * @type {number}
     * @memberof EpochParamsInner
     */
    maxTxExSteps?: number;
    /**
     * The maximum number of execution memory allowed to be used in a single block
     * @type {number}
     * @memberof EpochParamsInner
     */
    maxBlockExMem?: number;
    /**
     * The maximum number of execution steps allowed to be used in a single block
     * @type {number}
     * @memberof EpochParamsInner
     */
    maxBlockExSteps?: number;
    /**
     * The maximum Val size
     * @type {number}
     * @memberof EpochParamsInner
     */
    maxValSize?: number;
    /**
     * The percentage of the tx fee which must be provided as collateral when including non-native scripts
     * @type {number}
     * @memberof EpochParamsInner
     */
    collateralPercent?: number;
    /**
     * The maximum number of collateral inputs allowed in a transaction
     * @type {number}
     * @memberof EpochParamsInner
     */
    maxCollateralInputs?: number;
    /**
     * The cost per UTxO size
     * @type {string}
     * @memberof EpochParamsInner
     */
    coinsPerUtxoSize?: string;
}