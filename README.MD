# vryun cas 

### 安装
`npm i yjtecvrycas --save`

` import {LoginCheck, LoginAuth, login, logout } from 'yjtecvrycas';`


### 方法引用
` login(); logout();`

### react组件引用

    class MyComponent extends Component {
		componentDidMount{
			const {ticket} = this.props;
		}
    }
 
    export default LoginCheck(MyComponent);

    LoginCheck(Component);




