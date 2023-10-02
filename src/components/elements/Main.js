// Importing essential modules and components
import React from 'react';
import RoutesComponent from '../modules/Routes';

/**
 * Main Function Component
 *
 * This component serves as the main content area of the application.
 * It's responsible for rendering the RoutesComponent, which in turn handles
 * the routing logic for the application.
 *
 * @returns JSX.Element - The main content area
 */
function Main() {
    return (
        // Defining the main content area
        <main className="main-content p-4 pt-0 flex flex-col items-center justify-center">
            {/*
              RoutesComponent takes care of the application routing.
              It renders the component based on the current route.
            */}
            <RoutesComponent />
        </main>
    );
}

// Exporting the Main component for use in other parts of the application
export default Main;
