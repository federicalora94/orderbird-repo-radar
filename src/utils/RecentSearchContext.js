import React, { createContext, useContext, useState } from 'react';
import { fetchRepository, calculatePopularity, isPopular } from './fetchRepository';

const RecentSearchContext = createContext();

export const useRecentSearches = () => {
    return useContext(RecentSearchContext);
};

export const RecentSearchProvider = ({ children }) => {
    const [recentSearches, setRecentSearches] = useState([]);
    const [recentRepoData, setRecentRepoData] = useState([]); // Add this line

    const addSearch = async (search, token) => {
        try {
            // Update recent searches
            setRecentSearches((prevSearches) => {
                const normalizedSearch = search.toLowerCase();
                const newSearches = prevSearches.filter(item => item.toLowerCase() !== normalizedSearch);
                newSearches.unshift(normalizedSearch);
                return newSearches.slice(0, 3);
            });

            // Fetch repository data
            const data = await fetchRepository(search, token);
            console.log("Fetched data:", data); // For debugging, remove this in production

            // Validate received data before using it
            if (data && data.owner && data.owner.login) {
                setRecentRepoData(prevData => [
                    ...prevData,
                    {
                        name: data.name,
                        owner: data.owner,
                        stars: data.stars,
                        forks: data.forks
                    }
                ].slice(0, 3));
            } else {
                // Handle absence of data, set defaults or log an error
            }
        } catch (error) {
            console.error('An error occurred:', error);
            // Handle the error, possibly by setting some state variable to display a user-friendly message
        }
    };

    return (
        <RecentSearchContext.Provider value={{ recentSearches, recentRepoData, addSearch }}>
            {children}
        </RecentSearchContext.Provider>
    );
};
