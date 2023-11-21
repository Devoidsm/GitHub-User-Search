const axios = require('axios').default;
let login = 'Devoidsm';
//Get GitHub User
const getGithubUser = async (req, res) => {
    const { gitUser } = req.params;
    try {
        const user = await axios.get(`https://api.github.com/users/${gitUser}`).catch((err) => console.log(err));
        console.log(user.data);
        login = gitUser;
        console.log(login);
        res.status(200).send(user.data)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
//Get Github Repos of a user
const getGithubRepos = async (req, res) => {
    //const { login } = req.params;
    try {
        const repos = await axios.get(`https://api.github.com/users/${login}/repos`).catch((err) => console.log(err));
        console.log(repos.data);
        res.status(200).send(repos.data)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
//Get Github Commits of a User's Repo
const getGithubCommits = async (req, res) => {
    const { repo } = req.params;
    try {
        const commits = await axios.get(`https://api.github.com/repos/${login}/${repo}/commits`).catch((err) => console.log(err));
        console.log(commits.data);
        res.status(200).send(commits.data)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
//exporting modules
module.exports = {
    getGithubUser,
    getGithubRepos,
    getGithubCommits,
}   