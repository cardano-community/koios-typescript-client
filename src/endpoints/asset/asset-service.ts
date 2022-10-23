/**
 * AssetApi - object-oriented interface
 * @export
 * @class AssetApi
 * @extends {BaseService}
 */
import {BaseService} from "../base/base-service";
import {AssetServiceFp} from "./asset-service-fp";

export class AssetService extends BaseService {
    /**
     * Get the list of all addresses holding a given asset
     * @summary Asset Address List
     * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
     * @param {string} [assetName] Asset Name in hexadecimal format (hex)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetApi
     */
    public assetAddressListGet(assetPolicy: string, assetName?: string, options?: any) {
        return AssetServiceFp(this.configuration).assetAddressListGet(assetPolicy, assetName, options)(this.fetch, this.basePath);
    }

    /**
     * Get the mint/burn history of an asset
     * @summary Asset History
     * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
     * @param {string} [assetName] Asset Name in hexadecimal format (hex)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetApi
     */
    public assetHistoryGet(assetPolicy: string, assetName?: string, options?: any) {
        return AssetServiceFp(this.configuration).assetHistoryGet(assetPolicy, assetName, options)(this.fetch, this.basePath);
    }

    /**
     * Get the information of an asset including first minting & token registry metadata
     * @summary Asset Information
     * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
     * @param {string} [assetName] Asset Name in hexadecimal format (hex)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetApi
     */
    public assetInfoGet(assetPolicy: string, assetName?: string, options?: any) {
        return AssetServiceFp(this.configuration).assetInfoGet(assetPolicy, assetName, options)(this.fetch, this.basePath);
    }

    /**
     * Get the list of all native assets (paginated)
     * @summary Asset List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetApi
     */
    public assetListGet(options?: any) {
        return AssetServiceFp(this.configuration).assetListGet(options)(this.fetch, this.basePath);
    }

    /**
     * Get the information for all assets under the same policy
     * @summary Asset Policy Information
     * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetApi
     */
    public assetPolicyInfoGet(assetPolicy: string, options?: any) {
        return AssetServiceFp(this.configuration).assetPolicyInfoGet(assetPolicy, options)(this.fetch, this.basePath);
    }

    /**
     * Get the summary of an asset (total transactions exclude minting/total wallets include only wallets with asset balance)
     * @summary Asset Summary
     * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
     * @param {string} [assetName] Asset Name in hexadecimal format (hex)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetApi
     */
    public assetSummaryGet(assetPolicy: string, assetName?: string, options?: any) {
        return AssetServiceFp(this.configuration).assetSummaryGet(assetPolicy, assetName, options)(this.fetch, this.basePath);
    }

    /**
     * Get the list of all asset transaction hashes (newest first)
     * @summary Asset Transaction History
     * @param {string} assetPolicy Asset Policy ID in hexadecimal format (hex)
     * @param {string} [assetName] Asset Name in hexadecimal format (hex)
     * @param {number} [afterBlockHeight] Block height for specifying time delta
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetApi
     */
    public assetTxsGet(assetPolicy: string, assetName?: string, afterBlockHeight?: number, options?: any) {
        return AssetServiceFp(this.configuration).assetTxsGet(assetPolicy, assetName, afterBlockHeight, options)(this.fetch, this.basePath);
    }
}