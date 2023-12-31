//imports
import React from 'react';
import { GitInfo } from '../gitHubInfo/gitHubInfo.js';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdOutlineMailOutline  } from 'react-icons/md';
//Searched User Profile
const Profile = () => {
    //GEtting gitUser from GitInfoProvider
    const { gitUser } = React.useContext(GitInfo);
    //Getting Information needed
    const {
        avatar_url,
        name,
        html_url,
        company,
        email,
        location,
        bio,
        login,
    } = gitUser;
    //Displaying Profile
    return (
        <Wrapper>
            {/*header display with name, login and Button used to get to the Users Pages*/}
            <header>
                <img src={avatar_url} alt={name}></img>
                <div>
                    <h4>{name || login}</h4>
                    <p>@{login || 'User Login Failed to load'}</p>
                </div>
                <a href={html_url}>Go to GitHub Page</a>
            </header>
            <p className='bio'>{bio}</p>
            {/*Location Links and display*/}
            <div className='links'>
                <p>
                    <MdBusiness></MdBusiness>
                    {company || 'Unemployed'}
                </p>
                <p>
                    <MdLocationOn></MdLocationOn>
                    {location || 'Throughout Heaven and Earth'}
                </p>
                <p>
                    <MdOutlineMailOutline ></MdOutlineMailOutline>
                    {email || 'Unknown Email'}
                </p>
            </div>
        </Wrapper>
    );
};
//Additional CSS styling
const Wrapper = styled.article`
	background: var(--clr-white);
	padding: 1.5rem 2rem;
	border-top-right-radius: var(--radius);
	border-bottom-left-radius: var(--radius);
	border-bottom-right-radius: var(--radius);
	position: relative;
	&::before {
		content: 'Profile';
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
	header {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		column-gap: 1rem;
		margin-bottom: 1rem;
		img {
			width: 75px;
			height: 75px;
			border-radius: 50%;
		}
		h4 {
			margin-bottom: 0.25rem;
		}
		p {
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
	.bio {
		color: var(--clr-grey-3);
	}
	.links {
		p,
		a {
			margin-bottom: 0.25rem;
			display: flex;
			align-items: center;
			svg {
				margin-right: 0.5rem;
				font-size: 1.3rem;
			}
		}
		a {
			color: var(--clr-primary-5);
			transition: var(--transition);
			svg {
				color: var(--clr-grey-5);
			}
			&:hover {
				color: var(--clr-primary-3);
			}
		}
	}
`;
//Exporting File
export default Profile;