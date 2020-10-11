import React from 'react';
import './App.css';

import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
//import Container from './components/Container';
import Nav from './components/Nav';

import PostCard from './components/PostCard';

const Container = styled.div`
	display: grid;
	grid-template-columns: 120px 1fr;
	height: 100vh;
`;

const Cajita = styled.div`
	background: ${(props) => props.color};
`;

const App = () => {
	return (
		<Container>
			<GlobalStyle />
			<Nav />
			<Cajita color='#F6FBFF'>
				<PostCard></PostCard>
			</Cajita>
		</Container>
	);
};

export default App;
