/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  DepositHistory,
  EnrichedTx,
  NextNonce,
  ResultCode,
  TxHash,
  TxHashes,
  Txs,
  WithdrawHistory,
} from '../models/index';
import {
    DepositHistoryFromJSON,
    DepositHistoryToJSON,
    EnrichedTxFromJSON,
    EnrichedTxToJSON,
    NextNonceFromJSON,
    NextNonceToJSON,
    ResultCodeFromJSON,
    ResultCodeToJSON,
    TxHashFromJSON,
    TxHashToJSON,
    TxHashesFromJSON,
    TxHashesToJSON,
    TxsFromJSON,
    TxsToJSON,
    WithdrawHistoryFromJSON,
    WithdrawHistoryToJSON,
} from '../models/index';

export interface AccountPendingTxsRequest {
    by: AccountPendingTxsByEnum;
    value: string;
    types?: Array<number>;
}

export interface AccountTxsRequest {
    limit: number;
    by: AccountTxsByEnum;
    value: string;
    index?: number;
    types?: Array<number>;
}

export interface BlockTxsRequest {
    by: BlockTxsByEnum;
    value: string;
}

export interface DepositHistoryRequest {
    l1Address: string;
    cursor?: string;
    filter?: DepositHistoryFilterEnum;
}

export interface NextNonceRequest {
    accountIndex: number;
    apiKeyIndex: number;
}

export interface PendingTxsRequest {
    limit: number;
    index?: number;
}

export interface SendTxRequest {
    txType: number;
    txInfo: string;
    priceProtection?: boolean;
}

export interface SendTxBatchRequest {
    txTypes: string;
    txInfos: string;
}

export interface TxRequest {
    by: TxByEnum;
    value: string;
}

export interface TxFromL1TxHashRequest {
    hash: string;
}

export interface TxsRequest {
    limit: number;
    index?: number;
}

export interface WithdrawHistoryRequest {
    accountIndex: number;
    cursor?: string;
    filter?: WithdrawHistoryFilterEnum;
}

/**
 * TransactionApi - interface
 * 
 * @export
 * @interface TransactionApiInterface
 */
export interface TransactionApiInterface {
    /**
     * Get pending transactions of a specific account
     * @summary accountPendingTxs
     * @param {'account_index'} by 
     * @param {string} value 
     * @param {Array<number>} [types] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    accountPendingTxsRaw(requestParameters: AccountPendingTxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Txs>>;

    /**
     * Get pending transactions of a specific account
     * accountPendingTxs
     */
    accountPendingTxs(requestParameters: AccountPendingTxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Txs>;

    /**
     * Get transactions of a specific account
     * @summary accountTxs
     * @param {number} limit 
     * @param {'account_index'} by 
     * @param {string} value 
     * @param {number} [index] 
     * @param {Array<number>} [types] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    accountTxsRaw(requestParameters: AccountTxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Txs>>;

    /**
     * Get transactions of a specific account
     * accountTxs
     */
    accountTxs(requestParameters: AccountTxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Txs>;

    /**
     * Get transactions in a block
     * @summary blockTxs
     * @param {'block_height' | 'block_commitment'} by 
     * @param {string} value 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    blockTxsRaw(requestParameters: BlockTxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Txs>>;

    /**
     * Get transactions in a block
     * blockTxs
     */
    blockTxs(requestParameters: BlockTxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Txs>;

    /**
     * Get deposit history
     * @summary deposit_history
     * @param {string} l1Address 
     * @param {string} [cursor] 
     * @param {'all' | 'pending' | 'claimable'} [filter] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    depositHistoryRaw(requestParameters: DepositHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DepositHistory>>;

    /**
     * Get deposit history
     * deposit_history
     */
    depositHistory(requestParameters: DepositHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DepositHistory>;

    /**
     * Get next nonce for a specific account
     * @summary nextNonce
     * @param {number} accountIndex 
     * @param {number} apiKeyIndex 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    nextNonceRaw(requestParameters: NextNonceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NextNonce>>;

    /**
     * Get next nonce for a specific account
     * nextNonce
     */
    nextNonce(requestParameters: NextNonceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NextNonce>;

    /**
     * Get pending transactions
     * @summary pendingTxs
     * @param {number} limit 
     * @param {number} [index] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    pendingTxsRaw(requestParameters: PendingTxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Txs>>;

    /**
     * Get pending transactions
     * pendingTxs
     */
    pendingTxs(requestParameters: PendingTxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Txs>;

    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * @summary sendTx
     * @param {number} txType 
     * @param {string} txInfo 
     * @param {boolean} [priceProtection] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    sendTxRaw(requestParameters: SendTxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TxHash>>;

    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * sendTx
     */
    sendTx(requestParameters: SendTxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TxHash>;

    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * @summary sendTxBatch
     * @param {string} txTypes 
     * @param {string} txInfos 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    sendTxBatchRaw(requestParameters: SendTxBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TxHashes>>;

    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * sendTxBatch
     */
    sendTxBatch(requestParameters: SendTxBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TxHashes>;

    /**
     * Get transaction by hash or sequence index
     * @summary tx
     * @param {'hash' | 'sequence_index'} by 
     * @param {string} value 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    txRaw(requestParameters: TxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnrichedTx>>;

    /**
     * Get transaction by hash or sequence index
     * tx
     */
    tx(requestParameters: TxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnrichedTx>;

    /**
     * Get L1 transaction by L1 transaction hash
     * @summary txFromL1TxHash
     * @param {string} hash 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    txFromL1TxHashRaw(requestParameters: TxFromL1TxHashRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnrichedTx>>;

    /**
     * Get L1 transaction by L1 transaction hash
     * txFromL1TxHash
     */
    txFromL1TxHash(requestParameters: TxFromL1TxHashRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnrichedTx>;

    /**
     * Get transactions which are already packed into blocks
     * @summary txs
     * @param {number} limit 
     * @param {number} [index] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    txsRaw(requestParameters: TxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Txs>>;

    /**
     * Get transactions which are already packed into blocks
     * txs
     */
    txs(requestParameters: TxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Txs>;

    /**
     * Get withdraw history
     * @summary withdraw_history
     * @param {number} accountIndex 
     * @param {string} [cursor] 
     * @param {'all' | 'pending' | 'claimable'} [filter] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    withdrawHistoryRaw(requestParameters: WithdrawHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WithdrawHistory>>;

    /**
     * Get withdraw history
     * withdraw_history
     */
    withdrawHistory(requestParameters: WithdrawHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WithdrawHistory>;

}

/**
 * 
 */
export class TransactionApi extends runtime.BaseAPI implements TransactionApiInterface {

    /**
     * Get pending transactions of a specific account
     * accountPendingTxs
     */
    async accountPendingTxsRaw(requestParameters: AccountPendingTxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Txs>> {
        if (requestParameters['by'] == null) {
            throw new runtime.RequiredError(
                'by',
                'Required parameter "by" was null or undefined when calling accountPendingTxs().'
            );
        }

        if (requestParameters['value'] == null) {
            throw new runtime.RequiredError(
                'value',
                'Required parameter "value" was null or undefined when calling accountPendingTxs().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['by'] != null) {
            queryParameters['by'] = requestParameters['by'];
        }

        if (requestParameters['value'] != null) {
            queryParameters['value'] = requestParameters['value'];
        }

        if (requestParameters['types'] != null) {
            queryParameters['types'] = requestParameters['types']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/accountPendingTxs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TxsFromJSON(jsonValue));
    }

    /**
     * Get pending transactions of a specific account
     * accountPendingTxs
     */
    async accountPendingTxs(requestParameters: AccountPendingTxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Txs> {
        const response = await this.accountPendingTxsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get transactions of a specific account
     * accountTxs
     */
    async accountTxsRaw(requestParameters: AccountTxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Txs>> {
        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling accountTxs().'
            );
        }

        if (requestParameters['by'] == null) {
            throw new runtime.RequiredError(
                'by',
                'Required parameter "by" was null or undefined when calling accountTxs().'
            );
        }

        if (requestParameters['value'] == null) {
            throw new runtime.RequiredError(
                'value',
                'Required parameter "value" was null or undefined when calling accountTxs().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['index'] != null) {
            queryParameters['index'] = requestParameters['index'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['by'] != null) {
            queryParameters['by'] = requestParameters['by'];
        }

        if (requestParameters['value'] != null) {
            queryParameters['value'] = requestParameters['value'];
        }

        if (requestParameters['types'] != null) {
            queryParameters['types'] = requestParameters['types']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/accountTxs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TxsFromJSON(jsonValue));
    }

    /**
     * Get transactions of a specific account
     * accountTxs
     */
    async accountTxs(requestParameters: AccountTxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Txs> {
        const response = await this.accountTxsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get transactions in a block
     * blockTxs
     */
    async blockTxsRaw(requestParameters: BlockTxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Txs>> {
        if (requestParameters['by'] == null) {
            throw new runtime.RequiredError(
                'by',
                'Required parameter "by" was null or undefined when calling blockTxs().'
            );
        }

        if (requestParameters['value'] == null) {
            throw new runtime.RequiredError(
                'value',
                'Required parameter "value" was null or undefined when calling blockTxs().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['by'] != null) {
            queryParameters['by'] = requestParameters['by'];
        }

        if (requestParameters['value'] != null) {
            queryParameters['value'] = requestParameters['value'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/blockTxs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TxsFromJSON(jsonValue));
    }

    /**
     * Get transactions in a block
     * blockTxs
     */
    async blockTxs(requestParameters: BlockTxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Txs> {
        const response = await this.blockTxsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get deposit history
     * deposit_history
     */
    async depositHistoryRaw(requestParameters: DepositHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DepositHistory>> {
        if (requestParameters['l1Address'] == null) {
            throw new runtime.RequiredError(
                'l1Address',
                'Required parameter "l1Address" was null or undefined when calling depositHistory().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['l1Address'] != null) {
            queryParameters['l1_address'] = requestParameters['l1Address'];
        }

        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
        }

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/deposit/history`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DepositHistoryFromJSON(jsonValue));
    }

    /**
     * Get deposit history
     * deposit_history
     */
    async depositHistory(requestParameters: DepositHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DepositHistory> {
        const response = await this.depositHistoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get next nonce for a specific account
     * nextNonce
     */
    async nextNonceRaw(requestParameters: NextNonceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NextNonce>> {
        if (requestParameters['accountIndex'] == null) {
            throw new runtime.RequiredError(
                'accountIndex',
                'Required parameter "accountIndex" was null or undefined when calling nextNonce().'
            );
        }

        if (requestParameters['apiKeyIndex'] == null) {
            throw new runtime.RequiredError(
                'apiKeyIndex',
                'Required parameter "apiKeyIndex" was null or undefined when calling nextNonce().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['accountIndex'] != null) {
            queryParameters['account_index'] = requestParameters['accountIndex'];
        }

        if (requestParameters['apiKeyIndex'] != null) {
            queryParameters['api_key_index'] = requestParameters['apiKeyIndex'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/nextNonce`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NextNonceFromJSON(jsonValue));
    }

    /**
     * Get next nonce for a specific account
     * nextNonce
     */
    async nextNonce(requestParameters: NextNonceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NextNonce> {
        const response = await this.nextNonceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get pending transactions
     * pendingTxs
     */
    async pendingTxsRaw(requestParameters: PendingTxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Txs>> {
        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling pendingTxs().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['index'] != null) {
            queryParameters['index'] = requestParameters['index'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/pendingTxs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TxsFromJSON(jsonValue));
    }

    /**
     * Get pending transactions
     * pendingTxs
     */
    async pendingTxs(requestParameters: PendingTxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Txs> {
        const response = await this.pendingTxsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * sendTx
     */
    async sendTxRaw(requestParameters: SendTxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TxHash>> {
        if (requestParameters['txType'] == null) {
            throw new runtime.RequiredError(
                'txType',
                'Required parameter "txType" was null or undefined when calling sendTx().'
            );
        }

        if (requestParameters['txInfo'] == null) {
            throw new runtime.RequiredError(
                'txInfo',
                'Required parameter "txInfo" was null or undefined when calling sendTx().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['txType'] != null) {
            formParams.append('tx_type', requestParameters['txType'] as any);
        }

        if (requestParameters['txInfo'] != null) {
            formParams.append('tx_info', requestParameters['txInfo'] as any);
        }

        if (requestParameters['priceProtection'] != null) {
            formParams.append('price_protection', requestParameters['priceProtection'] as any);
        }

        const response = await this.request({
            path: `/api/v1/sendTx`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TxHashFromJSON(jsonValue));
    }

    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * sendTx
     */
    async sendTx(requestParameters: SendTxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TxHash> {
        const response = await this.sendTxRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * sendTxBatch
     */
    async sendTxBatchRaw(requestParameters: SendTxBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TxHashes>> {
        if (requestParameters['txTypes'] == null) {
            throw new runtime.RequiredError(
                'txTypes',
                'Required parameter "txTypes" was null or undefined when calling sendTxBatch().'
            );
        }

        if (requestParameters['txInfos'] == null) {
            throw new runtime.RequiredError(
                'txInfos',
                'Required parameter "txInfos" was null or undefined when calling sendTxBatch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['txTypes'] != null) {
            formParams.append('tx_types', requestParameters['txTypes'] as any);
        }

        if (requestParameters['txInfos'] != null) {
            formParams.append('tx_infos', requestParameters['txInfos'] as any);
        }

        const response = await this.request({
            path: `/api/v1/sendTxBatch`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TxHashesFromJSON(jsonValue));
    }

    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * sendTxBatch
     */
    async sendTxBatch(requestParameters: SendTxBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TxHashes> {
        const response = await this.sendTxBatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get transaction by hash or sequence index
     * tx
     */
    async txRaw(requestParameters: TxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnrichedTx>> {
        if (requestParameters['by'] == null) {
            throw new runtime.RequiredError(
                'by',
                'Required parameter "by" was null or undefined when calling tx().'
            );
        }

        if (requestParameters['value'] == null) {
            throw new runtime.RequiredError(
                'value',
                'Required parameter "value" was null or undefined when calling tx().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['by'] != null) {
            queryParameters['by'] = requestParameters['by'];
        }

        if (requestParameters['value'] != null) {
            queryParameters['value'] = requestParameters['value'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/tx`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnrichedTxFromJSON(jsonValue));
    }

    /**
     * Get transaction by hash or sequence index
     * tx
     */
    async tx(requestParameters: TxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnrichedTx> {
        const response = await this.txRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get L1 transaction by L1 transaction hash
     * txFromL1TxHash
     */
    async txFromL1TxHashRaw(requestParameters: TxFromL1TxHashRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnrichedTx>> {
        if (requestParameters['hash'] == null) {
            throw new runtime.RequiredError(
                'hash',
                'Required parameter "hash" was null or undefined when calling txFromL1TxHash().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['hash'] != null) {
            queryParameters['hash'] = requestParameters['hash'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/txFromL1TxHash`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnrichedTxFromJSON(jsonValue));
    }

    /**
     * Get L1 transaction by L1 transaction hash
     * txFromL1TxHash
     */
    async txFromL1TxHash(requestParameters: TxFromL1TxHashRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnrichedTx> {
        const response = await this.txFromL1TxHashRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get transactions which are already packed into blocks
     * txs
     */
    async txsRaw(requestParameters: TxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Txs>> {
        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling txs().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['index'] != null) {
            queryParameters['index'] = requestParameters['index'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/txs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TxsFromJSON(jsonValue));
    }

    /**
     * Get transactions which are already packed into blocks
     * txs
     */
    async txs(requestParameters: TxsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Txs> {
        const response = await this.txsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get withdraw history
     * withdraw_history
     */
    async withdrawHistoryRaw(requestParameters: WithdrawHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WithdrawHistory>> {
        if (requestParameters['accountIndex'] == null) {
            throw new runtime.RequiredError(
                'accountIndex',
                'Required parameter "accountIndex" was null or undefined when calling withdrawHistory().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['accountIndex'] != null) {
            queryParameters['account_index'] = requestParameters['accountIndex'];
        }

        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
        }

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/withdraw/history`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WithdrawHistoryFromJSON(jsonValue));
    }

    /**
     * Get withdraw history
     * withdraw_history
     */
    async withdrawHistory(requestParameters: WithdrawHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WithdrawHistory> {
        const response = await this.withdrawHistoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AccountPendingTxsByEnum = {
    accountIndex: 'account_index'
} as const;
export type AccountPendingTxsByEnum = typeof AccountPendingTxsByEnum[keyof typeof AccountPendingTxsByEnum];
/**
 * @export
 */
export const AccountTxsByEnum = {
    accountIndex: 'account_index'
} as const;
export type AccountTxsByEnum = typeof AccountTxsByEnum[keyof typeof AccountTxsByEnum];
/**
 * @export
 */
export const BlockTxsByEnum = {
    blockHeight: 'block_height',
    blockCommitment: 'block_commitment'
} as const;
export type BlockTxsByEnum = typeof BlockTxsByEnum[keyof typeof BlockTxsByEnum];
/**
 * @export
 */
export const DepositHistoryFilterEnum = {
    all: 'all',
    pending: 'pending',
    claimable: 'claimable'
} as const;
export type DepositHistoryFilterEnum = typeof DepositHistoryFilterEnum[keyof typeof DepositHistoryFilterEnum];
/**
 * @export
 */
export const TxByEnum = {
    hash: 'hash',
    sequenceIndex: 'sequence_index'
} as const;
export type TxByEnum = typeof TxByEnum[keyof typeof TxByEnum];
/**
 * @export
 */
export const WithdrawHistoryFilterEnum = {
    all: 'all',
    pending: 'pending',
    claimable: 'claimable'
} as const;
export type WithdrawHistoryFilterEnum = typeof WithdrawHistoryFilterEnum[keyof typeof WithdrawHistoryFilterEnum];
