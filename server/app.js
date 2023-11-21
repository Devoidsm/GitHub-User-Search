//base imports
const express = require("express");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
//Api config
const {
  getGithubUser,
  getGithubRepos,
  getGithubCommits,
} = require('./controllers/githubController.js');
//MiddleWares
//convert to JSON
app.use(express.json());
app.use(cors());
//app.use(express.static('build'))
//Listening
app.listen(PORT, () => { console.log('Server listening on https://localhost:8080') });
//API EndPoints
//Get github List
app.get('/users/:gitUser', getGithubUser)
//Get A Job from List based on Status
app.get('/repos', getGithubRepos)
//Get Commits of a specefic Repo
app.get('/commits/:repo', getGithubCommits)