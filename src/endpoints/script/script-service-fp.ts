import {BASE_PATH, Configuration} from "../../config/configuration";
import {FetchAPI, FetchArgs} from "../base/base-service";
import url from "url";
import {RequiredError} from "../base/error/required-error";
import isomorphicFetch from "isomorphic-fetch";
import {NativeScript} from "./model/native-script";
import {PlutusScript} from "./model/plutus-script";
import {ScriptRedeemer} from "./model/script-redeemer";

/**
 * ScriptServiceFp - functional programming interface
 * @export
 */
export const ScriptServiceFp = function(configuration?: Configuration) {
    return {
        /**
         * List of all existing native script hashes along with their creation transaction hashes
         * @summary Native Script List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nativeScriptListGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<NativeScript>> {
            const localVarFetchArgs = ScriptApiFetchParamCreator(configuration).nativeScriptListGet(options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * List of all existing Plutus script hashes along with their creation transaction hashes
         * @summary Plutus Script List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        plutusScriptListGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<PlutusScript>> {
            const localVarFetchArgs = ScriptApiFetchParamCreator(configuration).plutusScriptListGet(options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * List of all redeemers for a given script hash
         * @summary Script Redeemers
         * @param {string} scriptHash Script hash in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scriptRedeemersGet(scriptHash: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<ScriptRedeemer>> {
            const localVarFetchArgs = ScriptApiFetchParamCreator(configuration).scriptRedeemersGet(scriptHash, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * ScriptApi - fetch parameter creator
 * @export
 */
export const ScriptApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * List of all existing native script hashes along with their creation transaction hashes
         * @summary Native Script List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nativeScriptListGet(options: any = {}): FetchArgs {
            const localVarPath = `/native_script_list`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List of all existing Plutus script hashes along with their creation transaction hashes
         * @summary Plutus Script List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        plutusScriptListGet(options: any = {}): FetchArgs {
            const localVarPath = `/plutus_script_list`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List of all redeemers for a given script hash
         * @summary Script Redeemers
         * @param {string} scriptHash Script hash in hexadecimal format (hex)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scriptRedeemersGet(scriptHash: string, options: any = {}): FetchArgs {
            // verify required parameter 'scriptHash' is not null or undefined
            if (scriptHash === null || scriptHash === undefined) {
                throw new RequiredError('scriptHash','Required parameter scriptHash was null or undefined when calling scriptRedeemersGet.');
            }
            const localVarPath = `/script_redeemers`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (scriptHash !== undefined) {
                localVarQueryParameter['_script_hash'] = scriptHash;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};