import {BaseService} from "../base/base-service";
import {TransactionServiceFp} from "./transaction-service-fp";

/**
 * Transaction Service - object-oriented interface
 * @export
 * @class TransactionService
 * @extends {BaseService}
 */
export class TransactionService extends BaseService {
    /**
     * Submit an already serialized transaction to the network.
     * @summary Submit Transaction
     * @param {Object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    public submittxPost(body?: Object, options?: any) {
        return TransactionServiceFp(this.configuration).submittxPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * Get detailed information about transaction(s)
     * @summary Transaction Information
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    public txInfoPost(body?: any, options?: any) {
        return TransactionServiceFp(this.configuration).txInfoPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * Get metadata information (if any) for given transaction(s)
     * @summary Transaction Metadata
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    public txMetadataPost(body?: any, options?: any) {
        return TransactionServiceFp(this.configuration).txMetadataPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * Get a list of all transaction metalabels
     * @summary Transaction Metadata Labels
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    public txMetalabelsGet(options?: any) {
        return TransactionServiceFp(this.configuration).txMetalabelsGet(options)(this.fetch, this.basePath);
    }

    /**
     * Get the number of block confirmations for a given transaction hash list
     * @summary Transaction Status (Block Confirmations)
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    public txStatusPost(body?: any, options?: any) {
        return TransactionServiceFp(this.configuration).txStatusPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * Get UTxO set (inputs/outputs) of transactions.
     * @summary Transaction UTxOs
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    public txUtxosPost(body?: any, options?: any) {
        return TransactionServiceFp(this.configuration).txUtxosPost(body, options)(this.fetch, this.basePath);
    }
}