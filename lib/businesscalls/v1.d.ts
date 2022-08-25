/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace businesscalls_v1 {
    export interface Options extends GlobalOptions {
        version: 'v1';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | GoogleAuth;
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Business Calls API
     *
     *
     *
     * @example
     * const {google} = require('googleapis');
     * const businesscalls = google.businesscalls('v1');
     *
     * @namespace businesscalls
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Businesscalls
     */
    export class Businesscalls {
        context: APIRequestContext;
        v1: Resource$V1;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * The request for partner to verfiy if a device number is reachable with Google vCall feature.
     */
    export interface Schema$GoogleCommunicationsBusinesscallsV1CheckVcallDeviceReachableRequest {
        /**
         * Device number. It is in E.164 format. For example, with the US phone number +1(222)333-4444, the value would be +12223334444.
         */
        deviceNumber?: string | null;
    }
    /**
     * The response message for CheckVcallDeviceReachable.
     */
    export interface Schema$GoogleCommunicationsBusinesscallsV1CheckVcallDeviceReachableResponse {
        /**
         * Whether a device is reachable (vCall enabled).
         */
        reachability?: string | null;
    }
    /**
     * The request for partners to send the state of a business call to a device.
     */
    export interface Schema$GoogleCommunicationsBusinesscallsV1SendVcallStateRequest {
        /**
         * Verified brand number. It is in E.164 format. For example, with the US phone number +12223334444, the value would be +12223334444. If it is a short code, please do not fill in this field and use brand_code instead.
         */
        brandNumber?: string | null;
        /**
         * Partner Call state.
         */
        callState?: string | null;
        /**
         * Device number. It is in E.164 format. For example, with the US phone number +1(222)333-4444, the value would be +12223334444.
         */
        deviceNumber?: string | null;
        /**
         * Proxy (caller) number. It is in E.164 format. For example, with the US phone number +1(222)333-4444, the value would be +12223334444. If unset (empty string), the call is not using a proxy call number.
         */
        proxyNumber?: string | null;
        /**
         * Short code. If the caller number is a short code, use this field.
         */
        shortCode?: Schema$GoogleCommunicationsBusinesscallsV1ShortCode;
    }
    /**
     * The response message for SendVcallState.
     */
    export interface Schema$GoogleCommunicationsBusinesscallsV1SendVcallStateResponse {
    }
    /**
     * The request for partner to send information of an incoming business call to a device.
     */
    export interface Schema$GoogleCommunicationsBusinesscallsV1SendVcallVerificationRequest {
        /**
         * Verified brand number. It is in E.164 format. For example, with the US phone number +12223334444, the value would be +12223334444. If it is a short code, please do not fill in this field and use brand_code instead.
         */
        brandNumber?: string | null;
        /**
         * Call reason.
         */
        callReason?: string | null;
        /**
         * Device number. It is in E.164 format. For example, with the US phone number +12223334444, the value would be +12223334444.
         */
        deviceNumber?: string | null;
        /**
         * Proxy (caller) number. It is in E.164 format. For example, with the US phone number +1(222)333-4444, the value would be +12223334444. If unset (empty string), the call is not using a proxy call number.
         */
        proxyNumber?: string | null;
        /**
         * Short code. If the caller number is a short code, use this field.
         */
        shortCode?: Schema$GoogleCommunicationsBusinesscallsV1ShortCode;
    }
    /**
     * The response message for SendVcallVerification.
     */
    export interface Schema$GoogleCommunicationsBusinesscallsV1SendVcallVerificationResponse {
    }
    /**
     * Short code message.
     */
    export interface Schema$GoogleCommunicationsBusinesscallsV1ShortCode {
        /**
         * Country code number: e.g., USA is 1 or Brazil is 55.
         */
        countryCode?: string | null;
        /**
         * Short code number without country code: e.g., 10010.
         */
        shortNumber?: string | null;
    }
    export class Resource$V1 {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * businesscalls.checkVcallDeviceReachable
         * @desc RPC to verify whether a device number is enabled with vCall feature.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscalls.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscalls = google.businesscalls('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscalls.checkVcallDeviceReachable({
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "deviceNumber": "my_deviceNumber"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "reachability": "my_reachability"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias businesscalls.checkVcallDeviceReachable
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().GoogleCommunicationsBusinesscallsV1CheckVcallDeviceReachableRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        checkVcallDeviceReachable(params: Params$Resource$V1$Checkvcalldevicereachable, options: StreamMethodOptions): GaxiosPromise<Readable>;
        checkVcallDeviceReachable(params?: Params$Resource$V1$Checkvcalldevicereachable, options?: MethodOptions): GaxiosPromise<Schema$GoogleCommunicationsBusinesscallsV1CheckVcallDeviceReachableResponse>;
        checkVcallDeviceReachable(params: Params$Resource$V1$Checkvcalldevicereachable, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        checkVcallDeviceReachable(params: Params$Resource$V1$Checkvcalldevicereachable, options: MethodOptions | BodyResponseCallback<Schema$GoogleCommunicationsBusinesscallsV1CheckVcallDeviceReachableResponse>, callback: BodyResponseCallback<Schema$GoogleCommunicationsBusinesscallsV1CheckVcallDeviceReachableResponse>): void;
        checkVcallDeviceReachable(params: Params$Resource$V1$Checkvcalldevicereachable, callback: BodyResponseCallback<Schema$GoogleCommunicationsBusinesscallsV1CheckVcallDeviceReachableResponse>): void;
        checkVcallDeviceReachable(callback: BodyResponseCallback<Schema$GoogleCommunicationsBusinesscallsV1CheckVcallDeviceReachableResponse>): void;
        /**
         * businesscalls.sendVcallState
         * @desc RPC to send the call state of a business call to the device.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscalls.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscalls = google.businesscalls('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscalls.sendVcallState({
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "brandNumber": "my_brandNumber",
         *       //   "shortCode": {},
         *       //   "deviceNumber": "my_deviceNumber",
         *       //   "proxyNumber": "my_proxyNumber",
         *       //   "callState": "my_callState"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias businesscalls.sendVcallState
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().GoogleCommunicationsBusinesscallsV1SendVcallStateRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        sendVcallState(params: Params$Resource$V1$Sendvcallstate, options: StreamMethodOptions): GaxiosPromise<Readable>;
        sendVcallState(params?: Params$Resource$V1$Sendvcallstate, options?: MethodOptions): GaxiosPromise<Schema$GoogleCommunicationsBusinesscallsV1SendVcallStateResponse>;
        sendVcallState(params: Params$Resource$V1$Sendvcallstate, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        sendVcallState(params: Params$Resource$V1$Sendvcallstate, options: MethodOptions | BodyResponseCallback<Schema$GoogleCommunicationsBusinesscallsV1SendVcallStateResponse>, callback: BodyResponseCallback<Schema$GoogleCommunicationsBusinesscallsV1SendVcallStateResponse>): void;
        sendVcallState(params: Params$Resource$V1$Sendvcallstate, callback: BodyResponseCallback<Schema$GoogleCommunicationsBusinesscallsV1SendVcallStateResponse>): void;
        sendVcallState(callback: BodyResponseCallback<Schema$GoogleCommunicationsBusinesscallsV1SendVcallStateResponse>): void;
        /**
         * businesscalls.sendVcallVerification
         * @desc RPC to send metadata of an incoming business call to the device.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscalls.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscalls = google.businesscalls('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscalls.sendVcallVerification({
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "brandNumber": "my_brandNumber",
         *       //   "shortCode": {},
         *       //   "deviceNumber": "my_deviceNumber",
         *       //   "proxyNumber": "my_proxyNumber",
         *       //   "callReason": "my_callReason"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias businesscalls.sendVcallVerification
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().GoogleCommunicationsBusinesscallsV1SendVcallVerificationRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        sendVcallVerification(params: Params$Resource$V1$Sendvcallverification, options: StreamMethodOptions): GaxiosPromise<Readable>;
        sendVcallVerification(params?: Params$Resource$V1$Sendvcallverification, options?: MethodOptions): GaxiosPromise<Schema$GoogleCommunicationsBusinesscallsV1SendVcallVerificationResponse>;
        sendVcallVerification(params: Params$Resource$V1$Sendvcallverification, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        sendVcallVerification(params: Params$Resource$V1$Sendvcallverification, options: MethodOptions | BodyResponseCallback<Schema$GoogleCommunicationsBusinesscallsV1SendVcallVerificationResponse>, callback: BodyResponseCallback<Schema$GoogleCommunicationsBusinesscallsV1SendVcallVerificationResponse>): void;
        sendVcallVerification(params: Params$Resource$V1$Sendvcallverification, callback: BodyResponseCallback<Schema$GoogleCommunicationsBusinesscallsV1SendVcallVerificationResponse>): void;
        sendVcallVerification(callback: BodyResponseCallback<Schema$GoogleCommunicationsBusinesscallsV1SendVcallVerificationResponse>): void;
    }
    export interface Params$Resource$V1$Checkvcalldevicereachable extends StandardParameters {
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCommunicationsBusinesscallsV1CheckVcallDeviceReachableRequest;
    }
    export interface Params$Resource$V1$Sendvcallstate extends StandardParameters {
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCommunicationsBusinesscallsV1SendVcallStateRequest;
    }
    export interface Params$Resource$V1$Sendvcallverification extends StandardParameters {
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCommunicationsBusinesscallsV1SendVcallVerificationRequest;
    }
    export {};
}
