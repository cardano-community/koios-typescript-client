import {BaseService} from "../base/base-service";
import {BlockServiceFp} from "./block-service-fp";

/**
 * BlockService - object-oriented interface
 * @export
 * @class BlockService
 * @extends {BaseService}
 */
export class BlockService extends BaseService {
    /**
     * Get detailed information about a specific block
     * @summary Block Information
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockApi
     */
    public blockInfoPost(body?: any, options?: any) {
        return BlockServiceFp(this.configuration).blockInfoPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * Get a list of all transactions included in provided blocks
     * @summary Block Transactions
     * @param {any} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockApi
     */
    public blockTxsPost(body?: any, options?: any) {
        return BlockServiceFp(this.configuration).blockTxsPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * Get summarised details about all blocks (paginated - latest first)
     * @summary Block List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockApi
     */
    public blocksGet(options?: any) {
        return BlockServiceFp(this.configuration).blocksGet(options)(this.fetch, this.basePath);
    }

}