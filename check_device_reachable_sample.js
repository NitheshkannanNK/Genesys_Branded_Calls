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
const {printHeader} = require('./shared_utils');

main();

async function main() {
  // Please set valid device phone number before running the example.
  //const deviceNumber = '+11231231234';
  //const deviceNumber = '+918056138960';
  const deviceNumber = '+916383220539';

  printHeader('Check Device Reachable');

  const paramsObject = {
    deviceNumber: deviceNumber,
  };
  console.dir(paramsObject);

  const deviceReachability = await checkDeviceReachable(paramsObject);
  
  console.dir(deviceReachability);
}

/**
 * Check whether device is vcall reachable. 
 * @param {string} paramsObject The params object of the request.
 * @return {object} Returns a promise resolving to the device reachability object.
 */
function checkDeviceReachable(paramsObject) {
  return new Promise((resolve, reject) => {
    const apiConnector = apiHelper.init();
    apiConnector.then((apiObject) => {
      const params = {
        auth: apiObject.authClient,
        resource: paramsObject,
      };

      apiObject.businessCallsApi.v1.checkVcallDeviceReachable(params, {}, (err, response) => {
        if (err !== undefined && err !== null) {
          reject(err);
        } else {
          resolve(response.data);
        }
      });
    });
  });
}

module.exports = {checkDeviceReachable};