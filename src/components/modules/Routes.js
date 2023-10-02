// React library import
import React from 'react';

// Importing Route and Routes components from 'react-router-dom' for client-side routing
import { Route, Routes } from 'react-router-dom';

// Importing specific application views/components
import GetStarted from '../pages/GetStarted';
import RepoRadar from './RepoRadar';
import Dashboard from "../pages/Dashboard";

/**
 * RoutesComponent Function
 *
 * This function component defines the routes used in the application.
 * It uses the `Routes` and `Route` components from 'react-router-dom' to create
 * a client-side routing mechanism.
 *
 * @returns JSX.Element The routes defined for the application
 */
function RoutesComponent() {
    return (
        // Define the application routes within a `Routes` component
        <Routes>
            {/* Index Route: Handles the root URL path */}
            <Route index element={<GetStarted />} />

            {/* Repo Radar Route: Handles the /repo-radar URL path */}
            <Route path="/repo-radar" element={<Dashboard />} />

        </Routes>
    );
}

export default RoutesComponent;
