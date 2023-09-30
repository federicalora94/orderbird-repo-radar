// Core React imports
import React from 'react';

// Application-specific component imports
import Header from './components/Header';
import Main from './components/Main';
import {Footer} from './components/Footer';

/**
 * App Component
 *
 * This is the root component of the application. It orchestrates the layout
 * by composing the Header, Main, and Footer components.
 *
 * @returns {JSX.Element} The rendered component
 */
function App() {
    return (
        <div className="App">
            {/*
        Wrapper class for the main layout components.
        Purpose: To group Header, Main, and Footer for potential layout styling.
      */}
            <div className="app-wrapper">

                {/*
          Header Section
          Includes: Navigation bar, any top-level application information
        */}
                <Header/>

                {/*
          Main Content Section
          Includes: Form for GitHub repository search, Results display area
        */}
                <Main/>

                {/*
          Footer Section
          Includes: Footer information, copyright, etc.
        */}
                <Footer/>

            </div>
        </div>
    );
}
export default App;
