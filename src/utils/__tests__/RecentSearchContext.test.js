import React from 'react';
import { render, act } from '@testing-library/react';
import { RecentSearchProvider, useRecentSearches } from '../RecentSearchContext';

// TestComponent to use the RecentSearchContext
const TestComponent = () => {
    const { recentSearches, addSearch } = useRecentSearches();

    // For testing purposes, adding a method to the window object to be able to modify state
    window.addSearch = addSearch;

    return <div data-testid="recent-searches">{recentSearches.join(',')}</div>;
};

describe('RecentSearchContext', () => {
    // Clear all instances and calls to constructor and all methods:
    afterEach(() => {
        window.addSearch = null;
    });

    it('provides recentSearches and addSearch method', () => {
        const { getByTestId } = render(
            <RecentSearchProvider>
                <TestComponent />
            </RecentSearchProvider>
        );

        // Initially, it should have an empty list
        expect(getByTestId('recent-searches').textContent).toBe('');

        // Adding a new search
        act(() => {
            window.addSearch('newSearch');
        });

        // Should update the list
        expect(getByTestId('recent-searches').textContent).toBe('newSearch');
    });

    it('keeps only the 3 most recent searches', () => {
        const { getByTestId } = render(
            <RecentSearchProvider>
                <TestComponent />
            </RecentSearchProvider>
        );

        // Adding 4 new searches
        act(() => {
            window.addSearch('newSearch1');
            window.addSearch('newSearch2');
            window.addSearch('newSearch3');
            window.addSearch('newSearch4');
        });

        // Should keep only the 3 most recent searches
        expect(getByTestId('recent-searches').textContent).toBe('newSearch4,newSearch3,newSearch2');
    });

    it('removes duplicates when adding the same search', () => {
        const { getByTestId } = render(
            <RecentSearchProvider>
                <TestComponent />
            </RecentSearchProvider>
        );

        // Adding the same search multiple times
        act(() => {
            window.addSearch('newSearch');
            window.addSearch('newSearch');
        });

        // Should remove duplicates
        expect(getByTestId('recent-searches').textContent).toBe('newSearch');
    });
});
