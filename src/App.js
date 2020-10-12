import React, { useState } from 'react';
import './App.css';
import LoginRegisterPage from './pages/login-register-page';
import GlobalStyle from './GlobalStyle';

import { Router, Link } from '@reach/router';
import Home from './pages/home';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Router>
				<LoginRegisterPage path='/' />
				<Home path='home' />
			</Router>
		</>
	);
};

export default App;
