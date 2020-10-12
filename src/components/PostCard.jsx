import React from 'react';
import styled from 'styled-components';
import PostActionButton from './PostActionButton';
import ProfilePicture from './ProfilePicture';

const PostCardS = styled.div`
	background: ${(props) => props.bgColor};
	box-shadow: 3px 7px 15px -2px rgba(0, 0, 0, 0.04);
	border-radius: 30px;
	width: 600px;
	display: grid;
	grid-template-columns: 20% 1fr;
	margin: 40px;
	grid-gap: 20px;
	padding: 20px;

	.post-left {
	}

	.post-right {
		display: grid;
		grid-gap: 20px;

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
				font-size: 12px;
				font-weight: 600;
				color: #ccc;
			}
		}
		.post-buttons {
			width: 35%;
			display: flex;
			justify-content: space-between;
		}
	}
`;

const PostCard = ({ profilePicture, name, username, content }) => {
	console.log(name);

	return (
		<PostCardS bgColor='#fff'>
			<div className='post-left'>
				<ProfilePicture src={profilePicture} size='85px' />
			</div>
			<div className='post-right'>
				<div className='post-info'>
					<a href='#!'>{name}</a>
					<span className='post-username-tag'>@{username}</span>
					<span className='post-published-time'>7h ago</span>
				</div>
				<div className='post-content'>
					<p>{content}</p>
				</div>

				<div className='post-buttons'>
					<PostActionButton>
						<svg width='14' height='18' viewBox='0 0 14 18'>
							<path d='M1.48271 7.90013C2.04676 7.89125 2.51833 8.30853 2.59047 8.85453L2.59989 8.98268L2.60246 9.15442C2.67748 11.534 4.47518 13.4 6.63276 13.4C6.93931 13.4 7.24058 13.3628 7.53311 13.29L7.32221 13.0778C6.89263 12.6482 6.89263 11.9518 7.32221 11.5222C7.75179 11.0926 8.44827 11.0926 8.87784 11.5222L11.0778 13.7222C11.5074 14.1518 11.5074 14.8482 11.0778 15.2778L8.87784 17.4778C8.44827 17.9074 7.75179 17.9074 7.32221 17.4778C6.89263 17.0482 6.89263 16.3518 7.32221 15.9222L7.75053 15.494C7.3843 15.5643 7.01057 15.6 6.63276 15.6C3.33284 15.6 0.645709 12.8923 0.415568 9.45888L0.40314 9.20639L0.400163 9.01731C0.390602 8.40987 0.875277 7.90969 1.48271 7.90013ZM6.67784 0.52218C7.07438 0.918712 7.10488 1.54267 6.76935 1.97419L6.67784 2.07781L6.24937 2.50587C6.61547 2.43568 6.98906 2.4 7.36672 2.4C10.8269 2.4 13.6 5.37123 13.6 9C13.6 9.60751 13.1075 10.1 12.5 10.1C11.8925 10.1 11.4 9.60751 11.4 9C11.4 6.55363 9.57664 4.6 7.36672 4.6C7.06028 4.6 6.75911 4.63711 6.46667 4.70986L6.67784 4.92218C7.10742 5.35176 7.10742 6.04824 6.67784 6.47781C6.28131 6.87435 5.65736 6.90485 5.22584 6.56932L5.12221 6.47781L2.92221 4.27781C2.52568 3.88128 2.49517 3.25733 2.8307 2.82581L2.92221 2.72218L5.12221 0.52218C5.55179 0.0926028 6.24827 0.0926028 6.67784 0.52218Z' />
						</svg>
					</PostActionButton>

					<PostActionButton>
						<svg width='19' height='19' viewBox='0 0 19 19'>
							<path d='M7.93327 13.2986L3.44348 16.8901C2.82146 17.3876 1.90002 16.9448 1.90002 16.1483V4.74973C1.90002 3.17586 3.17601 1.89999 4.75002 1.89999H14.25C15.824 1.89999 17.1 3.17586 17.1 4.74973V10.4488C17.1 12.0227 15.824 13.2986 14.25 13.2986H7.93327ZM3.80003 14.1719L7.00657 11.6069C7.17502 11.4722 7.38431 11.3987 7.60003 11.3987H14.25C14.7747 11.3987 15.2 10.9735 15.2 10.4488V4.74973C15.2 4.22511 14.7747 3.79982 14.25 3.79982H4.75003C4.22536 3.79982 3.80003 4.22511 3.80003 4.74973V14.1719Z' />
						</svg>
					</PostActionButton>

					<PostActionButton>
						<svg width='20' height='20' viewBox='0 0 20 20'>
							<path
								d='M10 17L3.4776 10.9652C2.5248 10.0839 2 8.91026 2 7.66036C2 6.41045 2.5248 5.23678 3.4776 4.35477C5.2536 2.71131 8.0416 2.56353 10 3.9091C11.9584 2.56353 14.7464 2.71131 16.5224 4.35477C17.4752 5.23678 18 6.41045 18 7.66036C18 8.91026 17.4752 10.0839 16.5224 10.9652L10 17ZM15.1644 9.49688C15.7122 8.9902 16 8.34661 16 7.66036C16 6.97401 15.7121 6.33009 15.164 5.82269C14.0968 4.83516 12.3463 4.72358 11.1326 5.55751L10 6.33568L8.86742 5.55751C7.65368 4.72358 5.90315 4.83516 4.83624 5.82245C4.28786 6.33009 4 6.97401 4 7.66036C4 8.34661 4.28776 8.9902 4.83588 9.49715L10 14.2752L15.1644 9.49688Z'
								fill='#939393'
							/>
						</svg>
					</PostActionButton>
				</div>
			</div>
		</PostCardS>
	);
};

export default PostCard;
