// Importing required modules and components
import RepoRadar from "./RepoRadar";  // Importing RepoRadar component (not used in this component, consider removing if unnecessary)
import { useRecentSearches } from "../../utils/RecentSearchContext";  // Importing custom React Hook for managing recent searches
import {
    Card,
    CardBody
} from '@material-tailwind/react';  // Importing Card and CardBody components from material-tailwind

// RecentSearches Functional Component
function RecentSearches() {
    // Destructuring recentSearches and recentRepoData from the custom Hook
    const { recentSearches, recentRepoData } = useRecentSearches();

    return (
        // Container div to hold the Card component
        <div className="w-full">
            {/* Card component with custom width, margin and shadow*/}
            <Card className="w-[32rem] mb-4 shadow-md bg-transparent">

                {/* CardBody component to hold the inner content*/}
                <CardBody>
                    {/* Title of the card*/}
                    <h3 className="text-lg font-bold mb-4">Recent Searches</h3>

                    {/* Unordered list to display the recent searches*/}
                    <ul>
                        {
                            // Mapping over recentSearches array to generate list items
                            recentSearches.map((search, index) => (
                                // Each list item has a unique key (index in this case) and margin-bottom for spacing
                                <li key={index} className="mb-2">
                                    {search}
                                </li>
                            ))
                        }
                    </ul>
                </CardBody>
            </Card>
        </div>
    );
}

// Exporting the RecentSearches component for use in other parts of the application
export default RecentSearches;
