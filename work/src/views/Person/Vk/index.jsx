import React, { Component } from "react";
import axios from "axios";
import PageNav from "../../../components/PageNav";
class View extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: [],
			pageCfg: {
				currentPage: 1,
				totalPage: 10,
			},
		};
		this.getPdd = this.getPdd.bind(this);
	}

	async getApi(url, cfg, headers) {
		let data = await axios.get(url, { params: cfg }, { headers: headers });
		return data;
	}
	getPdd(page = "1", size = "25") {
		this.getApi(
			"/home/mediareports",
			{ page_number: page, page_size: size },
			{}
		).then((res) => {
			if (res.data.code === 200) {
				this.setState({
					lists: res.data.data,
					pageCfg: {
						currentPage: page,
						totalPage: Math.ceil(res.data.total / size),
					},
				});
			}
		});
	}
	componentDidMount() {
		setInterval(() => {
			this.getPdd(sessionStorage.getItem("currentPagetest1") || 1);
		}, 1000);
	}
	listFn(data) {
		return data.map((item, index) => {
			return (
				<li key={index} className='li'>
					<p className='li_text'>{item.main_title}</p>
					<p className='bx'>必修课</p>
					<div className='btn'>
						<button>更改名称</button>
						<button>删除目录</button>
					</div>
				</li>
			);
		});
	}

	render() {
		const { lists, pageCfg } = this.state;
		return (
			<div className='vk_box'>
				<div className='vk_gg'>
					<img src={require("../../../images/ban.png").default} alt='' />
				</div>
				<div className='vk_con'>
					<p className='title'>
						<span className='active'>微课管理</span>
						<span>课程包管理</span>
					</p>
					<ul>
						<p className='ul_title'>
							<span className='all'>全部课程</span>
							<span className='new'>新建目录</span>
						</p>
						{this.listFn(lists)}
					</ul>
					{lists.length !== 0 ? (
						<PageNav
							onChange={this.getPdd}
							defaultCurrent={pageCfg.currentPage}
							total={pageCfg.totalPage}
							pageUrl='test1'
						/>
					) : (
						""
					)}
				</div>
			</div>
		);
	}
}
export default View;
