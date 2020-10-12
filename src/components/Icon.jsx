import React from 'react';

import styled from 'styled-components';

const IconS = styled.div`
	width: 35px;
	height: 35px;
`;

const Icon = ({ children }) => {
	return <IconS>{children}</IconS>;
};

export default Icon;
