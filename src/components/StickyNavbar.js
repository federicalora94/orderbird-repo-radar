// Importing essential modules and components
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

/**
 * NavList Function
 *
 * This functional component renders the list of navigation links.
 *
 * @returns JSX.Element - The navigation list
 */
function NavList() {
    return (
        // Defining the navigation list structure and styling
        <ul className="divide-y divide-dashed md:divide-y-0 my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3.5">
            {/* Individual navigation items */}
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
                <Link to="/" className="flex items-center hover:text-blue-500 transition-colors">Get Started</Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
                <Link to="/repo-radar" className="flex items-center hover:text-blue-500 transition-colors">Repo-radar</Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
                <Link to="/faq" className="flex items-center hover:text-blue-500 transition-colors">FAQ</Link>
            </Typography>
        </ul>
    );
}

/**
 * StickyNavbar Function
 *
 * This functional component defines the sticky navigation bar.
 * It handles both desktop and mobile views.
 *
 * @returns JSX.Element - The navigation bar
 */
export function StickyNavbar() {
    // State variable for toggling mobile navigation
    const [openNav, setOpenNav] = useState(false);

    /**
     * handleWindowResize Function
     *
     * This function handles the window resizing event.
     * It closes the mobile navigation when the window width is greater than or equal to 960 pixels.
     */
    const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

    // useEffect to handle the window resize event listener
    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        // Cleanup: Remove the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    // Render the navigation bar
    return (
        <Navbar style={{ backdropFilter: 'none', WebkitBackdropFilter: 'none' }} className="mx-auto max-w-full px-6 md:px-40 py-2 sticky top-0 header-navigation">
            <div className="flex items-center justify-between text-blue-gray-900">
                {/* Desktop view navigation list */}
                <div className="hidden lg:block">
                    <NavList />
                </div>
                {/* Mobile view navigation toggle button */}
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
                </IconButton>
                {/* Company logo */}
                <a href="#" className="orderbird-navbar__logo-link">
                    <img src="/orderbird-logo.png" alt="Orderbird Logo" className="orderbird-navbar__logo-img" />
                </a>
            </div>
            {/* Mobile view navigation list */}
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}