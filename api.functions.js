/**
 *  Function to Show  data, like login, name, location, public_repos, followers, following
 */
async function getUserData() {
    const response = await fetch(`https://api.github.com/users/baishyaRahul`);
    const user = await response.json();
    const data = {
        'login': user.login,
        'name': user.name,
        'location': user.location,
        'public_repos': user.public_repos,
        'followers': user.followers,
        'following': user.following
    };
    return data;
}

/**
 *  Function to Show data about that particular project
 */
async function userRepoData(userName, repoName) {
    const response = await fetch(`https://api.github.com/repos/${userName}/${repoName}`);
    const repoData = await response.json();
    const data = {
        'repo_name': repoData.name,
        'repo_visible_to': repoData.visibility,
        'description': repoData.description,
        'is_forked': repoData.fork === false ? 'Not forked' : 'Forked',
        'no_of_forks': repoData.forks

    }
    return data;
}

/**
 *  Function to create issues in the repo
 */

async function createIssueInRepo(number) {
    const response = await fetch(`https://api.github.com/repos/${userName}/${repoName}/issues/${number}`);
    const issueData = await response.json();
    return issueData;
}
module.exports = { getUserData, userRepoData, createIssueInRepo };