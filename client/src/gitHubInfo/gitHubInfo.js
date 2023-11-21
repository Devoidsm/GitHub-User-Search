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
	const [searchedRepo, setCommits] = useState(defaultCommits);
	//request loading
	const [requests, setRequests] = useState(0);
  	const [loading, setLoading] = useState(false);
	//Function used to search Git user
	const searchGitUser = async (gitUser) => {
		setLoading(true);
		//Api Stores user Login and can only be changed when a new user is searched
		const user = await axios.get(`http://localhost:8080/users/${gitUser}`).catch((err) => console.log(err));

		console.log(user);
		if (user) {
			setgitUser(user.data);
			console.log(user);
			//const repo1 = "My-First-Cake-Website"
			await Promise.allSettled([
				//used to get all Repos
				axios.get(`http://localhost:8080/repos`),
				//Should be used to get all commits in a repo
				//axios.get(`/commits/:repo`),
			])
				.then((results) => {
					const [repos] = results;
					const correctStatus = 'fulfilled';
					//check if there are repos
					if (repos.status === correctStatus) {
						setRepos(repos.value.data);
					}
				})
				.catch((err) => console.log(err));
		} else {
			console.log('Username entered does not exist');
		}
		getRemainderRequests();
		setLoading(false);
	};
	//Function used to search Git Commits in a repo
	const searchRepoCommits = async (searchedRepo) => {
		setLoading(true);
		//Api Stores user Login and Repo is only needed for Search
		const commits = await axios.get(`http://localhost:8080/commits/${searchedRepo}`).catch((err) => console.log(err));

		console.log(commits);
		if (commits) {
			setCommits(commits.data);
			console.log(commits.data);
		} else {
			console.log('Repo entered does not exist');
		}
		getRemainderRequests();
		setLoading(false);
	};
	//check the Rate limit
	const getRemainderRequests = () => {
		axios.get('http://localhost:8080/rate_limit')
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
			value={{ gitUser, repos, searchedRepo, requests, loading, searchGitUser, searchRepoCommits }}
		>
			{children}
		</GitInfo.Provider>
	);
};
export { GitInformation, GitInfo };