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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ReqGetOrderBookOrders
 */
export interface ReqGetOrderBookOrders {
    /**
     * 
     * @type {number}
     * @memberof ReqGetOrderBookOrders
     */
    marketId: number;
    /**
     * 
     * @type {number}
     * @memberof ReqGetOrderBookOrders
     */
    limit: number;
}

/**
 * Check if a given object implements the ReqGetOrderBookOrders interface.
 */
export function instanceOfReqGetOrderBookOrders(value: object): value is ReqGetOrderBookOrders {
    if (!('marketId' in value) || value['marketId'] === undefined) return false;
    if (!('limit' in value) || value['limit'] === undefined) return false;
    return true;
}

export function ReqGetOrderBookOrdersFromJSON(json: any): ReqGetOrderBookOrders {
    return ReqGetOrderBookOrdersFromJSONTyped(json, false);
}

export function ReqGetOrderBookOrdersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqGetOrderBookOrders {
    if (json == null) {
        return json;
    }
    return {
        
        'marketId': json['market_id'],
        'limit': json['limit'],
    };
}

export function ReqGetOrderBookOrdersToJSON(json: any): ReqGetOrderBookOrders {
    return ReqGetOrderBookOrdersToJSONTyped(json, false);
}

export function ReqGetOrderBookOrdersToJSONTyped(value?: ReqGetOrderBookOrders | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'market_id': value['marketId'],
        'limit': value['limit'],
    };
}

