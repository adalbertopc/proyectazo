import React, { useState } from 'react';
import './App.css';
import POST_DATOS from './assests/database.json';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Nav from './components/Nav';

import PostsContainer from './components/PostsContainer';

import Input from './components/Input';
import Icon from './components/Icon';

const Container = styled.div`
	display: grid;
	grid-template-columns: 120px 1fr;
	height: 100vh;
`;

const Cajita = styled.div`
	background: ${(props) => props.color};
`;

const App = () => {
	const [bd, setBd] = useState(POST_DATOS);

	console.log(bd);

	return (
		<Container>
			<GlobalStyle />
			<Nav />
			<Cajita color='#F6FBFF'>
				<PostsContainer posts={bd} />
				<Input type='text'>
					<Icon>
						<svg width='16' height='12' viewBox='0 0 16 12'>
							<path
								fill='#B0B7C1'
								d='M13 0C14.6569 0 16 1.34315 16 3V9C16 10.6569 14.6569 12 13 12H3C1.34315 12 0 10.6569 0 9V3C0 1.34315 1.34315 0 3 0H13ZM14 3.3L8.6585 7.75258C8.3129 8.05498 7.81106 8.08018 7.43941 7.82818L7.3415 7.75258L2 3.301V9C2 9.55228 2.44772 10 3 10H13C13.5523 10 14 9.55228 14 9V3.3ZM12.432 2H3.567L8 5.67123L12.432 2Z'
							/>
						</svg>
					</Icon>
				</Input>
			</Cajita>
		</Container>
	);
};

export default App;
