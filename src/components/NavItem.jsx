import React, { useState } from 'react';
import styled from 'styled-components';

const NavItemS = styled.a`
	color: ${(props) => props.color};
	margin-bottom: 70px;
	display: flex;
	width: 60px;
	height: 60px;
	align-items: center;
	justify-content: center;
	border-radius: 99px;
	transition: background 0.3s ease;
	position: relative;
	svg {
		fill: ${(props) => props.color};
		width: 100%;
		height: auto;
	}
	&&:hover {
		background: rgba(255, 255, 255, 0.2);
	}
`;

const Tooltip = styled.div`
	position: absolute;
	padding: 0 15px;
	line-height: 40px;
	font-weight: 700;
	background: #4ba0eb;
	left: 110px;
	border-radius: 5px;

	&&::after {
		content: '';
		position: absolute;
		background: #4ba0eb;
		width: 15px;
		height: 15px;
		border-radius: 5px;
		top: 12.5px;
		left: -5px;
		transform: rotate(45deg);
	}
`;

const NavItem = ({ toUrl, children, nombre }) => {
	const [tooltip, setTooltip] = useState(false);

	return (
		<NavItemS
			href={`${toUrl}`}
			color='#fff'
			onMouseEnter={() => setTooltip(true)}
			onMouseLeave={() => setTooltip(false)}
		>
			{children}
			{tooltip ? <Tooltip>{nombre}</Tooltip> : null}
		</NavItemS>
	);
};

export default NavItem;
