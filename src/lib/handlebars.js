//import * as timeago from 'timeago.js';
const timeago = require('helper-timeago');
const timeagoInstance = timeago();

const helpers = {};

helpers.timeago = (savedTimestamp) => {
    return "21/07/21;"//timeagoInstance.format(savedTimestamp);
};

module.exports = helpers;