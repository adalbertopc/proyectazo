import React from 'react';
import styled from 'styled-components';

const ProfiePictureS = styled.div`
	margin: none;
	text-align: center;
	img {
		vertical-align: top;
		width: ${(props) => props.size};
		height: ${(props) => props.size};
		border-radius: 99px;
	}
`;

const ProfilePicture = ({ src, size }) => {
	return (
		<ProfiePictureS size={size}>
			<img src={src} alt='' />
		</ProfiePictureS>
	);
};

export default ProfilePicture;
