"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseUrl = parseUrl;

var _qs = require("qs");

function parseUrl() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.href;

  var data = url.split("?")[1];
  return (0, _qs.parse)(data);
} // import config from './config';