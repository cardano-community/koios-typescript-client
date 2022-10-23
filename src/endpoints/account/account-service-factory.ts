import {AccountServiceFp} from "./account-service-fp"
import {Configuration} from "../../config/configuration";
import {FetchAPI} from "../base/base-service";

/**
 * AccountApi - factory interface
 * @export
 */
export const AccountServiceFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Get all addresses associated with given staking accounts
         * @summary Account Addresses
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountAddressesPost(body?: any, options?: any) {
            return AccountServiceFp(configuration).accountAddressesPost(body, options)(fetch, basePath);
        },
        /**
         * Get the native asset balance of given accounts
         * @summary Account Assets
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountAssetsPost(body?: any, options?: any) {
            return AccountServiceFp(configuration).accountAssetsPost(body, options)(fetch, basePath);
        },
        /**
         * Get the staking history of given stake addresses (accounts)
         * @summary Account History
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountHistoryPost(body?: any, options?: any) {
            return AccountServiceFp(configuration).accountHistoryPost(body, options)(fetch, basePath);
        },
        /**
         * Get the account information for given stake addresses (accounts)
         * @summary Account Information
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountInfoPost(body?: any, options?: any) {
            return AccountServiceFp(configuration).accountInfoPost(body, options)(fetch, basePath);
        },
        /**
         * Get a list of all accounts
         * @summary Account List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountListGet(options?: any) {
            return AccountServiceFp(configuration).accountListGet(options)(fetch, basePath);
        },
        /**
         * Get the full rewards history (including MIR) for given stake addresses (accounts)
         * @summary Account Rewards
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountRewardsPost(body?: any, options?: any) {
            return AccountServiceFp(configuration).accountRewardsPost(body, options)(fetch, basePath);
        },
        /**
         * Get the account updates (registration, deregistration, delegation and withdrawals) for given stake addresses (accounts)
         * @summary Account Updates
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountUpdatesPost(body?: any, options?: any) {
            return AccountServiceFp(configuration).accountUpdatesPost(body, options)(fetch, basePath);
        },
    };
};