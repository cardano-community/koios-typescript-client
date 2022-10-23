import {AccountServiceFp} from "./account-service-fp";
import {BaseService} from "../base/base-service";
import {Options} from "../base/options";

/**
 * AccountService - object-oriented interface
 * @export
 * @class AccountService
 * @extends {BaseService}
 */
export class AccountService extends BaseService {
    /**
     * Get all addresses associated with given staking accounts
     * @summary Account Addresses
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountAddressesPost(body?: any, options?: any) {
        return AccountServiceFp(this.configuration).accountAddressesPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * Get the native asset balance of given accounts
     * @summary Account Assets
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountAssetsPost(body?: any, options?: any) {
        return AccountServiceFp(this.configuration).accountAssetsPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * Get the staking history of given stake addresses (accounts)
     * @summary Account History
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountHistoryPost(body?: any, options?: any) {
        return AccountServiceFp(this.configuration).accountHistoryPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * Get the account information for given stake addresses (accounts)
     * @summary Account Information
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountInfoPost(body?: any, options?: any) {
        return AccountServiceFp(this.configuration).accountInfoPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * Get a list of all accounts
     * @summary Account List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountListGet(options?: Options) {
        return AccountServiceFp(this.configuration).accountListGet(options)(this.fetch, this.basePath);
    }

    /**
     * Get the full rewards history (including MIR) for given stake addresses (accounts)
     * @summary Account Rewards
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountRewardsPost(body?: any, options?: any) {
        return AccountServiceFp(this.configuration).accountRewardsPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * Get the account updates (registration, deregistration, delegation and withdrawals) for given stake addresses (accounts)
     * @summary Account Updates
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountUpdatesPost(body?: any, options?: any) {
        return AccountServiceFp(this.configuration).accountUpdatesPost(body, options)(this.fetch, this.basePath);
    }

}