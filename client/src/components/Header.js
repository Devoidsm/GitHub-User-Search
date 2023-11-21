//imports used
import React from 'react';
import styled from 'styled-components';
//Main Header Function
const Header = () => {
	return (
		<Wrapper>
			<h3>Welcome to My-Git-Hub User-Search</h3>
		</Wrapper>
	);
};
//Additional CSS
const Wrapper = styled.nav`
	padding: 1.5rem;
	margin-bottom: 4rem;
	background: var(--clr-grey-5);
	text-align: center;
	display: flex;
	grid-template-columns: auto auto 100px;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	h3 {
	margin-bottom: 0;
	font-weight: 400;
	}
`;
//Exports Header Component
export default Header;