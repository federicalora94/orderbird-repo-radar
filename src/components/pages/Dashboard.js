import React from 'react';
import RepoRadar from '../RepoRadar';
import SidePanel from '../SidePanel';
import RecentSearches from '../RecentSearches';
import {RecentSearchProvider} from '../RecentSearchContext';

function Dashboard() {
    return (
        <RecentSearchProvider>
            <div className="flex gap-5" id="dashboard-wrapper">
                <SidePanel/>
                <RepoRadar/>
            </div>
        </RecentSearchProvider>
    );
}

export default Dashboard;
