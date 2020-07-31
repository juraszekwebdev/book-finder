import React from "react";
import Item from "./Item";

const Results = props => {
	const {results} = props;
	return (
		<div className="results">
			{results.map((item, index) => {
				return (
					<Item key={index} item={item}/>
				)
			})}
		</div>
	)
}

export default Results;