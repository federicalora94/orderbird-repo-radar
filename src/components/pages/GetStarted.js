// Import required modules and components
import React from 'react';
import { StarIcon, MagnifyingGlassIcon, CheckCircleIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

// Initialize feature data, including icons and descriptions
const features = [
    {
        name: 'Simple Search, Instant Results',
        description: 'Discover GitHub repositories effortlessly. Just type the repository name in the search bar, and we\'ll immediately provide you with all the essential details. No more navigating through endless tabs and pages.',
        icon: MagnifyingGlassIcon,
    },
    {
        name: 'Comprehensive Details',
        description: 'Get to know more than just the repository\'s name. We bring you its author, the number of stars it has garnered, and even the number of forks. All this is displayed in a user-friendly layout, providing a comprehensive snapshot at a glance.',
        icon: DocumentTextIcon,
    },
    {
        name: 'Popularity Indicator',
        description: 'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: StarIcon,
    },
    {
        name: 'Fast and Reliable',
        description: 'Performance is a priority. Our app ensures that your search results are displayed in under 0.5 seconds. Whether you\'re a casual browser or a serious researcher, you\'ll find what you\'re looking for in no time.',
        icon: CheckCircleIcon,
    }
];

// GetStarted component serves as the landing section of the application
function GetStarted() {
    return (
        // Root container with padding settings
        <div className="py-10 sm:py-12">
            {/* Central content container */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header container with text centering on large screens */}
                <div className="mx-auto max-w-2xl lg:text-center">
                    {/* Subtitle */}
                    <h2 className="text-base font-semibold leading-3 text-main-theme uppercase">try now our new</h2>
                    {/* Main Title */}
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Repo-radar</h1>
                    {/* Description Text */}
                    <p className="mt-6 mb-6 text-lg leading-8 text-gray-600">
                        Why guess when you can know? Our popularity indicator tells you straight up whether a repository
                        is the talk of the dev community or just another codebase. Make smarter decisions with real-time
                        popularity metrics.
                    </p>
                    {/* Button linking to the repo search, shown on medium screens and up */}
                    <div className="hidden sm:mb-2 sm:flex sm:justify-center">
                        <div
                            className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            <Link to="/repo-radar" className="font-semibold text-main-theme">
                                <span className="absolute inset-0" aria-hidden="true"/>
                                Search Repos Now
                                {/* Arrow Icon */}
                                <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Features list container */}
                <div className="mx-auto mt-10 max-w-2xl sm:mt-10 lg:mt-24 lg:max-w-4xl">
                    {/* Features grid layout */}
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {/* Map through features to create each feature card */}
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-10 sm:pl-16">
                                {/* Feature title with icon */}
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div
                                        className="absolute left-0 top-0 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-main-theme">
                                        <feature.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" aria-hidden="true"/>
                                    </div>
                                    {feature.name}
                                </dt>
                                {/* Feature description */}
                                <dd className="mt-2 text-base leading-7 text-gray-700">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;
