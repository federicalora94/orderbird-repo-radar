/**
 * fetchRepository - Fetches repository data from GitHub API.
 *
 * @param {string} repoName - The full name of the repository to fetch (format: owner/repo).
 * @param {string} token - The GitHub API token for authenticated requests.
 *
 * @returns {Promise<Object>} - Returns a Promise that resolves to the JSON response object.
 */
function fetchRepository(repoName, token) {
    const githubEndpoint = `https://api.github.com/repos/${repoName}`;

    return fetch(githubEndpoint, {
        headers: { 'Authorization': `token ${token}` }
    })
        .then(response => {
            return response.json();
        });
}

/**
 * calculatePopularity - Calculates the popularity score of a GitHub repository.
 *
 * @param {number} stars - The number of stars the repository has.
 * @param {number} forks - The number of forks the repository has.
 *
 * @returns {number} - The popularity score.
 */
function calculatePopularity(stars, forks) {
    return (stars * 1) + (forks * 2);
}

/**
 * isPopular - Determines if a GitHub repository is popular.
 *
 * @param {number} score - The calculated popularity score of the repository.
 *
 * @returns {boolean} - Returns true if the repository is popular, otherwise false.
 */
function isPopular(score) {
    const popularityThreshold = 500;
    return score >= popularityThreshold;
}

export { fetchRepository, calculatePopularity, isPopular };
