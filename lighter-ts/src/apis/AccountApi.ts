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
  AccountApiKeys,
  AccountPnL,
  Accounts,
  DetailedAccounts,
  FeeBucket,
  IsWhitelisted,
  PublicPools,
  ResultCode,
  SubAccounts,
} from '../models/index';
import {
    AccountApiKeysFromJSON,
    AccountApiKeysToJSON,
    AccountPnLFromJSON,
    AccountPnLToJSON,
    AccountsFromJSON,
    AccountsToJSON,
    DetailedAccountsFromJSON,
    DetailedAccountsToJSON,
    FeeBucketFromJSON,
    FeeBucketToJSON,
    IsWhitelistedFromJSON,
    IsWhitelistedToJSON,
    PublicPoolsFromJSON,
    PublicPoolsToJSON,
    ResultCodeFromJSON,
    ResultCodeToJSON,
    SubAccountsFromJSON,
    SubAccountsToJSON,
} from '../models/index';

export interface AccountRequest {
    by: AccountByEnum;
    value: string;
}

export interface AccountsRequest {
    limit: number;
    index?: number;
    sort?: AccountsSortEnum;
}

export interface AccountsByL1AddressRequest {
    l1Address: string;
}

export interface ApikeysRequest {
    accountIndex: number;
    apiKeyIndex: number;
}

export interface FeeBucketRequest {
    accountIndex: number;
}

export interface IsWhitelistedRequest {
    l1Address: string;
}

export interface PnlRequest {
    by: PnlByEnum;
    value: string;
    resolution: PnlResolutionEnum;
    startTimestamp: number;
    endTimestamp: number;
    countBack: number;
    ignoreTransfers?: boolean;
}

export interface PublicPoolsRequest {
    index: number;
    limit: number;
    filter?: PublicPoolsFilterEnum;
    accountIndex?: number;
}

/**
 * AccountApi - interface
 * 
 * @export
 * @interface AccountApiInterface
 */
export interface AccountApiInterface {
    /**
     * Get account by account\'s index. <br>More details about account index: [Account Index](https://apidocs.lighter.xyz/docs/account-index)<hr>**Response Description:**<br><br>1) **Status:** 1 is active 0 is inactive.<br>2) **Collateral:** The amount of collateral in the account.<hr>**Position Details Description:**<br>1) **OOC:** Open order count in that market.<br>2) **Sign:** 1 for Long, -1 for Short.<br>3) **Position:** The amount of position in that market.<br>4) **Avg Entry Price:** The average entry price of the position.<br>5) **Position Value:** The value of the position.<br>6) **Unrealized PnL:** The unrealized profit and loss of the position.<br>7) **Realized PnL:** The realized profit and loss of the position.
     * @summary account
     * @param {'index' | 'l1_address'} by 
     * @param {string} value 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountRaw(requestParameters: AccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DetailedAccounts>>;

    /**
     * Get account by account\'s index. <br>More details about account index: [Account Index](https://apidocs.lighter.xyz/docs/account-index)<hr>**Response Description:**<br><br>1) **Status:** 1 is active 0 is inactive.<br>2) **Collateral:** The amount of collateral in the account.<hr>**Position Details Description:**<br>1) **OOC:** Open order count in that market.<br>2) **Sign:** 1 for Long, -1 for Short.<br>3) **Position:** The amount of position in that market.<br>4) **Avg Entry Price:** The average entry price of the position.<br>5) **Position Value:** The value of the position.<br>6) **Unrealized PnL:** The unrealized profit and loss of the position.<br>7) **Realized PnL:** The realized profit and loss of the position.
     * account
     */
    account(requestParameters: AccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DetailedAccounts>;

    /**
     * Get accounts returns accounts by account index
     * @summary accounts
     * @param {number} limit 
     * @param {number} [index] 
     * @param {'asc' | 'desc'} [sort] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountsRaw(requestParameters: AccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Accounts>>;

    /**
     * Get accounts returns accounts by account index
     * accounts
     */
    accounts(requestParameters: AccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Accounts>;

    /**
     * Get accounts by l1_address returns all accounts associated with the given L1 address
     * @summary accountsByL1Address
     * @param {string} l1Address 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountsByL1AddressRaw(requestParameters: AccountsByL1AddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubAccounts>>;

    /**
     * Get accounts by l1_address returns all accounts associated with the given L1 address
     * accountsByL1Address
     */
    accountsByL1Address(requestParameters: AccountsByL1AddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubAccounts>;

    /**
     * Get account api key
     * @summary apikeys
     * @param {number} accountIndex 
     * @param {number} apiKeyIndex 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    apikeysRaw(requestParameters: ApikeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountApiKeys>>;

    /**
     * Get account api key
     * apikeys
     */
    apikeys(requestParameters: ApikeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountApiKeys>;

    /**
     * Get account fee bucket
     * @summary feeBucket
     * @param {number} accountIndex 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    feeBucketRaw(requestParameters: FeeBucketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeeBucket>>;

    /**
     * Get account fee bucket
     * feeBucket
     */
    feeBucket(requestParameters: FeeBucketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeeBucket>;

    /**
     * Get is account whitelisted
     * @summary isWhitelisted
     * @param {string} l1Address 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    isWhitelistedRaw(requestParameters: IsWhitelistedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IsWhitelisted>>;

    /**
     * Get is account whitelisted
     * isWhitelisted
     */
    isWhitelisted(requestParameters: IsWhitelistedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IsWhitelisted>;

    /**
     * Get account PnL chart
     * @summary pnl
     * @param {'index'} by 
     * @param {string} value 
     * @param {'1m' | '5m' | '15m' | '1h' | '4h' | '1d'} resolution 
     * @param {number} startTimestamp 
     * @param {number} endTimestamp 
     * @param {number} countBack 
     * @param {boolean} [ignoreTransfers] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    pnlRaw(requestParameters: PnlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountPnL>>;

    /**
     * Get account PnL chart
     * pnl
     */
    pnl(requestParameters: PnlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountPnL>;

    /**
     * Get public pools
     * @summary publicPools
     * @param {number} index 
     * @param {number} limit 
     * @param {'all' | 'user' | 'protocol' | 'account_index'} [filter] 
     * @param {number} [accountIndex] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    publicPoolsRaw(requestParameters: PublicPoolsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublicPools>>;

    /**
     * Get public pools
     * publicPools
     */
    publicPools(requestParameters: PublicPoolsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublicPools>;

}

/**
 * 
 */
export class AccountApi extends runtime.BaseAPI implements AccountApiInterface {

    /**
     * Get account by account\'s index. <br>More details about account index: [Account Index](https://apidocs.lighter.xyz/docs/account-index)<hr>**Response Description:**<br><br>1) **Status:** 1 is active 0 is inactive.<br>2) **Collateral:** The amount of collateral in the account.<hr>**Position Details Description:**<br>1) **OOC:** Open order count in that market.<br>2) **Sign:** 1 for Long, -1 for Short.<br>3) **Position:** The amount of position in that market.<br>4) **Avg Entry Price:** The average entry price of the position.<br>5) **Position Value:** The value of the position.<br>6) **Unrealized PnL:** The unrealized profit and loss of the position.<br>7) **Realized PnL:** The realized profit and loss of the position.
     * account
     */
    async accountRaw(requestParameters: AccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DetailedAccounts>> {
        if (requestParameters['by'] == null) {
            throw new runtime.RequiredError(
                'by',
                'Required parameter "by" was null or undefined when calling account().'
            );
        }

        if (requestParameters['value'] == null) {
            throw new runtime.RequiredError(
                'value',
                'Required parameter "value" was null or undefined when calling account().'
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
            path: `/api/v1/account`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DetailedAccountsFromJSON(jsonValue));
    }

    /**
     * Get account by account\'s index. <br>More details about account index: [Account Index](https://apidocs.lighter.xyz/docs/account-index)<hr>**Response Description:**<br><br>1) **Status:** 1 is active 0 is inactive.<br>2) **Collateral:** The amount of collateral in the account.<hr>**Position Details Description:**<br>1) **OOC:** Open order count in that market.<br>2) **Sign:** 1 for Long, -1 for Short.<br>3) **Position:** The amount of position in that market.<br>4) **Avg Entry Price:** The average entry price of the position.<br>5) **Position Value:** The value of the position.<br>6) **Unrealized PnL:** The unrealized profit and loss of the position.<br>7) **Realized PnL:** The realized profit and loss of the position.
     * account
     */
    async account(requestParameters: AccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DetailedAccounts> {
        const response = await this.accountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get accounts returns accounts by account index
     * accounts
     */
    async accountsRaw(requestParameters: AccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Accounts>> {
        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling accounts().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['index'] != null) {
            queryParameters['index'] = requestParameters['index'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/accounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountsFromJSON(jsonValue));
    }

    /**
     * Get accounts returns accounts by account index
     * accounts
     */
    async accounts(requestParameters: AccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Accounts> {
        const response = await this.accountsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get accounts by l1_address returns all accounts associated with the given L1 address
     * accountsByL1Address
     */
    async accountsByL1AddressRaw(requestParameters: AccountsByL1AddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubAccounts>> {
        if (requestParameters['l1Address'] == null) {
            throw new runtime.RequiredError(
                'l1Address',
                'Required parameter "l1Address" was null or undefined when calling accountsByL1Address().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['l1Address'] != null) {
            queryParameters['l1_address'] = requestParameters['l1Address'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/accountsByL1Address`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubAccountsFromJSON(jsonValue));
    }

    /**
     * Get accounts by l1_address returns all accounts associated with the given L1 address
     * accountsByL1Address
     */
    async accountsByL1Address(requestParameters: AccountsByL1AddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubAccounts> {
        const response = await this.accountsByL1AddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get account api key
     * apikeys
     */
    async apikeysRaw(requestParameters: ApikeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountApiKeys>> {
        if (requestParameters['accountIndex'] == null) {
            throw new runtime.RequiredError(
                'accountIndex',
                'Required parameter "accountIndex" was null or undefined when calling apikeys().'
            );
        }

        if (requestParameters['apiKeyIndex'] == null) {
            throw new runtime.RequiredError(
                'apiKeyIndex',
                'Required parameter "apiKeyIndex" was null or undefined when calling apikeys().'
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
            path: `/api/v1/apikeys`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountApiKeysFromJSON(jsonValue));
    }

    /**
     * Get account api key
     * apikeys
     */
    async apikeys(requestParameters: ApikeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountApiKeys> {
        const response = await this.apikeysRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get account fee bucket
     * feeBucket
     */
    async feeBucketRaw(requestParameters: FeeBucketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeeBucket>> {
        if (requestParameters['accountIndex'] == null) {
            throw new runtime.RequiredError(
                'accountIndex',
                'Required parameter "accountIndex" was null or undefined when calling feeBucket().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['accountIndex'] != null) {
            queryParameters['account_index'] = requestParameters['accountIndex'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/feeBucket`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeeBucketFromJSON(jsonValue));
    }

    /**
     * Get account fee bucket
     * feeBucket
     */
    async feeBucket(requestParameters: FeeBucketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeeBucket> {
        const response = await this.feeBucketRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get is account whitelisted
     * isWhitelisted
     */
    async isWhitelistedRaw(requestParameters: IsWhitelistedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IsWhitelisted>> {
        if (requestParameters['l1Address'] == null) {
            throw new runtime.RequiredError(
                'l1Address',
                'Required parameter "l1Address" was null or undefined when calling isWhitelisted().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['l1Address'] != null) {
            queryParameters['l1_address'] = requestParameters['l1Address'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/isWhitelisted`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IsWhitelistedFromJSON(jsonValue));
    }

    /**
     * Get is account whitelisted
     * isWhitelisted
     */
    async isWhitelisted(requestParameters: IsWhitelistedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IsWhitelisted> {
        const response = await this.isWhitelistedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get account PnL chart
     * pnl
     */
    async pnlRaw(requestParameters: PnlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountPnL>> {
        if (requestParameters['by'] == null) {
            throw new runtime.RequiredError(
                'by',
                'Required parameter "by" was null or undefined when calling pnl().'
            );
        }

        if (requestParameters['value'] == null) {
            throw new runtime.RequiredError(
                'value',
                'Required parameter "value" was null or undefined when calling pnl().'
            );
        }

        if (requestParameters['resolution'] == null) {
            throw new runtime.RequiredError(
                'resolution',
                'Required parameter "resolution" was null or undefined when calling pnl().'
            );
        }

        if (requestParameters['startTimestamp'] == null) {
            throw new runtime.RequiredError(
                'startTimestamp',
                'Required parameter "startTimestamp" was null or undefined when calling pnl().'
            );
        }

        if (requestParameters['endTimestamp'] == null) {
            throw new runtime.RequiredError(
                'endTimestamp',
                'Required parameter "endTimestamp" was null or undefined when calling pnl().'
            );
        }

        if (requestParameters['countBack'] == null) {
            throw new runtime.RequiredError(
                'countBack',
                'Required parameter "countBack" was null or undefined when calling pnl().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['by'] != null) {
            queryParameters['by'] = requestParameters['by'];
        }

        if (requestParameters['value'] != null) {
            queryParameters['value'] = requestParameters['value'];
        }

        if (requestParameters['resolution'] != null) {
            queryParameters['resolution'] = requestParameters['resolution'];
        }

        if (requestParameters['startTimestamp'] != null) {
            queryParameters['start_timestamp'] = requestParameters['startTimestamp'];
        }

        if (requestParameters['endTimestamp'] != null) {
            queryParameters['end_timestamp'] = requestParameters['endTimestamp'];
        }

        if (requestParameters['countBack'] != null) {
            queryParameters['count_back'] = requestParameters['countBack'];
        }

        if (requestParameters['ignoreTransfers'] != null) {
            queryParameters['ignore_transfers'] = requestParameters['ignoreTransfers'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/pnl`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountPnLFromJSON(jsonValue));
    }

    /**
     * Get account PnL chart
     * pnl
     */
    async pnl(requestParameters: PnlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountPnL> {
        const response = await this.pnlRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get public pools
     * publicPools
     */
    async publicPoolsRaw(requestParameters: PublicPoolsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublicPools>> {
        if (requestParameters['index'] == null) {
            throw new runtime.RequiredError(
                'index',
                'Required parameter "index" was null or undefined when calling publicPools().'
            );
        }

        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling publicPools().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['index'] != null) {
            queryParameters['index'] = requestParameters['index'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['accountIndex'] != null) {
            queryParameters['account_index'] = requestParameters['accountIndex'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/publicPools`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PublicPoolsFromJSON(jsonValue));
    }

    /**
     * Get public pools
     * publicPools
     */
    async publicPools(requestParameters: PublicPoolsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublicPools> {
        const response = await this.publicPoolsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AccountByEnum = {
    index: 'index',
    l1Address: 'l1_address'
} as const;
export type AccountByEnum = typeof AccountByEnum[keyof typeof AccountByEnum];
/**
 * @export
 */
export const AccountsSortEnum = {
    asc: 'asc',
    desc: 'desc'
} as const;
export type AccountsSortEnum = typeof AccountsSortEnum[keyof typeof AccountsSortEnum];
/**
 * @export
 */
export const PnlByEnum = {
    index: 'index'
} as const;
export type PnlByEnum = typeof PnlByEnum[keyof typeof PnlByEnum];
/**
 * @export
 */
export const PnlResolutionEnum = {
    _1m: '1m',
    _5m: '5m',
    _15m: '15m',
    _1h: '1h',
    _4h: '4h',
    _1d: '1d'
} as const;
export type PnlResolutionEnum = typeof PnlResolutionEnum[keyof typeof PnlResolutionEnum];
/**
 * @export
 */
export const PublicPoolsFilterEnum = {
    all: 'all',
    user: 'user',
    protocol: 'protocol',
    accountIndex: 'account_index'
} as const;
export type PublicPoolsFilterEnum = typeof PublicPoolsFilterEnum[keyof typeof PublicPoolsFilterEnum];
