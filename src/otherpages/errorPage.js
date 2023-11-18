//imports used
import React from 'react';
import styled from 'styled-components';
import { Link }  from 'react-router-dom';
//Main Function used for Error Page
const PageNotFound = () => {
	return (
		<Wrapper>
			<h1>Sorry page not found or does not exist</h1>
			<Link to='/' className='btn'>
				Back to Home Page
			</Link>
		</Wrapper>
	);
};
//Custom CSS Styling
const Wrapper = styled.section`
	min-height: 100vh;
	display: grid;
	place-items: center;
	background: lightgrey;
	text-align: center;
	}
	h1 {
		color: red;
        font-size: 10rem;
	}
`;
//Exports PageNotFound
export default PageNotFound;