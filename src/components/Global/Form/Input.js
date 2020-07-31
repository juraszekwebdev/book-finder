import React from "react";
import styled from "styled-components";

const Input = styled.input`
	height: 45px;
	padding: 0 0.5em;
	width: 100%;
	border: 0;
	border-bottom: solid 1px #fff;
	background-color: transparent;
	font-family: 'Montserrat', sans-serif;
	font-size: 1em;
	font-weight: 300;
	color: #fff;
	transition: all 300ms ease-in-out;
	
	&:hover, &:focus {
		width: 100%;
		
		&::placeholder {
		  color: transparent;
		}
	}
	
	&::placeholder {
	  text-align: center;
	  color: #fff;
	  transition: all 300ms ease-in-out;
	}
`;

export default Input;