import { useEffect } from 'react';
import { fetchRepository, calculatePopularity, isPopular } from '../utils/fetchRepository';

function RepoRadar() {
    // Use the React useEffect hook to execute code when the component mounts
    useEffect(() => {
        // Fetch repository data from GitHub
        // Using the 'facebook/react' repository as an example
        fetchRepository('facebook/react', process.env.REACT_APP_GITHUB_API_TOKEN)
            .then(data => {
                // Destructure the required properties from the API response
                const { description, forks_count, name, owner, stargazers_count } = data;

                // Further destructure the owner object to get the avatar URL and login (owner name)
                const { avatar_url, login } = owner;

                // Calculate the repository's popularity score
                const score = calculatePopularity(stargazers_count, forks_count);

                // Determine if the repository is popular based on its score
                const popular = isPopular(score);

                // Log the fetched and calculated data (for demonstration purposes)
                console.log(`Description: ${description}, Forks: ${forks_count}, Name: ${name}, 
                     Avatar URL: ${avatar_url}, Owner: ${login}, Stars: ${stargazers_count}, 
                     Score: ${score}, Is Popular: ${popular}`);
            })
            .catch(error => {
                // Log any errors that occur during the fetch operation
                console.error('An error occurred:', error);
            });
    }, []); // Empty dependency array ensures this useEffect runs only once, similar to componentDidMount

    return (
        <div>
            <h1>Repo Radar Page</h1>
            <p>Here, you can search for GitHub repositories.</p>
        </div>
    );
}

export default RepoRadar;
