'use strict';

const { logInfo } = require('@plastiq/plastiq-common-logging');

const testLambdaLimit = async event => {
    logInfo('testLambdaLimit', 'adding test logging', event);
    const responseData = {
        statusCode: 200,
        body: 'success',
    };
    return responseData;
};
