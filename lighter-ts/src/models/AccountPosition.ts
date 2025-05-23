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
 * @interface AccountPosition
 */
export interface AccountPosition {
    /**
     * 
     * @type {number}
     * @memberof AccountPosition
     */
    marketId: number;
    /**
     * 
     * @type {string}
     * @memberof AccountPosition
     */
    symbol: string;
    /**
     * 
     * @type {string}
     * @memberof AccountPosition
     */
    initialMarginFraction: string;
    /**
     * 
     * @type {number}
     * @memberof AccountPosition
     */
    openOrderCount: number;
    /**
     * 
     * @type {number}
     * @memberof AccountPosition
     */
    pendingOrderCount: number;
    /**
     * 
     * @type {number}
     * @memberof AccountPosition
     */
    sign: number;
    /**
     * 
     * @type {string}
     * @memberof AccountPosition
     */
    position: string;
    /**
     * 
     * @type {string}
     * @memberof AccountPosition
     */
    avgEntryPrice: string;
    /**
     * 
     * @type {string}
     * @memberof AccountPosition
     */
    positionValue: string;
    /**
     * 
     * @type {string}
     * @memberof AccountPosition
     */
    unrealizedPnl: string;
    /**
     * 
     * @type {string}
     * @memberof AccountPosition
     */
    realizedPnl: string;
}

/**
 * Check if a given object implements the AccountPosition interface.
 */
export function instanceOfAccountPosition(value: object): value is AccountPosition {
    if (!('marketId' in value) || value['marketId'] === undefined) return false;
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('initialMarginFraction' in value) || value['initialMarginFraction'] === undefined) return false;
    if (!('openOrderCount' in value) || value['openOrderCount'] === undefined) return false;
    if (!('pendingOrderCount' in value) || value['pendingOrderCount'] === undefined) return false;
    if (!('sign' in value) || value['sign'] === undefined) return false;
    if (!('position' in value) || value['position'] === undefined) return false;
    if (!('avgEntryPrice' in value) || value['avgEntryPrice'] === undefined) return false;
    if (!('positionValue' in value) || value['positionValue'] === undefined) return false;
    if (!('unrealizedPnl' in value) || value['unrealizedPnl'] === undefined) return false;
    if (!('realizedPnl' in value) || value['realizedPnl'] === undefined) return false;
    return true;
}

export function AccountPositionFromJSON(json: any): AccountPosition {
    return AccountPositionFromJSONTyped(json, false);
}

export function AccountPositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountPosition {
    if (json == null) {
        return json;
    }
    return {
        
        'marketId': json['market_id'],
        'symbol': json['symbol'],
        'initialMarginFraction': json['initial_margin_fraction'],
        'openOrderCount': json['open_order_count'],
        'pendingOrderCount': json['pending_order_count'],
        'sign': json['sign'],
        'position': json['position'],
        'avgEntryPrice': json['avg_entry_price'],
        'positionValue': json['position_value'],
        'unrealizedPnl': json['unrealized_pnl'],
        'realizedPnl': json['realized_pnl'],
    };
}

export function AccountPositionToJSON(json: any): AccountPosition {
    return AccountPositionToJSONTyped(json, false);
}

export function AccountPositionToJSONTyped(value?: AccountPosition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'market_id': value['marketId'],
        'symbol': value['symbol'],
        'initial_margin_fraction': value['initialMarginFraction'],
        'open_order_count': value['openOrderCount'],
        'pending_order_count': value['pendingOrderCount'],
        'sign': value['sign'],
        'position': value['position'],
        'avg_entry_price': value['avgEntryPrice'],
        'position_value': value['positionValue'],
        'unrealized_pnl': value['unrealizedPnl'],
        'realized_pnl': value['realizedPnl'],
    };
}

