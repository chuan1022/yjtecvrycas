"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = LoginCheck;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _jsCookie = require("js-cookie");

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// class LoginCheck extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       checked: false
//     };
//   }
//   componentDidMount() {
//     this.checkLogin();
//   }
//   async checkLogin() {
//     const uri_ticket = parseUrl['ticket'];
//     const cookie_ticket = cookie.get("ticket");
//     const ticket = uri_ticket || cookie_ticket;
//     if (ticket) {
//       await cookie.set("ticket", ticket);
//       console.log(ticket);
//     } else {
//       console.log("cas未登录");
//     }
//     this.setState({ checked: true });
//   }
//   render() {
//     const { children } = this.props;
//     return <Fragment>{React.cloneElement(children, { ticket: 123456 })}</Fragment>;
//   }
// }

function LoginCheck(Children) {
  return function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.state = {
        data: "data",
        checked: false
      };
      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: async function componentDidMount() {
        await this.checkLogin();
        this.setState({ checked: true });
      }
    }, {
      key: "checkLogin",
      value: async function checkLogin() {
        var uri_ticket = _utils.parseUrl["ticket"];
        var cookie_ticket = _jsCookie2.default.get("ticket");
        var ticket = uri_ticket || cookie_ticket;
        if (ticket) {
          await _jsCookie2.default.set("ticket", ticket);
          await this.setState({ ticket: ticket });
        } else {
          console.log("cas未登录");
        }
      }
    }, {
      key: "render",
      value: function render() {
        console.log("render");
        var _state = this.state,
            ticket = _state.ticket,
            checked = _state.checked;


        return checked ? _react2.default.createElement(Children, _extends({ ticket: ticket }, this.props)) : null;
      }
    }]);

    return _class;
  }(_react.Component);
}