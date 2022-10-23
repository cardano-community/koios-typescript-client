import {Configuration} from "../../config/configuration";
import {FetchAPI} from "../base/base-service";
import {ScriptServiceFp} from "./script-service-fp";

/**
 * Script Service Factory - factory interface
 * @export
 */
export const ScriptServiceFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * List of all existing native script hashes along with their creation transaction hashes
         * @summary Native Script List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nativeScriptListGet(options?: any) {
            return ScriptServiceFp(configuration).nativeScriptListGet(options)(fetch, basePath);
        },
        /**
         * List of all existing Plutus script hashes along with their creation transaction hashes
         * @summary Plutus Script List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        plutusScriptListGet(options?: any) {
            return ScriptServiceFp(configuration).plutusScriptListGet(options)(fetch, basePath);
        },
        /**
         * List of all redeemers for a given script hash
         * @summary Script Redeemers
         * @param {string} scriptHash Script hash in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scriptRedeemersGet(scriptHash: string, options?: any) {
            return ScriptServiceFp(configuration).scriptRedeemersGet(scriptHash, options)(fetch, basePath);
        },
    };
};