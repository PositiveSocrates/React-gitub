import React, { Component } from "react";

import Title from "../Props/title";
// 真题解析banner
import parsingBanner from "../../images/part1/13.png";
// 钢笔图标
import pen from "../../images/part1/14.png";
// 学校
import university from "../../images/part1/16.png";
// 名师工作室
import studio from "../../images/part1/studio.png";
// 最新入住
import News from "../../images/part1/News.png";
// 左按钮
import Left from "../../images/part1/left.png";
// 右按钮
import Right from "../../images/part1/right.png";
import Tab from "../Tab";
import unit from "../../Unit";
import Banner from "../../components/Banner";
// export default
// export default, export  区别
// React.Components
// Component
// 一个类组件
// 1.导入react的包
// 2.编写一个class
//    render(){return()}
// 3.export default Home
class View extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.getUserinfo();
	}
	getUserinfo() {
		let id = window.sessionStorage.getItem("UID");
		unit
			.getApi2(`/api2/userinfo/${id}`, {}, {})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	}
	render() {
		return (
			<div>
				{/* 轮播图 */}
				<Banner />
				{/* <!-- 内容 --> */}
				<div className='content'>
					{/* <!-- 第一部分 --> */}
					<div className='part1'>
						{/* <!-- title --> */}
						<div className='part1-title'>
							<Title title='全国名师推荐'>
								<p className='more'>换一换</p>
							</Title>
						</div>
						{/* <!-- 板块 --> */}
						<ul className='part1-teacher'>
							<li>
								{/* <!-- 教师介绍 --> */}
								<div className='introduce'>
									{/* <!-- 头像 --> */}
									<div className='introduce-img'>
										<img
											src={require("../../images/part1/part1_03.png").default}
										/>
									</div>
									{/* <!-- 介绍 --> */}
									<div className='introduce-name'>
										<p className='name'>谢依霖</p>
										<p>特级教师</p>
										<p>成都嘉祥七种外国语学校</p>
									</div>
									{/* <!-- 标签 --> */}
									<div className='introduce-label'>初中生物</div>
								</div>
								{/* <!-- 课程介绍 --> */}
								<div className='class'>
									<div className='class-introduce'>
										<p>
											从生物圈到细胞 <span className='hot'>Hot</span>{" "}
										</p>
										<p>
											从生物圈到细胞 <span className='hot'>Hot</span>
										</p>
										<p>
											从生物圈到细胞 <span className='hot'>Hot</span>
										</p>
										<p>从生物圈到细胞</p>
										<p>从生物圈到细胞</p>
									</div>
								</div>
							</li>
							<li>
								{/* <!-- 教师介绍 --> */}
								<div className='introduce'>
									{/* <!-- 头像 --> */}
									<div className='introduce-img'>
										<img
											src={require("../../images/part1/part1_05.png").default}
										/>
									</div>
									{/* <!-- 介绍 --> */}
									<div className='introduce-name'>
										<p className='name'>李晓蕊</p>
										<p>一级教师</p>
										<p>北京二十四中</p>
									</div>
									{/* <!-- 标签 --> */}
									<div className='introduce-label chemistry'>高中化学</div>
								</div>
								{/* <!-- 课程介绍 --> */}
								<div className='class'>
									<div className='class-introduce'>
										<p>
											水的电离和溶液的酸碱性 <span className='hot'>Hot</span>{" "}
										</p>
										<p>
											盐类的水解 <span className='hot'>Hot</span>
										</p>
										<p>
											难溶电解质的溶解平衡动态解析{" "}
											<span className='hot'>Hot</span>
										</p>
										<p>元素化学与化学理论</p>
										<p>弱电解质的电离</p>
									</div>
								</div>
							</li>
							<li>
								{/* <!-- 教师介绍 --> */}
								<div className='introduce'>
									{/* <!-- 头像 --> */}
									<div className='introduce-img'>
										<img
											src={require("../../images/part1/part1_07.png").default}
										/>
									</div>
									{/* <!-- 介绍 --> */}
									<div className='introduce-name'>
										<p className='name'>方展博</p>
										<p>一级教师</p>
										<p>中国人民大学附属中学</p>
									</div>
									{/* <!-- 标签 --> */}
									<div className='introduce-label mathematics'>高中数学</div>
								</div>
								{/* <!-- 课程介绍 --> */}
								<div className='class'>
									<div className='class-introduce'>
										<p>
											方程的根与函数的零点的方法解析{" "}
											<span className='hot'>Hot</span>{" "}
										</p>
										<p>
											中心投影与平行投影与空间几何{" "}
											<span className='hot'>Hot</span>
										</p>
										<p>
											球的体积与表面积 <span className='hot'>Hot</span>
										</p>
										<p>直线与平面垂直的判定</p>
										<p>直线与平面平行的性质与判定关系</p>
									</div>
								</div>
							</li>
							<li className='right'>
								{/* <!-- 教师介绍 --> */}
								<div className='introduce'>
									{/* <!-- 头像 --> */}
									<div className='introduce-img'>
										<img
											src={require("../../images/part1/part1_09.png").default}
										/>
									</div>
									{/* <!-- 介绍 --> */}
									<div className='introduce-name'>
										<p className='name'>施洋</p>
										<p>一级教师</p>
										<p>雅礼中学</p>
									</div>
									{/* <!-- 标签 --> */}
									<div className='introduce-label english'>初中英语</div>
								</div>
								{/* <!-- 课程介绍 --> */}
								<div className='class'>
									<div className='class-introduce'>
										<p>
											新课标高考词汇0056—admire <span className='hot'>Hot</span>{" "}
										</p>
										<p>
											There be 常见误用 <span className='hot'>Hot</span>
										</p>
										<p>
											对比时，一定用“比较级”吗？{" "}
											<span className='hot'>Hot</span>
										</p>
										<p>新课标高考词汇0058—adolescence</p>
										<p>副词“原级”和“比较级”特殊情况</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
					{/* 第二部分 */}
					<div className='part2'>
						{/* 左侧 */}
						<div className='part2-left'>
							{/* 介绍 */}
							<div className='introduce'>
								{/* 标题 */}
								<div className='part2-title'>
									<Title title='热门名师'></Title>
								</div>
								<p className='more part2-more'>查看更多&gt; &gt;</p>
								{/* 导航 */}
								<ul className='introduce-nav'>
									<li className='active'>热门</li>
									<li>语文</li>
									<li>数学</li>
									<li>英语</li>
									<li>物理</li>
									<li>化学</li>
									<li>生物</li>
									<li>历史</li>
									<li>地理</li>
									<li className='right'>政治</li>
								</ul>
							</div>
							{/* 卡片 */}
							<ul className='cards'>
								<li>
									<div className='part2-top'>
										<div className='cards-img'>
											<img
												src={require("../../images/part1/part1_19.png").default}
												alt=''
											/>
										</div>
										<div className='cards-name'>
											<p className='name'>钟国强</p>
											<p className='lable'>高中政治</p>
											<p className='school'>北京市宣武区外国语学校</p>
										</div>
									</div>

									<div className='cards-bottom'>
										<span>344节微课</span>
										<span className='none'>56人学习</span>
									</div>
								</li>
								<li>
									<div className='part2-top'>
										<div className='cards-img'>
											<img
												src={require("../../images/part1/part1_19.png").default}
												alt=''
											/>
										</div>
										<div className='cards-name'>
											<p className='name'>钟国强</p>
											<p className='lable'>高中政治</p>
											<p className='school'>北京市宣武区外国语学校</p>
										</div>
									</div>

									<div className='cards-bottom'>
										<span>344节微课</span>
										<span className='none'>56人学习</span>
									</div>
								</li>
								<li className='right'>
									<div className='part2-top'>
										<div className='cards-img'>
											<img
												src={require("../../images/part1/part1_19.png").default}
												alt=''
											/>
										</div>
										<div className='cards-name'>
											<p className='name'>钟国强</p>
											<p className='lable'>高中政治</p>
											<p className='school'>北京市宣武区外国语学校</p>
										</div>
									</div>

									<div className='cards-bottom'>
										<span>344节微课</span>
										<span className='none'>56人学习</span>
									</div>
								</li>
								<li>
									<div className='part2-top'>
										<div className='cards-img'>
											<img
												src={require("../../images/part1/part1_19.png").default}
												alt=''
											/>
										</div>
										<div className='cards-name'>
											<p className='name'>钟国强</p>
											<p className='lable'>高中政治</p>
											<p className='school'>北京市宣武区外国语学校</p>
										</div>
									</div>

									<div className='cards-bottom'>
										<span>344节微课</span>
										<span className='none'>56人学习</span>
									</div>
								</li>
								<li>
									<div className='part2-top'>
										<div className='cards-img'>
											<img
												src={require("../../images/part1/part1_19.png").default}
												alt=''
											/>
										</div>
										<div className='cards-name'>
											<p className='name'>钟国强</p>
											<p className='lable'>高中政治</p>
											<p className='school'>北京市宣武区外国语学校</p>
										</div>
									</div>

									<div className='cards-bottom'>
										<span>344节微课</span>
										<span className='none'>56人学习</span>
									</div>
								</li>
								<li className='right'>
									<div className='part2-top'>
										<div className='cards-img'>
											<img
												src={require("../../images/part1/part1_19.png").default}
												alt=''
											/>
										</div>
										<div className='cards-name'>
											<p className='name'>钟国强</p>
											<p className='lable'>高中政治</p>
											<p className='school'>北京市宣武区外国语学校</p>
										</div>
									</div>

									<div className='cards-bottom'>
										<span>344节微课</span>
										<span className='none'>56人学习</span>
									</div>
								</li>
							</ul>
						</div>
						{/* 右侧 */}
						<div className='part2-right'>
							{/* 标题 */}
							<div className='part2-title'>
								<Title title='名师热度榜' />
							</div>

							{/* 排行榜 */}
							<div className='top'>
								<Tab />
							</div>
						</div>
					</div>
					{/* 第三部分 */}
					<div className='part3'>
						<div className='part3-left'>
							<div className='introduce'>
								<Title title='微课精选' />
							</div>
							<div className='class'>
								{/*科目 */}
								<ul className='subject'>
									<li className='first'>语文</li>
									<li>语文</li>
									<li>语文</li>
									<li>语文</li>
									<li>语文</li>
									<li>语文</li>
									<li>语文</li>
									<li>语文</li>
									<li>语文</li>
									<li className='more'>更多&gt;&gt;</li>
								</ul>
								{/* 课程 */}
								<ul className='class'>
									<li>立体几何</li>
									<li>集合与简易逻辑</li>
									<li>算法初步</li>
									<li>几何证明选讲</li>
									<li>优选法与设计实验初步</li>
									<li>不等式选讲</li>
									<li>数系的扩充和复数的引用</li>
									<li>集合证明选讲</li>
									<li>优选法与设计实验初步</li>
									<li>数系的扩充和复数的引用</li>
									<li>算法初步</li>
									<li>集合与简易逻辑</li>
									<li>立体几何</li>
								</ul>
								{/* cards */}
								<ul className='cards'>
									<li>高中数学必修一</li>
									<li className='bg1'>高考复习</li>
									<li className='bg2'>初三数学</li>
									<li className='right bg3'>高中数学必修三</li>
								</ul>
								<span className='s1'>更多微课请去精品微课页&gt;&gt;</span>
							</div>
						</div>
						<div className='part3-right'>
							{/* 标题 */}
							<Title title='名师热度榜' />
							{/* 排行榜 */}
							<div className='top top2'>
								<ul className='introduce'>
									<li className='second'>
										<span className='number top2'>1</span>
										<div className='teacher'>
											<p>陆宇荣</p>
											<span className='subject'>高中语文</span>
											<span className='class'>1.2w节微课</span>
										</div>
									</li>
									<li className='second'>
										<span className='number top2'>2</span>
										<div className='teacher'>
											<p>陆宇荣</p>
											<span className='subject'>高中语文</span>
											<span className='class'>1.2w节微课</span>
										</div>
									</li>
									<li className='second'>
										<span className='number top2 top3'>3</span>
										<div className='teacher'>
											<p>陆宇荣</p>
											<span className='subject'>高中语文</span>
											<span className='class'>1.2w节微课</span>
										</div>
									</li>
									<li className='second'>
										<span className='number top2 top4'>4</span>
										<div className='teacher'>
											<p>陆宇荣</p>
											<span className='subject'>高中语文</span>
											<span className='class'>1.2w节微课</span>
										</div>
									</li>
									<li className='second border-no'>
										<span className='number top2 top4'>5</span>
										<div className='teacher'>
											<p>陆宇荣</p>
											<span className='subject'>高中语文</span>
											<span className='class'>1.2w节微课</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* 真题解析 */}
					<div className='part2'>
						{/* 左侧 */}
						<div className='part2-left'>
							{/* 介绍 */}
							<div className='introduce'>
								{/* 标题 */}
								<div className='part2-title'>
									<Title title='热门名师'></Title>
								</div>
								<p className='more part2-more'>更多&gt; &gt;</p>
							</div>
							<div className='part4-banner'>
								<p className='video'>2015高考真题视频解析</p>
								<img src={parsingBanner} alt='' />
							</div>
							<div className='parsing_subjects_ct_box'>
								<p className='parsing_subjects_title'>
									2015年普通高等学校招生全国统一考试(全国新课标I卷)
								</p>
								<ul className='parsing_subjects_ul flex'>
									<li className='flex'>
										<img src={pen} alt='' />
										<p>语文卷</p>
									</li>
									<li className='flex'>
										<img src={pen} alt='' />
										<p>语文卷</p>
									</li>
									<li className='flex'>
										<img src={pen} alt='' />
										<p>语文卷</p>
									</li>
									<li className='flex'>
										<img src={pen} alt='' />
										<p>语文卷</p>
									</li>
									<li className='flex'>
										<img src={pen} alt='' />
										<p>语文卷</p>
									</li>
									<li className='flex'>
										<img src={pen} alt='' />
										<p>语文卷</p>
									</li>
									<li className='flex'>
										<img src={pen} alt='' />
										<p>语文卷</p>
									</li>
									<li className='flex'>
										<img src={pen} alt='' />
										<p>语文卷</p>
									</li>
									<li className='flex'>
										<img src={pen} alt='' />
										<p>语文卷</p>
									</li>
									<li className='flex'>
										<img src={pen} alt='' />
										<p>语文卷</p>
									</li>
								</ul>
							</div>
						</div>
						<div className='parsing_rt_box'>
							<div className='part2-title'>
								<Title title='名校找名师' span='更多>>' />
							</div>

							<ul className='university'>
								<li className='flex'>
									<img src={university} alt='' />
									<p>中国人民大学附属中学</p>
								</li>
								<li className='flex'>
									<img src={university} alt='' />
									<p>中国人民大学附属中学</p>
								</li>
								<li className='flex'>
									<img src={university} alt='' />
									<p>中国人民大学附属中学</p>
								</li>
								<li className='flex'>
									<img src={university} alt='' />
									<p>中国人民大学附属中学</p>
								</li>
								<li className='flex'>
									<img src={university} alt='' />
									<p>中国人民大学附属中学</p>
								</li>
							</ul>
						</div>
					</div>
					{/* 名师工作室 */}
					<div className='studio_box'>
						<div className='studio_box_title'>
							<Title title='名师工作室' />
						</div>
						<ul className='studio_ct_box flex'>
							<li>
								<img src={studio} alt='' />
								<h4 className='studio_ct_Name'>SmartEnglist名师工作室</h4>
								<p className='studio_Class'>
									<span>344节微课</span>
									<i>|</i>
									<span>四川成都</span>
								</p>
								<p className='studio_Class'>
									<span>人学习</span>
									<i>|</i>
									<span>初中英语</span>
								</p>
							</li>
							<li>
								<img src={studio} alt='' />
								<h4 className='studio_ct_Name'>SmartEnglist名师工作室</h4>
								<p className='studio_Class'>
									<span>344节微课</span>
									<i>|</i>
									<span>四川成都</span>
								</p>
								<p className='studio_Class'>
									<span>人学习</span>
									<i>|</i>
									<span>初中英语</span>
								</p>
							</li>
							<li>
								<img src={studio} alt='' />
								<h4 className='studio_ct_Name'>SmartEnglist名师工作室</h4>
								<p className='studio_Class'>
									<span>344节微课</span>
									<i>|</i>
									<span>四川成都</span>
								</p>
								<p className='studio_Class'>
									<span>人学习</span>
									<i>|</i>
									<span>初中英语</span>
								</p>
							</li>
							<li>
								<img src={studio} alt='' />
								<h4 className='studio_ct_Name'>SmartEnglist名师工作室</h4>
								<p className='studio_Class'>
									<span>344节微课</span>
									<i>|</i>
									<span>四川成都</span>
								</p>
								<p className='studio_Class'>
									<span>人学习</span>
									<i>|</i>
									<span>初中英语</span>
								</p>
							</li>
							<li className='margin'>
								<img src={studio} alt='' />
								<h4 className='studio_ct_Name'>SmartEnglist名师工作室</h4>
								<p className='studio_Class'>
									<span>344节微课</span>
									<i>|</i>
									<span>四川成都</span>
								</p>
								<p className='studio_Class'>
									<span>人学习</span>
									<i>|</i>
									<span>初中英语</span>
								</p>
							</li>
							<li>
								<img src={studio} alt='' />
								<h4 className='studio_ct_Name'>SmartEnglist名师工作室</h4>
								<p className='studio_Class'>
									<span>344节微课</span>
									<i>|</i>
									<span>四川成都</span>
								</p>
								<p className='studio_Class'>
									<span>人学习</span>
									<i>|</i>
									<span>初中英语</span>
								</p>
							</li>
							<li>
								<img src={studio} alt='' />
								<h4 className='studio_ct_Name'>SmartEnglist名师工作室</h4>
								<p className='studio_Class'>
									<span>344节微课</span>
									<i>|</i>
									<span>四川成都</span>
								</p>
								<p className='studio_Class'>
									<span>人学习</span>
									<i>|</i>
									<span>初中英语</span>
								</p>
							</li>
							<li>
								<img src={studio} alt='' />
								<h4 className='studio_ct_Name'>SmartEnglist名师工作室</h4>
								<p className='studio_Class'>
									<span>344节微课</span>
									<i>|</i>
									<span>四川成都</span>
								</p>
								<p className='studio_Class'>
									<span>人学习</span>
									<i>|</i>
									<span>初中英语</span>
								</p>
							</li>
							<li>
								<img src={studio} alt='' />
								<h4 className='studio_ct_Name'>SmartEnglist名师工作室</h4>
								<p className='studio_Class'>
									<span>344节微课</span>
									<i>|</i>
									<span>四川成都</span>
								</p>
								<p className='studio_Class'>
									<span>人学习</span>
									<i>|</i>
									<span>初中英语</span>
								</p>
							</li>
							<li className='margin'>
								<img src={studio} alt='' />
								<h4 className='studio_ct_Name'>SmartEnglist名师工作室</h4>
								<p className='studio_Class'>
									<span>344节微课</span>
									<i>|</i>
									<span>四川成都</span>
								</p>
								<p className='studio_Class'>
									<span>人学习</span>
									<i>|</i>
									<span>初中英语</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default View;
