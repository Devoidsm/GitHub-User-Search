//Importing
import React from 'react';
import styled from 'styled-components';
import Profile from './Profile.js';
import GitRepos from "./gitRepos.js";
//Main Ui User function for the user info display
const UiUser = () => {
	return (
		<section className='section'>
			<Wrapper className='section-center'>
				<Profile></Profile>
				<GitRepos></GitRepos>
			</Wrapper>
		</section>	
	);
};
//Custom CSS styling
const Wrapper = styled.div`
	padding-top: 2rem;
	display: grid;
	gap: 3rem 2rem;
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
	/* align-items: start; */
`;
//export default
export default UiUser;