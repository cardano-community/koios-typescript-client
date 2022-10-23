/**
 * Relay
 * @export
 * @interface Relay
 */
export interface Relay {
    /**
     * DNS name of the relay (nullable)
     * @type {string}
     * @memberof Relay
     */
    dns?: string;
    /**
     * DNS service name of the relay (nullable)
     * @type {string}
     * @memberof Relay
     */
    srv?: string;
    /**
     * IPv4 address of the relay (nullable)
     * @type {string}
     * @memberof Relay
     */
    ipv4?: string;
    /**
     * IPv6 address of the relay (nullable)
     * @type {string}
     * @memberof Relay
     */
    ipv6?: string;
    /**
     * Port number of the relay (nullable)
     * @type {number}
     * @memberof Relay
     */
    port?: number;
}