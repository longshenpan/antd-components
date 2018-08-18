// when unhandledRejection happens, do nothing
process.on('unhandledRejection', () => {});
global.fetch = require('jest-fetch-mock');
