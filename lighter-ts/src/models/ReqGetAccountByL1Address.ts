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
 * @interface ReqGetAccountByL1Address
 */
export interface ReqGetAccountByL1Address {
    /**
     * 
     * @type {string}
     * @memberof ReqGetAccountByL1Address
     */
    l1Address: string;
}

/**
 * Check if a given object implements the ReqGetAccountByL1Address interface.
 */
export function instanceOfReqGetAccountByL1Address(value: object): value is ReqGetAccountByL1Address {
    if (!('l1Address' in value) || value['l1Address'] === undefined) return false;
    return true;
}

export function ReqGetAccountByL1AddressFromJSON(json: any): ReqGetAccountByL1Address {
    return ReqGetAccountByL1AddressFromJSONTyped(json, false);
}

export function ReqGetAccountByL1AddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqGetAccountByL1Address {
    if (json == null) {
        return json;
    }
    return {
        
        'l1Address': json['l1_address'],
    };
}

export function ReqGetAccountByL1AddressToJSON(json: any): ReqGetAccountByL1Address {
    return ReqGetAccountByL1AddressToJSONTyped(json, false);
}

export function ReqGetAccountByL1AddressToJSONTyped(value?: ReqGetAccountByL1Address | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'l1_address': value['l1Address'],
    };
}

