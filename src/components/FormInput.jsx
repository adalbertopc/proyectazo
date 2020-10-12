import React from 'react';
import styled from 'styled-components';

const Group = styled.div`
	width: ${(props) => props.inputWidth || '100%'};
	height: 65px;
	background: #eff0f6;
	border-radius: 16px;

	input {
		outline: none;

		:focus {
			border: 5px solid red !important;
			+ label {
				color: red !important;
			}
		}
	}
`;

const FormInput = ({ type, label, name }) => (
	<Group>
		<input type={type} name={name} />
		{label && (
			<label htmlFor={name} className='label'>
				{label}
			</label>
		)}
	</Group>
);

export default FormInput;
