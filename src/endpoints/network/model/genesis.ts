/**
 * Genesis
 * @export
 * @interface Genesis
 */
export interface Genesis {
    /**
     * Unique network identifier for chain
     * @type {string}
     * @memberof Genesis
     */
    networkmagic?: string;
    /**
     * Network ID used at various CLI identification to distinguish between Mainnet and other networks
     * @type {string}
     * @memberof Genesis
     */
    networkid?: string;
    /**
     * Number of slots in an epoch
     * @type {string}
     * @memberof Genesis
     */
    epochlength?: string;
    /**
     * Duration of a single slot (in seconds)
     * @type {string}
     * @memberof Genesis
     */
    slotlength?: string;
    /**
     * Maximum smallest units (lovelaces) supply for the blockchain
     * @type {string}
     * @memberof Genesis
     */
    maxlovelacesupply?: string;
    /**
     * UNIX timestamp of the first block (genesis) on chain
     * @type {number}
     * @memberof Genesis
     */
    systemstart?: number;
    /**
     * Active Slot Co-Efficient (f) - determines the _probability_ of number of slots in epoch that are expected to have blocks (so mainnet, this would be: 432000 * 0.05 = 21600 estimated blocks)
     * @type {string}
     * @memberof Genesis
     */
    activeslotcoeff?: string;
    /**
     * Number of slots that represent a single KES period (a unit used for validation of KES key evolutions)
     * @type {string}
     * @memberof Genesis
     */
    slotsperkesperiod?: string;
    /**
     * Number of KES key evolutions that will automatically occur before a KES (hot) key is expired. This parameter is for security of a pool, in case an operator had access to his hot(online) machine compromised
     * @type {string}
     * @memberof Genesis
     */
    maxkesrevolutions?: string;
    /**
     * A unit (k) used to divide epochs to determine stability window (used in security checks like ensuring atleast 1 block was created in 3*k/f period, or to finalize next epoch's nonce at 4*k/f slots before end of epoch)
     * @type {string}
     * @memberof Genesis
     */
    securityparam?: string;
    /**
     * Number of BFT members that need to approve (via vote) a Protocol Update Proposal
     * @type {string}
     * @memberof Genesis
     */
    updatequorum?: string;
    /**
     * A JSON dump of Alonzo Genesis
     * @type {string}
     * @memberof Genesis
     */
    alonzogenesis?: string;
}