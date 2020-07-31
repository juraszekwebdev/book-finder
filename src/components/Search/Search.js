import React, {useState} from "react";
import Input from "../Global/Form/Input";
import Api from "../../api/api";
import Button from "../Global/Form/Button";
import Form from "../Global/Form/Form";
import styled from "styled-components";

const SearchForm = styled(Form)`
	display: flex;
	align-items: center;
	transition: all 300ms ease-in-out;
	transform: translateY(${({isResult}) => !isResult ? `0` : `-150px`});
	margin-top: 10em;
	
	button {
		padding: 0 1em;
	} 
`;

const Search = props => {
	const [search, setSearch] = useState("");
	const onChange = e => {
		if (e.target.value === '') {
			props.setResults([]);
		}
		setSearch(e.target.value);
	};

	const onSubmit = e => {
		props.setResults([]);
		Api.get('/', {
			params: {
				"q": '"' + search + '"',
				"key": "AIzaSyCIlDyAKIUIZwSYwBHBNYbM4sQ8nUc5lcU",
			}
		}).then(r => {
			console.log(r.data.items);
			props.setResults(r.data.items);
		});
		e.preventDefault();
	};

	return (
		<SearchForm onSubmit={onSubmit} isResult={props.results.length}>
			<Input
				type="text"
				name="search"
				placeholder="Enter books or authors name..."
				value={search}
				onChange={onChange}
			/>
			<Button>Search</Button>
		</SearchForm>
	)
}

export default Search;