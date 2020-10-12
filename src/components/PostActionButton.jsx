import React from 'react';
import styled from 'styled-components';

const PostButton = styled.span`
	background: #f3f3f3;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 35px;
	height: 35px;
	&:hover {
	}
	cursor: pointer;

	svg {
		width: 100%;
		fill: #939393;
	}
`;

const PostActionButton = ({ children }) => {
	return <PostButton>{children}</PostButton>;
};

export default PostActionButton;
