import {Configuration} from "../../config/configuration";
import {FetchAPI} from "../base/base-service";
import {EpochServiceFp} from "./epoch-service-fp";

/**
 * EpochServiceFactory - factory interface
 * @export
 */
export const EpochServiceFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Get the information about block protocol distribution in epoch
         * @summary Epoch's Block Protocols
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        epochBlockProtocolsGet(epochNo?: string, options?: any) {
            return EpochServiceFp(configuration).epochBlockProtocolsGet(epochNo, options)(fetch, basePath);
        },
        /**
         * Get the epoch information, all epochs if no epoch specified
         * @summary Epoch Information
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        epochInfoGet(epochNo?: string, options?: any) {
            return EpochServiceFp(configuration).epochInfoGet(epochNo, options)(fetch, basePath);
        },
        /**
         * Get the protocol parameters for specific epoch, returns information about all epochs if no epoch specified
         * @summary Epoch's Protocol Parameters
         * @param {string} [epochNo] Epoch Number to fetch details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        epochParamsGet(epochNo?: string, options?: any) {
            return EpochServiceFp(configuration).epochParamsGet(epochNo, options)(fetch, basePath);
        },
    };
};