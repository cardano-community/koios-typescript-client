/**
 * Policy Asset
 * @export
 * @interface PolicyAsset
 */
import {TokenRegistryMetadata} from "./token-registry-metadata";

export interface PolicyAsset {
    /**
     * Asset Name (hex)
     * @type {string}
     * @memberof PolicyAsset
     */
    assetName?: string;
    /**
     * Asset Name (ASCII)
     * @type {string}
     * @memberof PolicyAsset
     */
    assetNameAscii?: string;
    /**
     * The CIP14 fingerprint of the asset
     * @type {string}
     * @memberof PolicyAsset
     */
    fingerprint?: string;
    /**
     * A JSON array containing details about metadata within transaction
     * @type {any}
     * @memberof PolicyAsset
     */
    mintingTxMetadata?: any;
    /**
     * Asset metadata registered on the Cardano Token Registry
     * @type {TokenRegistryMetadata}
     * @memberof PolicyAsset
     */
    tokenRegistryMetadata?: TokenRegistryMetadata;
    /**
     * Total Supply
     * @type {string}
     * @memberof PolicyAsset
     */
    totalSupply?: string;
    /**
     * Creation Time
     * @type {string}
     * @memberof PolicyAsset
     */
    creationTime?: string;
}