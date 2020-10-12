import React, { useState } from 'react';
import PostsContainer from '../components/PostsContainer';
import Nav from '../components/Nav';
import styled from 'styled-components';
import POST_DATOS from '../assests/database.json';

const Container = styled.div`
	display: grid;
	grid-template-columns: 120px 1fr;
	height: 100vh;
`;

const Cajita = styled.div`
	background: ${(props) => props.color};
`;
const Home = () => {
	const [bd, setBd] = useState(POST_DATOS);
	return (
		<Container>
			<Nav />
			<Cajita color='#F6FBFF'>
				<PostsContainer posts={bd} />
			</Cajita>
		</Container>
	);
};

export default Home;
