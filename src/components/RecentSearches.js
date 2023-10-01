import React from 'react';
import { useRecentSearches } from '../utils/RecentSearchContext';
import {
    Card,
    CardBody,

} from "@material-tailwind/react";
function RecentSearches() {
    const { recentSearches } = useRecentSearches();

    return (
        <div className="w-full">
            <Card className="w-[32rem] mb-4 shadow-md bg-transparent">
                <CardBody>
            <h3 className="text-xl font-bold mb-4">Recent Searches</h3>
            <ul>
                {recentSearches.map((search, index) => (
                    <li key={index} className="mb-2">
                        {search}
                    </li>
                ))}
            </ul>
                    </CardBody>
            </Card>
        </div>
    );
}

export default RecentSearches;
