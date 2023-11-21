//Importing
import React from 'react';
import styled from 'styled-components';
import GitCommits from "./gitCommits.js";
//Main Ui Commits function for the user info display
const UiCommits = () => {
	return (
		<section className='section'>
			<Wrapper className='section-center'>
				<GitCommits></GitCommits>
			</Wrapper>
		</section>	
	);
};
//Custom CSS styling
const Wrapper = styled.div`
	padding-top: 2rem;
	display: relative;
	gap: 3rem 2rem;
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
	align-items: center;
`;
//export default
export default UiCommits;