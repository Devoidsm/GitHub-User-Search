//imports used
import React, { useState, useEffect } from 'react';
import defaultUser from './defaultData.js/defaultUser.js';
import defaultRepos from './defaultData.js/defaultRepos.js';
import defaultCommits from './defaultData.js/defaultCommits.js';
//uses and additional require
const axios = require('axios').default;
//Creating ReactContent
const GitInfo = React.createContext();
//function used to get information from the restfull github api
const GitInformation = ({ children }) => {
	//information being pulled
	const [gitUser, setgitUser] = useState(defaultUser);
	const [repos, setRepos] = useState(defaultRepos);
	//I am struggling to asiagn the commits to specific Repos inside of the Map functions so that it gathers all commits in a Get repo fetch
	const [commits, setCommits] = useState(defaultCommits);
	//request loading
	const [requests, setRequests] = useState(0);
  	const [Loading, setLoading] = useState(false);

	//Function used to search Git user
	const searchGitUser = async (gitUser) => {
		setLoading(true);
		const user = await axios.get(`https://api.github.com/users/${gitUser}`).catch((err) => console.log(err));

		console.log(user);
		if (user) {
			setgitUser(user.data);
			console.log(user);
			const { login } = user.data;
			const repo1 = "My-Cake-Website";
			const repo2 = "Hangman";

			await Promise.allSettled([
				//used to get all Repos
				axios.get(`https://api.github.com/users/${login}/repos`),
				//Should be used to get all commits in a repo
				axios.get(`https://api.github.com/repos/${login}/${repo1}/commits`),
			])
				.then((results) => {
					const [repos, commits] = results;
					const correctStatus = 'fulfilled';
					//check if there are repos
					if (repos.status === correctStatus) {
						setRepos(repos.value.data);
					}
					//check if there are Commits
					if (commits.status === correctStatus) {
						setCommits(commits.value.data);
					}
				})
				.catch((err) => console.log(err));
		} else {
			console.log('Username entered does not exist');
		}
		getRemainderRequests();
		setLoading(false);
	};
	//check the Rate limit
	const getRemainderRequests = () => {
		axios.get('https://api.github.com/rate_limit')
			.then(({ data }) => {
				let { remainder } = data.rate;
				setRequests(remainder);
				console.log('getRemainderRequests', remainder);
				if (remainder === 0) {
					console.log('Unfortunatley, you have exceeded your hourly rate limit!');
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
	//When fail occurs
	useEffect(getRemainderRequests, []);
	return (
		<GitInfo.Provider
			value={{ gitUser, repos, commits, requests, Loading, searchGitUser }}
		>
			{children}
		</GitInfo.Provider>
	);
};
export { GitInformation, GitInfo };