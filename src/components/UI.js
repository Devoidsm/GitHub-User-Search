//Importing
import React from 'react';
import styled from 'styled-components';
import Profile from './Profile.js';
import GitRepos from "./gitRepos.js";
import GitCommits from "./gitCommits.js";

const UI = () => {
	return (
		<section className='section'>
			<Wrapper className='section-center'>
				<Profile></Profile>
				<GitRepos></GitRepos>
				<GitCommits></GitCommits>
			</Wrapper>
		</section>	
	);
};

const Wrapper = styled.div`
	padding-top: 2rem;
	display: grid;
	gap: 3rem 2rem;
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
	/* align-items: start; */
`;

export default UI;