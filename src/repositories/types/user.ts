/* tslint:disable */
/* eslint-disable */
/**
 * API
 * internal_api
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * user id
     * @type {number}
     * @memberof User
     */
    id: number;
    /**
     * user name
     * @type {string}
     * @memberof User
     */
    name: string;
    /**
     * user role
     * @type {string}
     * @memberof User
     */
    role: UserRole;
}

/**
    * @export
    * @enum {string}
    */
export enum UserRole {
    admin = 'admin',
    general = 'general'
}


