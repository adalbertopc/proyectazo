import React from 'react';
import styled from 'styled-components';

const PostCardS = styled.div`
	background: ${(props) => props.bgColor};
	box-shadow: 3px 7px 15px -2px rgba(0, 0, 0, 0.04);
	border-radius: 45px;
	width: 600px;
	display: grid;
	grid-template-columns: 20% 1fr;

	padding: 20px;

	.post-right {
		.post-info {
			display: flex;
			align-items: center;

			a {
				text-decoration: none;
				font-weight: 600;
				color: #000;
				font-size: 18px;
				margin-right: 12px;
			}

			.post-username-tag {
				padding: 3px 6px;
				background: #f3f3f3;
				border-radius: 7px;
				font-size: 11px;
				font-weight: 600;
				color: #ccc;
			}
		}
	}
`;

const ProfileCircle = styled.div`
	background: ${(props) => props.bgColor};
	border-radius: 50%;
	width: 85px;
	height: 85px;
`;

const PostCard = () => {
	return (
		<PostCardS>
			<ProfileCircle bgColor='blue' />
			<div className='post-right'>
				<div className='post-info'>
					<a href='#!'>Adalberto Prado</a>
					<span className='post-username-tag'>@adalbertopc</span>
					<span className='post-published-time'>7h ago</span>
				</div>
				<div className='post-content'>
					<p>
						Hola mundo como esta chinguen a su puta madre
						todos y jodanse putitas alv son unas zorras
					</p>
				</div>

				<div className='post-buttons'>
					<a href='#!'>
						<span>O</span>
					</a>
				</div>
			</div>
		</PostCardS>
	);
};

export default PostCard;
