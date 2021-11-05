import React, { Component } from 'react'
import unit from "../../Unit";

class View extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: {
				user: '',
				password: '',
				isAgree: '1',
				repassword: '',
			},
		}
	}
	//调用redux/user.redux中的register方法，判断是否可以注册
	handleRegister() {
		this.props.register(this.state)
	}
	//监控输入框的变化，及时更新state中的值
	setVal(key, e) {
		let { info } = this.state
		let { value } = e.target
		info[key] = value;
		this.setState({ info })
	}
	Reg() {
		let { info } = this.state
		unit
			.postApi2(
				"/api2/register",
				{
					username: info.user,
					password: info.password,
					isAgree: info.isAgree,
					repassword: info.repassword,
				},
				{}
			).then((res) => {
				console.log(res)
				this.props.history.push('login');
			});
	}
	render() {
		return (
			<React.Fragment>
				<h3>我是登录页面</h3>
				<input type="text" placeholder="用户名" onChange={(e) => { this.setVal('user', e) }} /><br />
				<input type="password" placeholder="密码" onChange={(e) => { this.setVal('password', e) }} /><br />
				<input type="password" placeholder="确认密码" onChange={(e) => { this.setVal('repassword', e) }} /><br />
				<input type="button" value="注册" onClick={() => { this.Reg() }} /><br />
			</React.Fragment>
		)
	}
}

export default View;
