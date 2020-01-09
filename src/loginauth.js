import React, { Component, Fragment } from "react";
import cookie from "js-cookie";
import { parseUrl,login } from "./utils";

export default function LoginAuth(Children) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasLogin: false
      };
    }
    async componentDidMount() {
      await this.checkLogin();
      this.setState({ checked: true });
    }

    async checkLogin() {
      const uri_ticket = parseUrl["ticket"];
      const cookie_ticket = cookie.get("ticket");
      const ticket = uri_ticket || cookie_ticket;
      if (ticket) {
        await cookie.set("ticket", ticket);
        await this.setState({ ticket,hasLogin:true });
      } else {
        login();
      }
    }

    render() {
      console.log("render");
      const { ticket, hasLogin } = this.state;
      return hasLogin ? <Children ticket={ticket} {...this.props} /> : null;
    }
  };
}
