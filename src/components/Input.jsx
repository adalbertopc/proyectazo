import React, { useState } from 'react';
import styled from 'styled-components';

const InputS = styled.div`
	background: #eff0f6;
	width: 400px;
	margin: 40px;
	padding: 10px;
	border: 15px;
	display: grid;
	grid-template-columns: 50px 1fr;

	.ConIcon {
	}

	.ConInput {
		position: relative;
	}

	label {
		position: absolute;
		top: 10px;
		pointer-events: none;
		transition: all 0.3s ease;
	}

	input {
		font-size: 16px;
		padding: 10px;
		width: 100%;
	}

	.active {
		top: -10px;
	}
`;

const Input = ({ type, name, placeholder, children }) => {
	const [content, setContent] = useState('');
	return (
		<InputS>
			<div className='ConIcon'>{children}</div>

			<div className='ConInput'>
				<label
					className={content.trim().length ? 'active' : null}
					htmlFor={name}
				>
					Correo
				</label>
				<input
					name={name}
					type={type}
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
			</div>
		</InputS>
	);
};

export default Input;
