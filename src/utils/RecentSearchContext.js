import React, { createContext, useContext, useState } from 'react';

const RecentSearchContext = createContext();

export const useRecentSearches = () => {
    return useContext(RecentSearchContext);
};

export const RecentSearchProvider = ({ children }) => {
    const [recentSearches, setRecentSearches] = useState([]);

    const addSearch = (search) => {
        setRecentSearches((prevSearches) => {
            // Remove duplicates if they exist
            const newSearches = prevSearches.filter(item => item !== search);

            // Add new search at the beginning
            newSearches.unshift(search);

            // Trim the array to keep only the 3 most recent searches
            return newSearches.slice(0, 3);
        });
    };

    return (
        <RecentSearchContext.Provider value={{ recentSearches, addSearch }}>
            {children}
        </RecentSearchContext.Provider>
    );
};
