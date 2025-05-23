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
 * @interface IsWhitelisted
 */
export interface IsWhitelisted {
    /**
     * 
     * @type {number}
     * @memberof IsWhitelisted
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof IsWhitelisted
     */
    message?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IsWhitelisted
     */
    whitelisted: boolean;
    /**
     * 
     * @type {string}
     * @memberof IsWhitelisted
     */
    depositAmountLeft: string;
}

/**
 * Check if a given object implements the IsWhitelisted interface.
 */
export function instanceOfIsWhitelisted(value: object): value is IsWhitelisted {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('whitelisted' in value) || value['whitelisted'] === undefined) return false;
    if (!('depositAmountLeft' in value) || value['depositAmountLeft'] === undefined) return false;
    return true;
}

export function IsWhitelistedFromJSON(json: any): IsWhitelisted {
    return IsWhitelistedFromJSONTyped(json, false);
}

export function IsWhitelistedFromJSONTyped(json: any, ignoreDiscriminator: boolean): IsWhitelisted {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'message': json['message'] == null ? undefined : json['message'],
        'whitelisted': json['whitelisted'],
        'depositAmountLeft': json['deposit_amount_left'],
    };
}

export function IsWhitelistedToJSON(json: any): IsWhitelisted {
    return IsWhitelistedToJSONTyped(json, false);
}

export function IsWhitelistedToJSONTyped(value?: IsWhitelisted | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'message': value['message'],
        'whitelisted': value['whitelisted'],
        'deposit_amount_left': value['depositAmountLeft'],
    };
}

