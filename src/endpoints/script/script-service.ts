import {BaseService} from "../base/base-service";
import {ScriptServiceFp} from "./script-service-fp";

/**
 * Script Service - object-oriented interface
 * @export
 * @class ScriptService
 * @extends {BaseService}
 */
export class ScriptService extends BaseService {
    /**
     * List of all existing native script hashes along with their creation transaction hashes
     * @summary Native Script List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScriptApi
     */
    public nativeScriptListGet(options?: any) {
        return ScriptServiceFp(this.configuration).nativeScriptListGet(options)(this.fetch, this.basePath);
    }

    /**
     * List of all existing Plutus script hashes along with their creation transaction hashes
     * @summary Plutus Script List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScriptApi
     */
    public plutusScriptListGet(options?: any) {
        return ScriptServiceFp(this.configuration).plutusScriptListGet(options)(this.fetch, this.basePath);
    }

    /**
     * List of all redeemers for a given script hash
     * @summary Script Redeemers
     * @param {string} scriptHash Script hash in hexadecimal format (hex)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScriptApi
     */
    public scriptRedeemersGet(scriptHash: string, options?: any) {
        return ScriptServiceFp(this.configuration).scriptRedeemersGet(scriptHash, options)(this.fetch, this.basePath);
    }

}