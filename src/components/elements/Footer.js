// Importing required modules
import { Typography } from "@material-tailwind/react"; // Typography component from material-tailwind
import { Link } from "react-router-dom"; // Link component from react-router

// Footer links data: An array of objects containing label and path for each link
const footerLinks = [
    { label: 'About', path: '/ ' },
    { label: 'License', path: '/ ' },
    { label: 'Contribute', path: '/ ' },
    { label: 'Contact', path: '/ ' },
];

// Footer Functional Component
export function Footer() {
    return (
        // Footer container with responsive classes for alignment and styling
        <footer className="flex items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center lg:justify-start px-0 md:px-10">

            <ul className="flex items-center gap-y-2 gap-x-4 flex-nowrap">
                {
                    // Mapping over footerLinks to generate list items dynamically
                    footerLinks.map((link, index) => (
                        <li key={index}>
                            {/* Using Typography component to style the link text*/}
                            <Typography
                                as={Link} // Making Typography component act as Link
                                to={link.path} // Destination URL
                                variant="small" // Text variant
                                color="blue-gray" // Text color
                                className="p-1 font-medium transition-colors hover:text-blue-500 focus:text-blue-500" // Additional styling & hover effect
                            >
                                {link.label}
                            </Typography>
                        </li>
                    ))
                }
            </ul>
        </footer>
    );
}
