import {BaseService} from "../base/base-service";
import {EpochServiceFp} from "./epoch-service-fp";

/**
 * EpochService - object-oriented interface
 * @export
 * @class EpochService
 * @extends {BaseService}
 */
export class EpochService extends BaseService {
    /**
     * Get the information about block protocol distribution in epoch
     * @summary Epoch's Block Protocols
     * @param {string} [epochNo] Epoch Number to fetch details for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EpochApi
     */
    public epochBlockProtocolsGet(epochNo?: string, options?: any) {
        return EpochServiceFp(this.configuration).epochBlockProtocolsGet(epochNo, options)(this.fetch, this.basePath);
    }

    /**
     * Get the epoch information, all epochs if no epoch specified
     * @summary Epoch Information
     * @param {string} [epochNo] Epoch Number to fetch details for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EpochApi
     */
    public epochInfoGet(epochNo?: string, options?: any) {
        return EpochServiceFp(this.configuration).epochInfoGet(epochNo, options)(this.fetch, this.basePath);
    }

    /**
     * Get the protocol parameters for specific epoch, returns information about all epochs if no epoch specified
     * @summary Epoch's Protocol Parameters
     * @param {string} [epochNo] Epoch Number to fetch details for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EpochApi
     */
    public epochParamsGet(epochNo?: string, options?: any) {
        return EpochServiceFp(this.configuration).epochParamsGet(epochNo, options)(this.fetch, this.basePath);
    }

}