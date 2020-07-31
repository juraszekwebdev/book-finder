import React from "react";
import Item from "./Item";
import styled from "styled-components"

const ResultsWrapper = styled.div`
	@media screen and (min-width: 625px) {
		display: flex;
		flex-wrap: wrap;
	}
`;

const Results = props => {
	const {results} = props;
	return (
		<ResultsWrapper>
			{results.map((item, index) => {
				return (
					<Item key={index} item={item}/>
				)
			})}
		</ResultsWrapper>
	)
}

export default Results;