// Importing required components and context provider
import React from 'react';
import RepoRadar from '../modules/RepoRadar';
import SidePanel from '../elements/SidePanel';
import RecentSearches from '../modules/RecentSearches';
import {RecentSearchProvider} from '../../utils/RecentSearchContext';

// Dashboard Functional Component
function Dashboard() {
    return (
        <RecentSearchProvider>
            <div className="flex lg:gap-5 gap-0 lg:flex-row flex-col" id="dashboard-wrapper">
                <SidePanel/>
                <div className="flex flex-col gap-1">
                    <RepoRadar/>
                    <RecentSearches/>
                </div>
            </div>
        </RecentSearchProvider>
    );
}

export default Dashboard;
