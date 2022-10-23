/**
 * Asset Information
 * @export
 * @interface AssetInformation
 */
import {TokenRegistryMetadata} from "./token-registry-metadata";

export interface AssetInformation {
    /**
     * Asset Policy ID (hex)
     * @type {string}
     * @memberof AssetInformation
     */
    policyId?: string;
    /**
     * Asset Name (hex)
     * @type {string}
     * @memberof AssetInformation
     */
    assetName?: string;
    /**
     * Asset Name (ASCII)
     * @type {string}
     * @memberof AssetInformation
     */
    assetNameAscii?: string;
    /**
     * The CIP14 fingerprint of the asset
     * @type {string}
     * @memberof AssetInformation
     */
    fingerprint?: string;
    /**
     * Hash of the first mint transaction
     * @type {string}
     * @memberof AssetInformation
     */
    mintingTxHash?: string;
    /**
     * Count of total mint transactions
     * @type {number}
     * @memberof AssetInformation
     */
    mintCnt?: number;
    /**
     * Count of total burn transactions
     * @type {number}
     * @memberof AssetInformation
     */
    burnCnt?: number;
    /**
     * A JSON array containing details about metadata within transaction
     * @type {any}
     * @memberof AssetInformation
     */
    mintingTxMetadata?: any;
    /**
     * Asset metadata registered on the Cardano Token Registry
     * @type {TokenRegistryMetadata}
     * @memberof AssetInformation
     */
    tokenRegistryMetadata?: TokenRegistryMetadata;
    /**
     *
     * @type {string}
     * @memberof AssetInformation
     */
    totalSupply?: string;
    /**
     * UNIX timestamp of the first asset mint
     * @type {number}
     * @memberof AssetInformation
     */
    creationTime?: number;
}