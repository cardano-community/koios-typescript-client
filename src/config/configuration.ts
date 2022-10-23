export const BASE_PATH = "https://api.koios.rest/api/v0";

export interface Parameters {
    auth?: {
        apiKey?: string | ((name: string) => string);
        username?: string;
        password?: string;
        accessToken?: string | ((name: string, scopes?: string[]) => string);
    }
    customBackend?: string;
    network?: CardanoNetwork;
    version?: number;
}

export type CardanoNetwork = 'mainnet' | 'testnet' | 'guildnet';

export const API_URLS = {
    guildnet: 'https://guild.koios.rest/api',
    mainnet: 'https://api.koios.rest/api',
    testnet: 'https://testnet.koios.rest/api',
    preview: '',
    preprod: '',
};

export class Configuration {
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey?: string | ((name: string) => string);
    /**
     * parameter for basic security
     * 
     * @type {string}
     * @memberof Configuration
     */
    username?: string;
    /**
     * parameter for basic security
     * 
     * @type {string}
     * @memberof Configuration
     */
    password?: string;
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
    accessToken?: string | ((name: string, scopes?: string[]) => string);
    /**
     * API URL
     */
    apiUrl?: string = API_URLS.mainnet;

    constructor(params?: Parameters) {
        if (!params) {
            return;
        }
        if (params.auth) {
            this.apiKey = params.auth.apiKey;
            this.username = params.auth.username;
            this.password = params.auth.password;
            this.accessToken = params.auth.accessToken;
        }
        if (params.customBackend) {
            this.apiUrl = params.customBackend
        } else if (params.network) {
            if (params.network in API_URLS) {
                this.apiUrl = API_URLS[params.network];
            } else {
                throw Error('Invalid network option. Valid options: mainnet, testnet, guildnet.',);
            }
            if (params["version"] !== undefined) {
                this.apiUrl = `${this.apiUrl}/v${params.version}`
            }
        }
    }
}
