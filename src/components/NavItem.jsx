import React from 'react';
import styled from 'styled-components';

const NavItemS = styled.a`
	color: ${(props) => props.color};
	margin-bottom: 70px;
	display: flex;
	width: 100%;
	justify-content: center;
	svg {
		fill: ${(props) => props.color};
		width: 100%;
		height: auto;
	}
`;

const NavItem = ({ toUrl, children }) => {
	return (
		<NavItemS href={`${toUrl}`} color='#fff'>
			{children}
		</NavItemS>
	);
};

export default NavItem;
