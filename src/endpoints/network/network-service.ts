import {BaseService} from "../base/base-service";
import {NetworkServiceFp} from "./network-service-fp";

/**
 * NetworkService - object-oriented interface
 * @export
 * @class NetworkService
 * @extends {BaseService}
 */
export class NetworkService extends BaseService {
    /**
     * Get the Genesis parameters used to start specific era on chain
     * @summary Get Genesis info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetworkApi
     */
    public genesisGet(options?: any) {
        return NetworkServiceFp(this.configuration).genesisGet(options)(this.fetch, this.basePath);
    }

    /**
     * Get the tip info about the latest block seen by chain
     * @summary Query Chain Tip
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetworkApi
     */
    public tipGet(options?: any) {
        return NetworkServiceFp(this.configuration).tipGet(options)(this.fetch, this.basePath);
    }

    /**
     * Get the circulating utxo, treasury, rewards, supply and reserves in lovelace for specified epoch, all epochs if empty
     * @summary Get historical tokenomic stats
     * @param {string} [epochNo] Epoch Number to fetch details for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetworkApi
     */
    public totalsGet(epochNo?: string, options?: any) {
        return NetworkServiceFp(this.configuration).totalsGet(epochNo, options)(this.fetch, this.basePath);
    }

}