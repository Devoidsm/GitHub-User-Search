//imports used
import React from 'react';
import styled from 'styled-components';
import { BiSearchAlt } from "react-icons/bi";
import { GitInfo } from '../gitHubInfo/gitHubInfo.js';
//main search for guthub users method
const SearchgitUser = () => {
	const [gitUser, setgitUser] = React.useState('');
	const { searchGitUser } = React.useContext(GitInfo);
	//event that handles after form  is sumbitted
	const handleFormSubit = (event) => {
		event.preventDefault();
		if (gitUser) {
			searchGitUser(gitUser);
		}
		console.log(gitUser);
	};
	//returns the form used to get username
	return (
		<section className='Searchbar'>
			<Wrapper className='section-center'>
				<form onSubmit={handleFormSubit}>
					<div className='form-control'>
						<BiSearchAlt></BiSearchAlt>
						<input
							data-testid='search-bar'
							type='text'
							placeholder='Please enter github Username'
							value={gitUser}
							onChange={(e) => {
								setgitUser(e.target.value);
							}}
						></input>
						<button type='submit'>Get User</button>
					</div>
				</form>
			</Wrapper>
		</section>
	);
};
//Addiotional CSS
const Wrapper = styled.div`
	position: flex;
	display: grid;
	gap: 1rem 1.75rem;
	@media (min-width: 768px) {
		grid-template-columns: 1fr max-content;
		align-items: center;
		h3 {
			padding: 0 0.5rem;
		}
	}
	.form-control {
		background: white;
		display: grid;
		align-items: center;
		grid-template-columns: auto 1fr auto;
		column-gap: 0.5rem;
		border-radius: 5px;
		padding: 0.5rem;
		input {
			border-color: transparent;
			outline-color: grey;
			letter-spacing: var(--spacing);
			color: var(--clr-grey-3);
			padding: 0.25rem 0.5rem;
		}
		input::placeholder {
			color: black;
			text-transform: capitalize;
			letter-spacing: var(--spacing);
		}
		button {
			border-radius: 5px;
			border-color: transparent;
			padding: 0.25rem 0.5rem;
			text-transform: capitalize;
			letter-spacing: var(--spacing);
			background: var(--clr-primary-5);
			color: black;
			transition: var(--transition);
			cursor: pointer;
			&:hover {
				background: var(--clr-primary-8);
				color: var(--clr-primary-1);
			}
		}

		svg {
			color: var(--clr-grey-5);
		}
		input,
		button,
		svg {
			font-size: 1.3rem;
		}
		@media (max-width: 800px) {
			button,
			input,
			svg {
				font-size: 0.85rem;
			}
		}
	}
	h3 {
		margin-bottom: 0;
		color: var(--clr-grey-5);
		font-weight: 400;
	}
`;
export default SearchgitUser;