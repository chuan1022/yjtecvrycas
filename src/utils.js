// import config from './config';

import { stringify, parse } from "qs";

const key = "ticket";
const casUrl = "http://192.168.1.216:8000";

export function parseUrl(url = window.location.href) {
  let data = url.split("?")[1];
  return parse(data);
}

export function login(
  redirect_uri = window.location.origin + window.location.pathname
) {
  const params = { redirect_uri };
  if (parseUrl()["auth"] && parseUrl()["ticket"]) {
    // console.log('验证失败，系统错误，请重新登陆');
    alert("登录信息验证失败，请重新登录");
    window.location.href = window.location.origin;
  } else {
    cookie.remove(key);
    window.location.href = `${casUrl}?${stringify(params)}`;
  }
}
export function logout() {
  cookie.remove(key);
  const params = { redirect_uri };
  window.location.href = `${casUrl}logout?${stringify(params)}`;
}

