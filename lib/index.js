"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginAuth = exports.LoginCheck = undefined;
exports.login = login;
exports.logout = logout;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _qs = require("qs");

var _jsCookie = require("js-cookie");

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _logincheck = require("./logincheck");

var _logincheck2 = _interopRequireDefault(_logincheck);

var _loginauth = require("./loginauth");

var _loginauth2 = _interopRequireDefault(_loginauth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var key = "ticket";
var casUrl = "http://192.168.1.216:8000";

function login() {
  var redirect_uri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.origin + window.location.pathname;

  var params = { redirect_uri: redirect_uri };
  if (parseUrl()["auth"] && parseUrl()["ticket"]) {
    // console.log('验证失败，系统错误，请重新登陆');
    alert("登录信息验证失败，请重新登录");
    window.location.href = window.location.origin;
  } else {
    _jsCookie2.default.remove(key);
    window.location.href = casUrl + "?" + (0, _qs.stringify)(params);
  }
}

function logout() {
  _jsCookie2.default.remove(key);
  var params = { redirect_uri: redirect_uri };
  window.location.href = casUrl + "logout?" + (0, _qs.stringify)(params);
}

exports.LoginCheck = _logincheck2.default;
exports.LoginAuth = _loginauth2.default;