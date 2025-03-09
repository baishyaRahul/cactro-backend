const express = require('express');
const app = express();
const { getUserData, userRepoData, createIssueInRepo } = require('./api.functions.js')
const port = 3000;
app.use(cors());

app.get('/', (req, res) => {
    res.send('GitHub API Integration')
});

app.get('/github', async (req, res) => {
    const userData = await getUserData();
    res.status(200).json({ userData });
});

app.get('/github/repos/:userName/:repoName', async (req, res) => {
    const userName = req.params.userName;
    const repoName = req.params.repoName;
    const repoData = await userRepoData(userName, repoName);
    return res.status(200).json({ repoData });
});

app.post('/github/repos/:userName/:repoName/issues/:issueCount', async (req, res) => {
    const userName = req.params.userName;
    const repoName = req.params.repoName;
    const issueCount = req.params.issueCount;

    const issueData = await createIssueInRepo(userName, repoName, issueCount);
    return res.status(200).json({ issueData });
});

app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`)
})