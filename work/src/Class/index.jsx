import React, { Component } from "react";
import ClassNav from "../../components/ClassNav/index";
import ClassBlock from "../Props/classBlock";
import Title from "../Props/title";
class View extends Component {
	render() {
		return (
			<div className='Class'>
				<div className='class_part'>
					<div className='part_left'>
						<div className='title'>
							<Title title='语文' />
						</div>

						<div className='img'></div>
					</div>
					<div className='part_right'>
						<ClassNav></ClassNav>
						<ul className='class_block'>
							<li className='block'>
								<ClassBlock title='高中语文必修一' />
							</li>
							<li className='block'>
								<ClassBlock title='高中语文必修一' />
							</li>
							<li className='block margin'>
								<ClassBlock title='高中语文必修一' />
							</li>
							<li className='block'>
								<ClassBlock title='高中语文必修一' />
							</li>
							<li className='block'>
								<ClassBlock title='高中语文必修一' />
							</li>
							<li className='block margin'>
								<ClassBlock title='高中语文必修一' />
							</li>
							<li className='block'>
								<ClassBlock title='高中语文必修一' />
							</li>
							<li className='block'>
								<ClassBlock title='高中语文必修一' />
							</li>
							<li className='block margin'>
								<ClassBlock title='高中语文必修一' />
							</li>
						</ul>
						<div className='class_top'>
							<Title title='热门微课排行榜' />
						</div>
					</div>
				</div>

				<div className='class_part'>
					<div className='part_left'>
						<div className='title'>
							<Title title='数学' />
						</div>

						<div className='img'></div>
					</div>
					<div className='part_right'>
						<ClassNav></ClassNav>
						<ul className='class_block'>
							<li className='block block1 manth'>
								<ClassBlock title='高中语文必修一' />
							</li>
							<li className='block block1 manth'>
								<ClassBlock title='高中语文必修一' />
							</li>
							<li className='block block1 margin manth'>
								<ClassBlock title='高中语文必修一' />
							</li>
						</ul>
						<div className='class_top'>
							<Title title='热门微课排行榜' />
						</div>
					</div>
				</div>

				<div className='class_part'>
					<div className='part_left'>
						<div className='title'>
							<Title title='英语' />
						</div>

						<div className='img'></div>
					</div>
					<div className='part_right'>
						<ClassNav></ClassNav>
						<ul className='class_block'>
							<li className='block block_170 english'>
								<ClassBlock title='高中语文必修一' />
							</li>
							<li className='block block_170 english'>
								<ClassBlock title='高中语文必修一' />
							</li>
							<li className='block margin block_170 english'>
								<ClassBlock title='高中语文必修一' />
							</li>
							<li className='block block2 english'>
								<ClassBlock title='高中语文必修一' />
							</li>
							<li className='block margin block_170 english'>
								<ClassBlock title='高中语文必修一' />
							</li>
						</ul>
						<div className='class_top'>
							<Title title='热门微课排行榜' />
						</div>
					</div>
				</div>

				<div className='class_part'>
					<div className='part_left'>
						<div className='title'>
							<Title title='语文' />
						</div>

						<div className='img'></div>
					</div>
					<div className='part_right'>
						<ClassNav></ClassNav>
						<ul className='class_block'>
							<li className='block block1  bg-no'>
								<div className='block block_170 mar_top_no history'>
									<ClassBlock title='高中语文必修一' />
								</div>
								<div className='block block_170 history'>
									<ClassBlock title='高中语文必修一' />
								</div>
							</li>
							<li className='block block1 history'>
								<ClassBlock title='高中语文必修一' />
							</li>
							<li className='block block1 margin history'>
								<ClassBlock title='高中语文必修一' />
							</li>
						</ul>
						<div className='class_top'>
							<Title title='热门微课排行榜' />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default View;
