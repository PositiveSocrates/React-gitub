import React, { Component } from "react";
class View extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tab: {
				current: 1,
			},
		};
	}
	tabCls(current, index, cur = "first", cls = "second") {
		const { tab } = this.state;
		return tab[current] === index ? `${cur}` : `${cls}`;
	}
	tabSwitch(current, index = 1) {
		this.setState({
			tab: {
				...this.state.tab,
				[current]: index,
			},
		});
	}
	componentDidMount() {
		this.tabSwitch(1);
	}
	render() {
		const { tab } = this.state;
		return (
			<div>
				<ul className='introduce'>
					<li
						onMouseMove={() => {
							this.tabSwitch("current", 1);
						}}
						className={this.tabCls("current", 1)}>
						<span className='number top1'>1</span>
						<div className={tab.current === 1 ? "img-block" : "img"}>
							<img
								src={require("../../images/part1/part1_24.png").default}
								alt=''
							/>
						</div>
						<div className='teacher teacher1'>
							<p className='name'>陆宇荣</p>
							<span className='subject'>高中语文</span>
							<span className='class'>1.2w节微课</span>
						</div>
					</li>
					<li
						onMouseMove={() => {
							this.tabSwitch("current", 2);
						}}
						className={this.tabCls("current", 2)}>
						<span className='number top2'>2</span>
						<div className={tab.current === 2 ? "img-block" : "img"}>
							<img
								src={require("../../images/part1/part1_24.png").default}
								alt=''
							/>
						</div>
						<div className='teacher teacher1'>
							<p className='name'>陆宇荣</p>
							<span className='subject'>高中语文</span>
							<span className='class'>1.2w节微课</span>
						</div>
					</li>
					<li
						onMouseMove={() => {
							this.tabSwitch("current", 3);
						}}
						className={this.tabCls("current", 3)}>
						<span className='number top3'>3</span>
						<div className={tab.current === 3 ? "img-block" : "img"}>
							<img
								src={require("../../images/part1/part1_24.png").default}
								alt=''
							/>
						</div>
						<div className='teacher teacher1'>
							<p className='name'>陆宇荣</p>
							<span className='subject'>高中语文</span>
							<span className='class'>1.2w节微课</span>
						</div>
					</li>
					<li
						onMouseMove={() => {
							this.tabSwitch("current", 4);
						}}
						className={this.tabCls("current", 4)}>
						<span className='number top4'>4</span>
						<div className={tab.current === 4 ? "img-block" : "img"}>
							<img
								src={require("../../images/part1/part1_24.png").default}
								alt=''
							/>
						</div>
						<div className='teacher teacher1'>
							<p className='name'>陆宇荣</p>
							<span className='subject'>高中语文</span>
							<span className='class'>1.2w节微课</span>
						</div>
					</li>
					<li
						onMouseMove={() => {
							this.tabSwitch("current", 5);
						}}
						className={this.tabCls("current", 5)}>
						<span className='number top5'>5</span>
						<div className={tab.current === 5 ? "img-block" : "img"}>
							<img
								src={require("../../images/part1/part1_24.png").default}
								alt=''
							/>
						</div>
						<div className='teacher teacher1'>
							<p className='name'>陆宇荣</p>
							<span className='subject'>高中语文</span>
							<span className='class'>1.2w节微课</span>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}
export default View;
