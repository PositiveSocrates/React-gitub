import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Vk from "./Vk";
import User from "./User";
import Study from "./Study";
import Profit from "./Profit";
import Safe from "./Safe";
class View extends Component {
	constructor(props) {
		super(props);
	}

	ifPage(uid) {
		switch (uid) {
			case "":
				return <Vk />;
			case "vk":
				return <Vk />;
			case "user":
				return <User />;
			case "study":
				return <Study />;
			case "profit":
				return <Profit />;
			case "safe":
				return <Safe />;

			default:
				return <Vk />;
		}
	}
	componentDidMount() {
		setTimeout(() => {
			if (!window.sessionStorage.getItem("isLogin")) {
				window.sessionStorage.setItem("url", this.props.match.path);
				this.props.history.push("/login");
			}
		}, 3000);
	}
	render() {
		const { match } = this.props;
		console.log(match);
		return (
			<div className='person_box'>
				<div className='person_con'>
					<div className='per_list'>
						<div className='user'>
							<img src={require("../../images/photo.png").default} alt='' />
							<p>
								<span className='name'>耿云娇</span>
								<span>13456877920</span>
							</p>
						</div>
						<div className='list'>
							<ul>
								<li>
									<NavLink to='/person/vk'>
										<i></i>
										微课管理
									</NavLink>
								</li>
								<li>
									<NavLink to='/person/study'>
										<i></i>教学统计
									</NavLink>
								</li>
								<li>
									<NavLink to='/person/profit'>
										<i></i>收益总览
									</NavLink>
								</li>
								<li>
									<a>
										<i></i>我的名师
									</a>
								</li>
								<li>
									<a>
										<i></i>我的课程
									</a>
								</li>
								<li>
									<a>
										<i></i>我的账户
									</a>
								</li>
								<li>
									<a>
										<i></i>我的优惠
									</a>
								</li>
								<li>
									<NavLink to='/person/user'>
										<i></i>个人资料
									</NavLink>
								</li>
								<li>
									<NavLink to='/person/safe'>
										<i></i>安全中心
									</NavLink>
								</li>
							</ul>
						</div>
						<div className='gg_small'>
							<img src={require("../../images/gg.png").default} alt='' />
						</div>
					</div>
					<div className='per_right'>{this.ifPage(match.params.uid)}</div>
				</div>
			</div>
		);
	}
}
export default View;
