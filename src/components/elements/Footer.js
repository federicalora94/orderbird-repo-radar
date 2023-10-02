import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const footerLinks = [
    { label: 'About', path: '/ ' },
    { label: 'License', path: '/ ' },
    { label: 'Contribute', path: '/ ' },
    { label: 'Contact', path: '/ ' },
];

export function Footer() {
    return (
        <footer className="flex   items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center lg:justify-start px-0 md:px-10">

            <ul className="flex items-center gap-y-2 gap-x-4 flex-nowrap">
                {footerLinks.map((link, index) => (
                    <li key={index}>
                        <Typography
                            as={Link}
                            to={link.path}
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-medium transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            {link.label}
                        </Typography>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
