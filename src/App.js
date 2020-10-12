import React, { useState } from 'react';
import './App.css';
import LoginRegisterPage from './pages/login-register-page';
import GlobalStyle from './GlobalStyle';

import { Router, Link } from '@reach/router';
import Home from './pages/home';

const App = () => {
	// esta petando mi cuenta d egithub
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
