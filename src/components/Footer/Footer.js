import React from 'react';
import styled from "styled-components"

const StyledFooter = styled.footer`
	text-align: center;
	color: #fff;
	font-size: 0.8em;
	padding: 1em 0;
`;

const Footer = () => {
	return (
		<StyledFooter>
			by Patryk Juraszek
		</StyledFooter>
	);
};

export default Footer;