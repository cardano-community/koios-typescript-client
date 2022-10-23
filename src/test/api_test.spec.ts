import {AccountService} from "../endpoints/account/account-service";
import {AddressService} from "../endpoints/address/address-service";
import {AssetService} from "../endpoints/asset/asset-service";
import {BlockService} from "../endpoints/block/block-service";
import {NetworkService} from "../endpoints/network/network-service";
import {PoolService} from "../endpoints/pool/pool-service";
import {ScriptService} from "../endpoints/script/script-service";
import {TransactionService} from "../endpoints/transactions/transaction-service";
import {EpochService} from "../endpoints/epoch/epoch-service";
import { describe, expect, beforeEach, test } from 'vitest';
import {KoiosAPI} from "../KoiosAPI";

const api = new KoiosAPI({network: 'mainnet', version: 0});

describe("AccountService", () => {
  let instance: AccountService
  beforeEach(function() {
    instance = api.accountService
  });
  test("accountAddressesPost", () => {
    const body: any = undefined
    return expect(instance.accountAddressesPost(body, {})).resolves.toBe(null)
  })
  // test("accountAssetsPost", () => {
  //   const body: any = undefined
  //   return expect(instance.accountAssetsPost(body, {})).resolves.toBe(null)
  // })
  // test("accountHistoryPost", () => {
  //   const body: any = undefined
  //   return expect(instance.accountHistoryPost(body, {})).resolves.toBe(null)
  // })
  // test("accountInfoPost", () => {
  //   const body: any = undefined
  //   return expect(instance.accountInfoPost(body, {})).resolves.toBe(null)
  // })
  test("accountListGet", async () => {
    const result = await instance.accountListGet({});
    return expect(result.length).toBe(1000)
  })
  // test("accountRewardsPost", () => {
  //   const body: any = undefined
  //   return expect(instance.accountRewardsPost(body, {})).resolves.toBe(null)
  // })
  // test("accountUpdatesPost", () => {
  //   const body: any = undefined
  //   return expect(instance.accountUpdatesPost(body, {})).resolves.toBe(null)
  // })
})

// describe("AddressService", () => {
//   let instance: AddressService
//   beforeEach(function() {
//     instance = new AddressService(config)
//   });
//
//   test("addressAssetsPost", () => {
//     const body: any = undefined
//     return expect(instance.addressAssetsPost(body, {})).resolves.toBe(null)
//   })
//   test("addressInfoPost", () => {
//     const body: any = undefined
//     return expect(instance.addressInfoPost(body, {})).resolves.toBe(null)
//   })
//   test("addressTxsPost", () => {
//     const body: any = undefined
//     return expect(instance.addressTxsPost(body, {})).resolves.toBe(null)
//   })
//   test("credentialTxsPost", () => {
//     const body: any = undefined
//     return expect(instance.credentialTxsPost(body, {})).resolves.toBe(null)
//   })
// })
//
// describe("AssetService", () => {
//   let instance: AssetService
//   beforeEach(function() {
//     instance = new AssetService(config)
//   });
//
//   test("assetAddressListGet", () => {
//     const assetPolicy: string = "assetPolicy_example"
//     const assetName: string = "assetName_example"
//     return expect(instance.assetAddressListGet(assetPolicy, assetName, {})).resolves.toBe(null)
//   })
//   test("assetHistoryGet", () => {
//     const assetPolicy: string = "assetPolicy_example"
//     const assetName: string = "assetName_example"
//     return expect(instance.assetHistoryGet(assetPolicy, assetName, {})).resolves.toBe(null)
//   })
//   test("assetInfoGet", () => {
//     const assetPolicy: string = "assetPolicy_example"
//     const assetName: string = "assetName_example"
//     return expect(instance.assetInfoGet(assetPolicy, assetName, {})).resolves.toBe(null)
//   })
//   test("assetListGet", () => {
//     return expect(instance.assetListGet({})).resolves.toBe(null)
//   })
//   test("assetPolicyInfoGet", () => {
//     const assetPolicy: string = "assetPolicy_example"
//     return expect(instance.assetPolicyInfoGet(assetPolicy, {})).resolves.toBe(null)
//   })
//   test("assetSummaryGet", () => {
//     const assetPolicy: string = "assetPolicy_example"
//     const assetName: string = "assetName_example"
//     return expect(instance.assetSummaryGet(assetPolicy, assetName, {})).resolves.toBe(null)
//   })
//   test("assetTxsGet", () => {
//     const assetPolicy: string = "assetPolicy_example"
//     const assetName: string = "assetName_example"
//     const afterBlockHeight: number = 56
//     return expect(instance.assetTxsGet(assetPolicy, assetName, afterBlockHeight, {})).resolves.toBe(null)
//   })
// })
//
// describe("BlockService", () => {
//   let instance: BlockService
//   beforeEach(function() {
//     instance = new BlockService(config)
//   });
//
//   test("blockInfoPost", () => {
//     const body: any = undefined
//     return expect(instance.blockInfoPost(body, {})).resolves.toBe(null)
//   })
//   test("blockTxsPost", () => {
//     const body: any = undefined
//     return expect(instance.blockTxsPost(body, {})).resolves.toBe(null)
//   })
//   test("blocksGet", () => {
//     return expect(instance.blocksGet({})).resolves.toBe(null)
//   })
// })
//
// describe("EpochService", () => {
//   let instance: EpochService
//   beforeEach(function() {
//     instance = new EpochService(config)
//   });
//
//   test("epochBlockProtocolsGet", () => {
//     const epochNo: string = "epochNo_example"
//     return expect(instance.epochBlockProtocolsGet(epochNo, {})).resolves.toBe(null)
//   })
//   test("epochInfoGet", () => {
//     const epochNo: string = "epochNo_example"
//     return expect(instance.epochInfoGet(epochNo, {})).resolves.toBe(null)
//   })
//   test("epochParamsGet", () => {
//     const epochNo: string = "epochNo_example"
//     return expect(instance.epochParamsGet(epochNo, {})).resolves.toBe(null)
//   })
// })
//
// describe("NetworkService", () => {
//   let instance: NetworkService
//   beforeEach(function() {
//     instance = new NetworkService(config)
//   });
//
//   test("genesisGet", () => {
//     return expect(instance.genesisGet({})).resolves.toBe(null)
//   })
//   test("tipGet", () => {
//     return expect(instance.tipGet({})).resolves.toBe(null)
//   })
//   test("totalsGet", () => {
//     const epochNo: string = "epochNo_example"
//     return expect(instance.totalsGet(epochNo, {})).resolves.toBe(null)
//   })
// })
//
// describe("PoolService", () => {
//   let instance: PoolService
//   beforeEach(function() {
//     instance = new PoolService(config)
//   });
//
//   test("poolBlocksGet", () => {
//     const poolBech32: string = "poolBech32_example"
//     const epochNo: string = "epochNo_example"
//     return expect(instance.poolBlocksGet(poolBech32, epochNo, {})).resolves.toBe(null)
//   })
//   test("poolDelegatorsGet", () => {
//     const poolBech32: string = "poolBech32_example"
//     return expect(instance.poolDelegatorsGet(poolBech32, {})).resolves.toBe(null)
//   })
//   test("poolDelegatorsHistoryGet", () => {
//     const poolBech32: string = "poolBech32_example"
//     const epochNo: string = "epochNo_example"
//     return expect(instance.poolDelegatorsHistoryGet(poolBech32, epochNo, {})).resolves.toBe(null)
//   })
//   test("poolHistoryGet", () => {
//     const poolBech32: string = "poolBech32_example"
//     const epochNo: string = "epochNo_example"
//     return expect(instance.poolHistoryGet(poolBech32, epochNo, {})).resolves.toBe(null)
//   })
//   test("poolInfoPost", () => {
//     const body: any = undefined
//     return expect(instance.poolInfoPost(body, {})).resolves.toBe(null)
//   })
//   test("poolListGet", () => {
//     return expect(instance.poolListGet({})).resolves.toBe(null)
//   })
//   test("poolMetadataPost", () => {
//     const body: any = undefined
//     return expect(instance.poolMetadataPost(body, {})).resolves.toBe(null)
//   })
//   test("poolRelaysGet", () => {
//     return expect(instance.poolRelaysGet({})).resolves.toBe(null)
//   })
//   test("poolStakeSnapshotGet", () => {
//     const poolBech32: string = "poolBech32_example"
//     return expect(instance.poolStakeSnapshotGet(poolBech32, {})).resolves.toBe(null)
//   })
//   test("poolUpdatesGet", () => {
//     const poolBech32: string = "poolBech32_example"
//     return expect(instance.poolUpdatesGet(poolBech32, {})).resolves.toBe(null)
//   })
// })
//
// describe("ScriptService", () => {
//   let instance: ScriptService
//   beforeEach(function() {
//     instance = new ScriptService(config)
//   });
//
//   test("nativeScriptListGet", () => {
//     return expect(instance.nativeScriptListGet({})).resolves.toBe(null)
//   })
//   test("plutusScriptListGet", () => {
//     return expect(instance.plutusScriptListGet({})).resolves.toBe(null)
//   })
//   test("scriptRedeemersGet", () => {
//     const scriptHash: string = "scriptHash_example"
//     return expect(instance.scriptRedeemersGet(scriptHash, {})).resolves.toBe(null)
//   })
// })
//
// describe("TransactionService", () => {
//   let instance: TransactionService
//   beforeEach(function() {
//     instance = new TransactionService(config)
//   });
//
//   test("submittxPost", () => {
//     const body: any = undefined
//     return expect(instance.submittxPost(body, {})).resolves.toBe(null)
//   })
//   test("txInfoPost", () => {
//     const body: any = undefined
//     return expect(instance.txInfoPost(body, {})).resolves.toBe(null)
//   })
//   test("txMetadataPost", () => {
//     const body: any = undefined
//     return expect(instance.txMetadataPost(body, {})).resolves.toBe(null)
//   })
//   test("txMetalabelsGet", () => {
//     return expect(instance.txMetalabelsGet({})).resolves.toBe(null)
//   })
//   test("txStatusPost", () => {
//     const body: any = undefined
//     return expect(instance.txStatusPost(body, {})).resolves.toBe(null)
//   })
//   test("txUtxosPost", () => {
//     const body: any = undefined
//     return expect(instance.txUtxosPost(body, {})).resolves.toBe(null)
//   })
// })

