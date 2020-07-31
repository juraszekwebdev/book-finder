import React, {useState} from 'react';
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Results from "./Results/Results";
import Wrapper from "./Global/Wrapper";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from "styled-components";
import Footer from "./Footer/Footer";
import GlobalStyles from "./Global/GlobalStyle"; // ES6

const ResultsWrapper = styled.div`
  margin-top: -8em;
`;

function App() {
	const [results, setResults] = useState([]);

	return (
		<React.Fragment>
			<Wrapper>
				<Logo>Book Finder</Logo>
				<Search setResults={setResults} results={results}/>

				{results.length !== 0 &&
				<ResultsWrapper results={results}>
					<ReactCSSTransitionGroup
						transitionName="results"
						transitionAppear={true}
						transitionAppearTimeout={500}
						transitionEnter={false}
						transitionLeave={false}>
						<Results results={results}/>
					</ReactCSSTransitionGroup>
				</ResultsWrapper>
				}
				<Footer/>
			</Wrapper>
			<GlobalStyles/>
		</React.Fragment>
	);
}

export default App;
