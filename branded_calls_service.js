'use strict';

function checkingReachablity(param)
{
    checkDeviceReachable(param);
}

function verfyingCalls(param)
{
    sendVcallVerification(param);
}

function stateMatching(param)
{
    sendVcallState(param);
}

module.exports = {checkingReachablity,verfyingCalls,stateMatching};


