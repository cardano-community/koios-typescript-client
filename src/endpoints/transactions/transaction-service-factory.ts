import {Configuration} from "../../config/configuration";
import {FetchAPI} from "../base/base-service";
import {TransactionServiceFp} from "./transaction-service-fp";

/**
 * Transaction Service - factory interface
 * @export
 */
export const TransactionServiceFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Submit an already serialized transaction to the network.
         * @summary Submit Transaction
         * @param {Object} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submittxPost(body?: Object, options?: any) {
            return TransactionServiceFp(configuration).submittxPost(body, options)(fetch, basePath);
        },
        /**
         * Get detailed information about transaction(s)
         * @summary Transaction Information
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        txInfoPost(body?: any, options?: any) {
            return TransactionServiceFp(configuration).txInfoPost(body, options)(fetch, basePath);
        },
        /**
         * Get metadata information (if any) for given transaction(s)
         * @summary Transaction Metadata
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        txMetadataPost(body?: any, options?: any) {
            return TransactionServiceFp(configuration).txMetadataPost(body, options)(fetch, basePath);
        },
        /**
         * Get a list of all transaction metalabels
         * @summary Transaction Metadata Labels
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        txMetalabelsGet(options?: any) {
            return TransactionServiceFp(configuration).txMetalabelsGet(options)(fetch, basePath);
        },
        /**
         * Get the number of block confirmations for a given transaction hash list
         * @summary Transaction Status (Block Confirmations)
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        txStatusPost(body?: any, options?: any) {
            return TransactionServiceFp(configuration).txStatusPost(body, options)(fetch, basePath);
        },
        /**
         * Get UTxO set (inputs/outputs) of transactions.
         * @summary Transaction UTxOs
         * @param {any} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        txUtxosPost(body?: any, options?: any) {
            return TransactionServiceFp(configuration).txUtxosPost(body, options)(fetch, basePath);
        },
    };
};