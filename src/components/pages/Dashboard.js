import React from 'react';
import RepoRadar from '../RepoRadar';
import SidePanel from '../SidePanel';
import RecentSearches from '../RecentSearches';
import { RecentSearchProvider } from '../../utils/RecentSearchContext';

function Dashboard() {
    return (
        <RecentSearchProvider>
            <div className="flex gap-5" id="dashboard-wrapper">
                <SidePanel />
                <div className="flex flex-col gap-1">
                    <RepoRadar />
                    <RecentSearches />
                </div>
            </div>
        </RecentSearchProvider>
    );
}

export default Dashboard;
