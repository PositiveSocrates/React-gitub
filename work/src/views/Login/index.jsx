import React, { Component } from "react";
import unit from "../../Unit";
class View extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: {
				username: "",
				password: "",
			},
		};
	}
	// 登录
	loginFn() {
		// let url = window.sessionStorage.getItem("url");
		let url = this.props.location.state.url
		const { login } = this.state;
		unit.postApi2(
			"/api2/login",
			{
				username: login.username,
				password: login.password,
			},
			{}
		).then((res) => {
			if (res.data.code === 200) {
				console.log(res.data);
				setTimeout(() => {
					// 本地存储的方式
					// window.sessionStorage.setItem("isLogin", true);
					// window.sessionStorage.setItem("UID", res.data.data.id);
					// 动态路由传参的方式
					this.props.history.push({ pathname: url, state: { isLogin: true, Uid: res.data.data.id } })
					this.props.history.push(url);
				}, 3000);
			}
		});
	}
	changeFn(e) {
		const { name, value } = e.target;
		this.setState({
			login: {
				...this.state.login,
				[name]: value,
			},
		});
	}

	render() {
		const { login } = this.state;
		return (
			<div>
				用户名：{" "}
				<input
					type='text'
					value={login.username}
					name='username'
					onChange={(e) => {
						this.changeFn(e);
					}}
				/>
				密码：{" "}
				<input
					type='password'
					value={login.password}
					name='password'
					onChange={(e) => {
						this.changeFn(e);
					}}
				/>
				<input type='button' value='登录' onClick={() => this.loginFn()} />
			</div>
		);
	}
}
export default View;
