//imports
import React from 'react';
import styled from 'styled-components';
import { GitInfo } from '../gitHubInfo/gitHubInfo.js';
//Main gitRepos Function used to gather the user Repos and display their information
const GitRepos = () => {
    //getting repos from GitInfoProvider
    const { repos } = React.useContext(GitInfo);

	return (
		<Wrapper>
			<div className='Repos'>
				{repos.map((repo, index) => {
					const { name, updated_at, html_url, created_at, description,  } = repo;
					return (
						<article key={index}>
							<h3>Title: {name}</h3>
							<div>
                                <h4>Description: {description}</h4>
								<p>Last Committed Date: {updated_at}</p>
								<p>Created on: {created_at}</p>
								<a href={html_url}>Go to Repo</a>
							</div>
                        </article> 
                    );
				})}
			</div>
		</Wrapper>
	);
};
//Additional CSS
const Wrapper = styled.article`
	background: var(--clr-white);
	border-top-right-radius: var(--radius);
	border-bottom-left-radius: var(--radius);
	border-bottom-right-radius: var(--radius);
	position: relative;

	&::before {
		content: ' Repositories';
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(-100%);
		background: var(--clr-white);
		color: var(--clr-grey-5);
		border-top-right-radius: var(--radius);
		border-top-left-radius: var(--radius);
		text-transform: capitalize;
		padding: 0.5rem 1rem 0 1rem;
		letter-spacing: var(--spacing);
		font-size: 1rem;
	}
	.Repos {
		overflow: scroll;
		height: 380px;
		grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
		gap: 3rem 3rem;
		padding: 1rem 2rem;
	}
	article {
		transition: var(--transition);
		padding: 3rem 0.5rem;
		border-radius: var(--radius);
		grid-template-columns: auto 3fr;
		align-items: center;
		column-gap: 1rem;
		img {
			height: 100%;
			width: 45px;
			border-radius: 50%;
			object-fit: cover;
		}
		h3 {
			margin-bottom: 10;
		}
		h4 {
			margin-bottom: 10;
		}
		a {
			color: var(--clr-primary-5);
			border: 1px solid var(--clr-primary-5);
			padding: 0.25rem 0.75rem;
			border-radius: 1rem;
			text-transform: capitalize;
			letter-spacing: var(--spacing);
			transition: var(--transition);
			cursor: pointer;
			&:hover {
				background: var(--clr-primary-5);
				color: var(--clr-white);
			}
		}
	}
`;
//Exporting gitRepos
export default GitRepos;