/**
 * Reference Script
 * @export
 * @interface ReferenceScript
 */
export interface ReferenceScript {

    /**
     * Hash of referenced script
     * @type {string}
     * @memberof ReferenceScript
     */
    hash?: string;
    /**
     * Size in bytes
     * @type {number}
     * @memberof ReferenceScript
     */
    size?: number;
    /**
     * Type of script
     * @type {string}
     * @memberof ReferenceScript
     */
    type?: string;
    /**
     * Script bytes (hex)
     * @type {string}
     * @memberof ReferenceScript
     */
    bytes?: string;
    /**
     * Value (json)
     * @type {any}
     * @memberof ReferenceScript
     */
    value?: any;
}