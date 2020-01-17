"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseUrl = parseUrl;
exports.login = login;
exports.logout = logout;

var _qs = require("qs");

var _jsCookie = require("js-cookie");

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import config from './config';

var key = "ticket";

var casUrl = "http://192.168.1.9:8000";
console.log(casUrl, process.env.NODE_ENV);
if (process.env.NODE_ENV == "production") {
  casUrl = "http://cas.jsvry.com/";
} else {
  casUrl = "http://192.168.1.9:8000";
}

function parseUrl() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.href;

  var data = url.split("?")[1];
  return (0, _qs.parse)(data);
}

function login() {
  var redirect_uri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.origin + window.location.pathname;

  var params = { redirect_uri: redirect_uri };
  _jsCookie2.default.remove(key);
  window.location.href = casUrl + "?" + (0, _qs.stringify)(params);
}
function logout() {
  _jsCookie2.default.remove(key);
  var params = { redirect_uri: redirect_uri };
  window.location.href = casUrl + "logout?" + (0, _qs.stringify)(params);
}