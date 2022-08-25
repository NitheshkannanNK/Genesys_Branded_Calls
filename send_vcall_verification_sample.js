#!/usr/bin/env node

// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const apiHelper = require('./lib/api_helper');
const {delay, printHeader} = require('./shared_utils');

main();

async function main() {
  // Please set valid brand phone number, device phone number and call reason before running the example.
  const deviceNumber = '+916383220539';
  const callReason = 'Groceries Delivery Call';

  // SendVcallVerification API supports sending verification with brand phone number in E164
  // format or short code format. The below two examples are mutually exclusive.
  // Please use the corresponding example to send verification.

  // Normal E164 Brand Phone Number Example.
  printHeader('Send Vcall Verification with E.164 Brand Number');
  const brandNumber = '+918056138960';
  sendVcallVerificationWithE164BrandNumber(brandNumber, deviceNumber, callReason);

  await delay(3000);

  // Short Code Example.
  printHeader('Send Vcall Verification with Short Code Number');
  const shortCodeNumber = '166';
  const shortCodeCountryCode = '55';
  //sendVcallVerificationWitShortCode(shortCodeNumber, shortCodeCountryCode, deviceNumber, callReason);
}

/**
 * Send vcall verification with E.164 brand number.
 * @param {string} brandNumber The brand number which initiates the call.
 * @param {string} deviceNumber The device number which receives the call.
 * @param {string} callReason The call reason.
 */
function sendVcallVerificationWithE164BrandNumber(brandNumber, deviceNumber, callReason) {
  const paramsObject = {
    brandNumber: brandNumber,
    deviceNumber: deviceNumber,
    callReason: callReason
  };

  console.dir(paramsObject);

  sendVcallVerification(paramsObject)
    .catch(function(err) {
      console.log(err);
    });
}

/**
 * Send vcall verification with short code number.
 * @param {string} shortCodeNumber Short code number without country code.
 * @param {string} shortCodeCountryCode Country code number.
 * @param {string} deviceNumber The device number which is going to receive the call.
 * @param {string} callReason The call reason.
 */
function sendVcallVerificationWitShortCode(shortCodeNumber, shortCodeCountryCode, deviceNumber, callReason) {
  const paramsObject = {
    shortCode: {
      shortNumber: shortCodeNumber,
      countryCode: shortCodeCountryCode
    },
    deviceNumber: deviceNumber,
    callReason: callReason
  };

  console.dir(paramsObject);

  sendVcallVerification(paramsObject)
    .catch(function(err) {
      console.log(err);
    });
}

/**
 * Send vcall verification with short code number.
 * @param {string} paramsObject The params object of the request.
 * @return {object} Returns a promise resolving to the response object.
 */
function sendVcallVerification(paramsObject) {
  return new Promise((resolve, reject) => {
    const apiConnector = apiHelper.init();
    apiConnector.then((apiObject) => {
      const params = {
        auth: apiObject.authClient,
        resource: paramsObject,
      };

      apiObject.businessCallsApi.v1.sendVcallVerification(params, {}, (err, response) => {
        if (err !== undefined && err !== null) {
          reject(err);
        } else {
          console.dir(response.data);
          resolve(response.data);
        }
      });
    });
  });
}


module.exports = {sendVcallVerification};