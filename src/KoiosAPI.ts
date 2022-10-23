import {Configuration, Parameters} from "./config/configuration";
import {AddressService} from "./endpoints/address/address-service";
import {AccountService} from "./endpoints/account/account-service";
import {AssetService} from "./endpoints/asset/asset-service";
import {BlockService} from "./endpoints/block/block-service";
import {EpochService} from "./endpoints/epoch/epoch-service";
import {NetworkService} from "./endpoints/network/network-service";
import {PoolService} from "./endpoints/pool/pool-service";
import {ScriptService} from "./endpoints/script/script-service";
import {TransactionService} from "./endpoints/transactions/transaction-service";

class KoiosAPI {

    private readonly _accountService: AccountService
    private readonly _addressService: AddressService
    private readonly _assetService: AssetService
    private readonly _blockService: BlockService
    private readonly _epochService: EpochService
    private readonly _networkService: NetworkService
    private readonly _poolService: PoolService
    private readonly _scriptService: ScriptService
    private readonly _transactionService: TransactionService

    constructor(parameters?: Parameters) {
        const config = new Configuration(parameters);
        this._accountService = new AccountService(config);
        this._addressService = new AddressService(config);
        this._assetService = new AssetService(config);
        this._blockService = new BlockService(config);
        this._epochService = new EpochService(config);
        this._networkService = new NetworkService(config);
        this._poolService = new PoolService(config);
        this._scriptService = new ScriptService(config);
        this._transactionService = new TransactionService(config);
    }


    get accountService(): AccountService {
        return this._accountService;
    }

    get addressService(): AddressService {
        return this._addressService;
    }

    get assetService(): AssetService {
        return this._assetService;
    }

    get blockService(): BlockService {
        return this._blockService;
    }

    get epochService(): EpochService {
        return this._epochService;
    }

    get networkService(): NetworkService {
        return this._networkService;
    }

    get poolService(): PoolService {
        return this._poolService;
    }

    get scriptService(): ScriptService {
        return this._scriptService;
    }

    get transactionService(): TransactionService {
        return this._transactionService;
    }
}

export { KoiosAPI };