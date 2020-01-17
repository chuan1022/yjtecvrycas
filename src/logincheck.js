import React, { Component, Fragment } from "react";
import cookie from "js-cookie";
import { parseUrl } from "./utils";

export default function LoginCheck(Children) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: "data",
        checked: false
      };
    }
    async componentDidMount() {
      await this.checkLogin();
      this.setState({ checked: true });
    }

    async checkLogin() {
      const uri_ticket = parseUrl()["ticket"];
      const cookie_ticket = cookie.get("ticket");
      const ticket = uri_ticket || cookie_ticket;
      if (ticket) {
        await cookie.set("ticket", ticket);
        await this.setState({ ticket });
      } else {
        console.log("cas未登录");
      }
    }

    render() {
      const { ticket, checked } = this.state;
      return checked ? <Children ticket={ticket} {...this.props} /> : null;
    }
  };
}
