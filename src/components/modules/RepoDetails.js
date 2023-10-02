// Importing required components and icons
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Avatar, Chip,
    List,
    ListItem,
    ListItemSuffix,
    Typography
} from "@material-tailwind/react";
import {HeartIcon, ShareIcon, StarIcon, TrophyIcon} from "@heroicons/react/24/solid";
import React from "react";
// RepoDetails Functional Component

function RepoDetails({ repoData }) {
    return (
        // Accordion component for collapsing and expanding content
        <Accordion open={true} className="p-6">
            <AccordionHeader id="repo-result-header" className="justify-start gap-2">
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
    );
}
export default RepoDetails;


