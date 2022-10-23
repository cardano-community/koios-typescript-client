import {Configuration} from "../../config/configuration";
import {FetchAPI} from "../base/base-service";
import {BlockServiceFp} from "./block-service-fp";

/**
 * Block Service Factory - factory interface
 * @export
 */
export const BlockServiceFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Get detailed information about a specific block
         * @summary Block Information
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blockInfoPost(body?: any, options?: any) {
            return BlockServiceFp(configuration).blockInfoPost(body, options)(fetch, basePath);
        },
        /**
         * Get a list of all transactions included in provided blocks
         * @summary Block Transactions
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blockTxsPost(body?: any, options?: any) {
            return BlockServiceFp(configuration).blockTxsPost(body, options)(fetch, basePath);
        },
        /**
         * Get summarised details about all blocks (paginated - latest first)
         * @summary Block List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blocksGet(options?: any) {
            return BlockServiceFp(configuration).blocksGet(options)(fetch, basePath);
        },
    };
};