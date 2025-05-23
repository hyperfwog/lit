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
  Candlesticks,
  Fundings,
  ResultCode,
} from '../models/index';
import {
    CandlesticksFromJSON,
    CandlesticksToJSON,
    FundingsFromJSON,
    FundingsToJSON,
    ResultCodeFromJSON,
    ResultCodeToJSON,
} from '../models/index';

export interface CandlesticksRequest {
    marketId: number;
    resolution: CandlesticksResolutionEnum;
    startTimestamp: number;
    endTimestamp: number;
    countBack: number;
    setTimestampToEnd?: boolean;
}

export interface FundingsRequest {
    marketId: number;
    resolution: FundingsResolutionEnum;
    startTimestamp: number;
    endTimestamp: number;
    countBack: number;
}

/**
 * CandlestickApi - interface
 * 
 * @export
 * @interface CandlestickApiInterface
 */
export interface CandlestickApiInterface {
    /**
     * Get candlesticks
     * @summary candlesticks
     * @param {number} marketId 
     * @param {'1m' | '5m' | '15m' | '1h' | '4h' | '1d'} resolution 
     * @param {number} startTimestamp 
     * @param {number} endTimestamp 
     * @param {number} countBack 
     * @param {boolean} [setTimestampToEnd] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CandlestickApiInterface
     */
    candlesticksRaw(requestParameters: CandlesticksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Candlesticks>>;

    /**
     * Get candlesticks
     * candlesticks
     */
    candlesticks(requestParameters: CandlesticksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Candlesticks>;

    /**
     * Get fundings
     * @summary fundings
     * @param {number} marketId 
     * @param {'1h'} resolution 
     * @param {number} startTimestamp 
     * @param {number} endTimestamp 
     * @param {number} countBack 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CandlestickApiInterface
     */
    fundingsRaw(requestParameters: FundingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Fundings>>;

    /**
     * Get fundings
     * fundings
     */
    fundings(requestParameters: FundingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Fundings>;

}

/**
 * 
 */
export class CandlestickApi extends runtime.BaseAPI implements CandlestickApiInterface {

    /**
     * Get candlesticks
     * candlesticks
     */
    async candlesticksRaw(requestParameters: CandlesticksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Candlesticks>> {
        if (requestParameters['marketId'] == null) {
            throw new runtime.RequiredError(
                'marketId',
                'Required parameter "marketId" was null or undefined when calling candlesticks().'
            );
        }

        if (requestParameters['resolution'] == null) {
            throw new runtime.RequiredError(
                'resolution',
                'Required parameter "resolution" was null or undefined when calling candlesticks().'
            );
        }

        if (requestParameters['startTimestamp'] == null) {
            throw new runtime.RequiredError(
                'startTimestamp',
                'Required parameter "startTimestamp" was null or undefined when calling candlesticks().'
            );
        }

        if (requestParameters['endTimestamp'] == null) {
            throw new runtime.RequiredError(
                'endTimestamp',
                'Required parameter "endTimestamp" was null or undefined when calling candlesticks().'
            );
        }

        if (requestParameters['countBack'] == null) {
            throw new runtime.RequiredError(
                'countBack',
                'Required parameter "countBack" was null or undefined when calling candlesticks().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['marketId'] != null) {
            queryParameters['market_id'] = requestParameters['marketId'];
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

        if (requestParameters['setTimestampToEnd'] != null) {
            queryParameters['set_timestamp_to_end'] = requestParameters['setTimestampToEnd'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/candlesticks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CandlesticksFromJSON(jsonValue));
    }

    /**
     * Get candlesticks
     * candlesticks
     */
    async candlesticks(requestParameters: CandlesticksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Candlesticks> {
        const response = await this.candlesticksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get fundings
     * fundings
     */
    async fundingsRaw(requestParameters: FundingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Fundings>> {
        if (requestParameters['marketId'] == null) {
            throw new runtime.RequiredError(
                'marketId',
                'Required parameter "marketId" was null or undefined when calling fundings().'
            );
        }

        if (requestParameters['resolution'] == null) {
            throw new runtime.RequiredError(
                'resolution',
                'Required parameter "resolution" was null or undefined when calling fundings().'
            );
        }

        if (requestParameters['startTimestamp'] == null) {
            throw new runtime.RequiredError(
                'startTimestamp',
                'Required parameter "startTimestamp" was null or undefined when calling fundings().'
            );
        }

        if (requestParameters['endTimestamp'] == null) {
            throw new runtime.RequiredError(
                'endTimestamp',
                'Required parameter "endTimestamp" was null or undefined when calling fundings().'
            );
        }

        if (requestParameters['countBack'] == null) {
            throw new runtime.RequiredError(
                'countBack',
                'Required parameter "countBack" was null or undefined when calling fundings().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['marketId'] != null) {
            queryParameters['market_id'] = requestParameters['marketId'];
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

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/fundings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FundingsFromJSON(jsonValue));
    }

    /**
     * Get fundings
     * fundings
     */
    async fundings(requestParameters: FundingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Fundings> {
        const response = await this.fundingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CandlesticksResolutionEnum = {
    _1m: '1m',
    _5m: '5m',
    _15m: '15m',
    _1h: '1h',
    _4h: '4h',
    _1d: '1d'
} as const;
export type CandlesticksResolutionEnum = typeof CandlesticksResolutionEnum[keyof typeof CandlesticksResolutionEnum];
/**
 * @export
 */
export const FundingsResolutionEnum = {
    _1h: '1h'
} as const;
export type FundingsResolutionEnum = typeof FundingsResolutionEnum[keyof typeof FundingsResolutionEnum];
