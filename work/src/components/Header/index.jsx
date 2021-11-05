import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Com extends Component {
	constructor(props) {
		super(props);
	}
	onLogin() {
		window.sessionStorage.setItem("url", this.props.match.path);
		if (!window.sessionStorage.getItem("isLogin")) {
			this.props.history.push("/login");
		} else {
			console.log("您已登录");
		}
	}
	toReg() {
		this.props.history.push("/reg")
	}
	render() {
		return (
			<div>
				{/* <!-- 头部 --> */}
				<div className='header'>
					<div className='header-content'>
						{/* <!-- 左侧 --> */}
						<div className='header-place'>
							<img
								src={require("../../images/header/header_03.png").default}
								alt=''
							/>
							北京
							<img
								src={require("../../images/header/header_05.png").default}
								alt=''
							/>
						</div>
						{/* <!-- 右侧 --> */}
						<div className='header-right'>
							<ul>
								<li
									className='name'
									onClick={() => {
										this.onLogin();
									}}>
									Hi,请登录
								</li>
								<li className='name register'
									onClick={() => { this.toReg() }}
								>免费注册</li>
								<li className='name'>全国名师</li>
								<li className='name left'>精品微课</li>
								<li className='name left'>名校大全</li>
								<li className='name left'>试卷大全</li>
								<li className='name left'>精题大全</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default withRouter(Com);
