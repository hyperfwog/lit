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
 * @interface ReqGetDepositHistory
 */
export interface ReqGetDepositHistory {
    /**
     * 
     * @type {string}
     * @memberof ReqGetDepositHistory
     */
    l1Address: string;
    /**
     * 
     * @type {string}
     * @memberof ReqGetDepositHistory
     */
    cursor?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqGetDepositHistory
     */
    filter?: ReqGetDepositHistoryFilterEnum;
}


/**
 * @export
 */
export const ReqGetDepositHistoryFilterEnum = {
    all: 'all',
    pending: 'pending',
    claimable: 'claimable'
} as const;
export type ReqGetDepositHistoryFilterEnum = typeof ReqGetDepositHistoryFilterEnum[keyof typeof ReqGetDepositHistoryFilterEnum];


/**
 * Check if a given object implements the ReqGetDepositHistory interface.
 */
export function instanceOfReqGetDepositHistory(value: object): value is ReqGetDepositHistory {
    if (!('l1Address' in value) || value['l1Address'] === undefined) return false;
    return true;
}

export function ReqGetDepositHistoryFromJSON(json: any): ReqGetDepositHistory {
    return ReqGetDepositHistoryFromJSONTyped(json, false);
}

export function ReqGetDepositHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqGetDepositHistory {
    if (json == null) {
        return json;
    }
    return {
        
        'l1Address': json['l1_address'],
        'cursor': json['cursor'] == null ? undefined : json['cursor'],
        'filter': json['filter'] == null ? undefined : json['filter'],
    };
}

export function ReqGetDepositHistoryToJSON(json: any): ReqGetDepositHistory {
    return ReqGetDepositHistoryToJSONTyped(json, false);
}

export function ReqGetDepositHistoryToJSONTyped(value?: ReqGetDepositHistory | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'l1_address': value['l1Address'],
        'cursor': value['cursor'],
        'filter': value['filter'],
    };
}

