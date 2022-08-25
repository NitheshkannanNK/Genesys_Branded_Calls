# BUSINESSCALLS: Command-Line Sample

This sample demonstrates how to use the Node.js SDK for performing operations with the [Businesscalls API](https://businesscalls.googleapis.com) for Verified Calls.

This application assumes that you're signed up with Verified Calls.

## PREREQUISITES

You must have the following software installed on your machine:

* [Node.js](https://nodejs.org/en/) - version 10 or above

## SETUP

Register with Business Calls:
    
Please follow [Register with Verified Calls](https://developers.google.com/business-communications/verified-calls/guides/set-up/partner#create_access_credentials) guide to retrieve JSON credential file.

## RUN THE SAMPLE

1. In a terminal, navigate to this sample's project directory.

2. Install dependencies listed in package.json with `npm install`.
    
3. Rename the downloaded service account key json file to `bv-agent-service-account-credentials.json`, place it into `/resources` directory.

4. Run the methods:
    *   Check Device Reachable API example:

            node check_device_reachable_sample.js

    *   Send Vcall Verification API example:

            node send_vcall_verification_sample.js

    *   Send Vcall State API example:

            node send_vcall_state_sample.js
