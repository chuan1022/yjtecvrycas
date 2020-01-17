// import config from './config';

import { stringify, parse } from "qs";
import cookie from "js-cookie";
const key = "ticket";
const default_redirect_uri = window.location.origin + window.location.pathname;
let casUrl = "http://192.168.1.9:8000";
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV == "production") {
  casUrl = "http://cas.jsvry.com";
} else {
  casUrl = "http://192.168.1.9:8000";
}

export function parseUrl(url = window.location.href) {
  let data = url.split("?")[1];
  return parse(data);
}

export function login(redirect_uri = default_redirect_uri) {
  const params = { redirect_uri };
  cookie.remove(key);
  window.location.href = `${casUrl}?${stringify(params)}`;
}
export function logout(redirect_uri = default_redirect_uri) {
  cookie.remove(key);
  const params = { redirect_uri };
  window.location.href = `${casUrl}/logout?${stringify(params)}`;
}
