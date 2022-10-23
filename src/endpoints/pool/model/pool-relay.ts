/**
 * Pool Relay
 * @export
 * @interface PoolRelay
 */
import {Relay} from "./relay";

export interface PoolRelay {
    /**
     * Pool ID (bech32 format)
     * @type {string}
     * @memberof PoolRelay
     */
    poolIdBech32?: string;
    /**
     * Relays Array
     * @type {Array<Relay>}
     * @memberof PoolRelay
     */
    relays?: Array<Relay>;
}