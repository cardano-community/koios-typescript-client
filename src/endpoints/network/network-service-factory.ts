import {Configuration} from "../../config/configuration";
import {FetchAPI} from "../base/base-service";
import {NetworkServiceFp} from "./network-service-fp";

/**
 * NetworkServiceFactory - factory interface
 * @export
 */
export const NetworkServiceFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Get the Genesis parameters used to start specific era on chain
         * @summary Get Genesis info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        genesisGet(options?: any) {
            return NetworkServiceFp(configuration).genesisGet(options)(fetch, basePath);
        },
        /**
         * Get the tip info about the latest block seen by chain
         * @summary Query Chain Tip
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tipGet(options?: any) {
            return NetworkServiceFp(configuration).tipGet(options)(fetch, basePath);
        },
        /**
         * Get the circulating utxo, treasury, rewards, supply and reserves in lovelace for specified epoch, all epochs if empty
         * @summary Get historical tokenomic stats
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        totalsGet(epochNo?: string, options?: any) {
            return NetworkServiceFp(configuration).totalsGet(epochNo, options)(fetch, basePath);
        },
    };
};