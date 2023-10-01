import React, { useState, useEffect } from 'react';
import {
    Input,
    Card,
    CardBody,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Avatar,
    Typography
} from "@material-tailwind/react";
import { fetchRepository, calculatePopularity, isPopular } from '../utils/fetchRepository';

/**
 * RepoRadar Component
 * This component allows the user to search for GitHub repositories,
 * fetches their details, and displays them in a collapsible accordion.
 */
function RepoRadar() {
    // State Variables
    const [repoName, setRepoName] = useState('');  // For storing the repository name to search
    const [repoData, setRepoData] = useState(null);  // For storing the fetched repository data
    const [open, setOpen] = useState(false);  // For controlling the accordion open/close state

    useEffect(() => {
        setRepoData(null);
        setOpen(false);
    }, [repoName]);

    /**
     * Handles the form submission.
     * Fetches the repository data and updates the state.
     */
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent default form behavior

        // Fetch Repository Data
        fetchRepository(repoName, process.env.REACT_APP_GITHUB_API_TOKEN)
            .then(data => {
                if (data && data.owner) {
                    const score = calculatePopularity(data.stargazers_count, data.forks_count);
                    const popular = isPopular(score);
                    setRepoData({ ...data, score, popular });  // Update state with fetched data and calculated values
                    setOpen(true);  // Open the accordion to display fetched data
                } else {
                    console.error('Incomplete or malformed data received from API');
                }
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
    };

    return (

        <div className="flex flex-col items-center">
            {/* Search Form encapsulated in a Card */}
            <Card className="w-[32rem] mb-4 shadow-md">
                <CardBody>
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            label="Repository Name"
                            value={repoName}
                            onChange={(e) => setRepoName(e.target.value)}
                        />
                    </form>
                </CardBody>


            {/* Repository Details displayed in an Accordion, if data is available */}
            {repoData && (
                <Accordion open={open} className="p-6">
                    <AccordionHeader id="repo-result-header" className="justify-start gap-5">
                        {/* Avatar and Repository Details */}
                        <div className="flex items-center gap-4">
                            <Avatar src={repoData.owner.avatar_url} alt={`${repoData.owner.login}'s avatar`} size="sm" withBorder={true} color="blue" className="p-0.5" />
                            <div className="flex items-center gap-3">
                                <Typography variant="h3">{repoData.name}</Typography>
                                <Typography variant="h7" color="gray" className="font-normal">
                                    by {repoData.owner.login}
                                </Typography>
                            </div>
                        </div>
                    </AccordionHeader>
                    <AccordionBody>
                        {/* Additional Repository Details */}
                        <p>{repoData.description}</p>
                        <p>Stars: {repoData.stargazers_count}</p>
                        <p>Forks: {repoData.forks_count}</p>
                        <p>Score: {repoData.score}</p>
                        <p>Is Popular: {repoData.popular ? 'Yes' : 'No'}</p>
                    </AccordionBody>
                </Accordion>
            )}
            </Card>
        </div>

    );
}

export default RepoRadar;
