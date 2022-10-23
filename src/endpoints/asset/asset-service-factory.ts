import {Configuration} from "../../config/configuration";
import {FetchAPI} from "../base/base-service";
import {AssetServiceFp} from "./asset-service-fp";

/**
 * AssetApi - factory interface
 * @export
 */
export const AssetServiceFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Get the list of all addresses holding a given asset
         * @summary Asset Address List
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {string} [assetName] Asset Name in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetAddressListGet(assetPolicy: string, assetName?: string, options?: any) {
            return AssetServiceFp(configuration).assetAddressListGet(assetPolicy, assetName, options)(fetch, basePath);
        },
        /**
         * Get the mint/burn history of an asset
         * @summary Asset History
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {string} [assetName] Asset Name in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetHistoryGet(assetPolicy: string, assetName?: string, options?: any) {
            return AssetServiceFp(configuration).assetHistoryGet(assetPolicy, assetName, options)(fetch, basePath);
        },
        /**
         * Get the information of an asset including first minting & token registry metadata
         * @summary Asset Information
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {string} [assetName] Asset Name in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetInfoGet(assetPolicy: string, assetName?: string, options?: any) {
            return AssetServiceFp(configuration).assetInfoGet(assetPolicy, assetName, options)(fetch, basePath);
        },
        /**
         * Get the list of all native assets (paginated)
         * @summary Asset List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetListGet(options?: any) {
            return AssetServiceFp(configuration).assetListGet(options)(fetch, basePath);
        },
        /**
         * Get the information for all assets under the same policy
         * @summary Asset Policy Information
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetPolicyInfoGet(assetPolicy: string, options?: any) {
            return AssetServiceFp(configuration).assetPolicyInfoGet(assetPolicy, options)(fetch, basePath);
        },
        /**
         * Get the summary of an asset (total transactions exclude minting/total wallets include only wallets with asset balance)
         * @summary Asset Summary
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {string} [assetName] Asset Name in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetSummaryGet(assetPolicy: string, assetName?: string, options?: any) {
            return AssetServiceFp(configuration).assetSummaryGet(assetPolicy, assetName, options)(fetch, basePath);
        },
        /**
         * Get the list of all asset transaction hashes (newest first)
         * @summary Asset Transaction History
         * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
         * @param {string} [assetName] Asset Name in hexadecimal format (hex)
         * @param {number} [afterBlockHeight] Block height for specifying time delta
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetTxsGet(assetPolicy: string, assetName?: string, afterBlockHeight?: number, options?: any) {
            return AssetServiceFp(configuration).assetTxsGet(assetPolicy, assetName, afterBlockHeight, options)(fetch, basePath);
        },
    };
};