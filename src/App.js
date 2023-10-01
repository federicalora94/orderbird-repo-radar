// Core React imports
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

// Application-specific component imports
import Header from './components/elements/Header';
import Main from './components/elements/Main';
import {Footer} from './components/elements/Footer';

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
        <Router>

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
        </Router>


    );
}

export default App;
