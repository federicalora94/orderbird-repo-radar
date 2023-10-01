// Importing required modules and components
import React, {useState, useEffect} from 'react';
import {
    Input,
    Card,
    CardBody,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Avatar,
    Typography,
    List,
    ListItem,
    ListItemSuffix,
    Chip,
    Alert
} from '@material-tailwind/react';
import {StarIcon, HeartIcon, ShareIcon, TrophyIcon} from '@heroicons/react/24/solid';
import {fetchRepository, calculatePopularity, isPopular} from '../utils/fetchRepository';
import {useRecentSearches} from '../utils/RecentSearchContext';

/**
 * RepoRadar Component
 * This component serves two main functionalities:
 * 1. Allows the user to search for GitHub repositories.
 * 2. Fetches and displays details about the repository.
 */

function RepoRadar() {
    // State variables
    const [repoName, setRepoName] = useState('');  // for repository name input
    const [repoData, setRepoData] = useState(null);  // for storing fetched repository data
    const [open, setOpen] = useState(false);  // for controlling the accordion open/close
    const [errorMessage, setErrorMessage] = useState('');  // for showing error messages
    const [showAlert, setShowAlert] = useState(false);  // for controlling alert visibility

    // Reset state when repoName changes
    useEffect(() => {
        setRepoData(null);
        setOpen(false);
    }, [repoName]);

    // Function to normalize user input
    const normalizeInput = (input) => input.toLowerCase().replace(/\s+/g, '');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const normalizedRepoName = normalizeInput(repoName);

        if (!normalizedRepoName) {
            setErrorMessage('* Please enter a valid repository name.');
            setShowAlert(false);
            return;
        }

        setShowAlert(true);

        fetchRepository(normalizedRepoName, process.env.REACT_APP_GITHUB_API_TOKEN)
            .then(data => {
                if (data && data.owner) {
                    const score = calculatePopularity(data.stargazers_count, data.forks_count);
                    const popular = isPopular(score);
                    setRepoData({...data, score, popular});
                    setOpen(true);
                    addSearch(repoName);
                    setErrorMessage('');
                    setShowAlert(false);
                } else {
                    setErrorMessage('Repository not found.');
                }
            })
            .catch(error => {
                setErrorMessage('An unknown error occurred.');
                console.error('An error occurred:', error);
            });
    };

    // Fetch addSearch function from RecentSearchContext
    const {addSearch} = useRecentSearches();

    // Render
    return (
        <div className="flex flex-col items-center">
            <Card className="w-[32rem] mb-4 drop-shadow-none shadow-none mt-7 bg-transparent">
                <CardBody>
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            label="Enter a repository name"
                            value={repoName}
                            onChange={(e) => {
                                setRepoName(e.target.value);
                                setErrorMessage('');  // Clear the error message when the user starts typing
                            }}
                            onFocus={() => setErrorMessage('')}  // Clear the error message when the input is focused
                        />
                    </form>
                    {/* Render repository details in an accordion if data is available */}
                    {repoData && (
                        <Accordion open={open} className="p-6">
                            <AccordionHeader id="repo-result-header" className="justify-start gap-5">
                                <Avatar src={repoData.owner.avatar_url} alt={`${repoData.owner.login}'s avatar`}
                                        size="sm" withBorder color="blue" className="p-0.5"/>
                                <Typography variant="h6" className="font-bold">{repoData.name}</Typography>
                                <Typography variant="h6" color="gray"
                                            className="font-normal">by {repoData.owner.login}</Typography>
                            </AccordionHeader>
                            <AccordionBody>
                                <List>
                                    <ListItem>
                                        <div className="mr-4">
                                            <StarIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                        </div>
                                        Stars
                                        <ListItemSuffix>
                                            <Chip value={repoData.stargazers_count} variant="ghost" size="sm"
                                                  className="rounded-full"/>
                                        </ListItemSuffix>
                                    </ListItem>
                                    <ListItem>
                                        <div className="mr-4">
                                            <ShareIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                        </div>
                                        Forks
                                        <ListItemSuffix>
                                            <Chip value={repoData.forks_count} variant="ghost" size="sm"
                                                  className="rounded-full"/>
                                        </ListItemSuffix>
                                    </ListItem>
                                    <ListItem>
                                        <div className="mr-4">
                                            <TrophyIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                        </div>
                                        Score
                                        <ListItemSuffix>
                                            <Chip value={repoData.score} variant="ghost" size="sm"
                                                  className="rounded-full"/>
                                        </ListItemSuffix>
                                    </ListItem>
                                    <ListItem>
                                        <div className="mr-4">
                                            <HeartIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                        </div>
                                        Is Popular
                                        <ListItemSuffix>
                                            <Chip
                                                value={repoData.popular ? 'Yes' : 'No'}
                                                variant="ghost"
                                                size="sm"
                                                className={`rounded-full ${repoData.popular ? 'bg-green-200' : 'bg-red-700 text-white'}`}
                                            />
                                        </ListItemSuffix>
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>
                    )}
                </CardBody>
            </Card>
        </div>
    );
}

export default RepoRadar;
