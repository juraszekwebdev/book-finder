import {createGlobalStyle} from "styled-components";
import bg from "../../assets/bg.jpg";

const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
	body {
		margin: 0;
		padding: 0;
		font-family: 'Montserrat', sans-serif;
		font-size: 1em;
		color: #111;
		background: url(${bg}) no-repeat center;
		height: 100vh;
		background-attachment: fixed;
		background-size: cover;
		position: relative;
		z-index: 0;
	
		&::after {
			content: '';
			display: block;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, .7);
			z-index: -1;
		}
	}
  
	*, *::before, *::after {
		box-sizing: border-box;
	}
	
	*:focus {
		outline: 0;
	}
	
	#root, .app {
		height: 100%;
	}
	
	.results-appear {
		opacity: 0.01;
	}
	
	.results-appear.results-appear-active {
		opacity: 1;
		transition: opacity .5s ease-in;
	}
`;

export default GlobalStyles;