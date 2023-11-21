//imports
import React from "react";
import styled from 'styled-components';
import { GitInfo } from '../gitHubInfo/gitHubInfo.js';
//Main gitRepos Function used to gather the user Commits and display their information
const GitCommits = () => {
	//getting Commits from GitInfo
	const { searchedRepo } = React.useContext(GitInfo);
	//returning Commits
	return (
		<Wrapper>
			<div className='Commits'>
				<ul>
					{searchedRepo.map((commit) => {
						return (
							<ul key={commit.node_id}>
								<li>Commit Message: {commit.commit.message}</li>
								<li>Commited by: {commit.commit.committer.name}</li>
								<li>Commit Date: {commit.commit.committer.date}</li>
								<br></br>
							</ul>
						);
					})}
				</ul>
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
	align-items: center;

	&::before {
		content: 'Commits';
		position: relative;
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
		text-align: center;
	}
	.Commits {
		overflow: scroll;
		align-items: center;
		height: 380px;
		grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
		gap: 3rem 3rem;
		padding: 1rem 2rem;
		text-align: center;
	}
	article {
		transition: var(--transition);
		padding: 3rem 0.5rem;
		border-radius: var(--radius);
		grid-template-columns: auto 3fr;
		align-items: center;
		text-align: center;
		column-gap: 1rem;
		img {
			height: 100%;
			width: 45px;
			border-radius: 50%;
			object-fit: cover;
		}
		h4 {
			margin-bottom: 0;
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
//Exporting GitCommits
export default GitCommits;