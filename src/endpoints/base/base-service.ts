import {BASE_PATH, Configuration} from "../../config/configuration";
import isomorphicFetch from "isomorphic-fetch";

/**
 * Base Service
 * @export
 * @class BaseService
 */
export class BaseService {

    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = isomorphicFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.apiUrl || this.basePath;
        }
    }
}

export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

export interface FetchArgs {
    url: string;
    options: any;
}

export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};