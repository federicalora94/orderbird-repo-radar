import { StickyNavbar } from './StickyNavbar';
import { useLocation } from 'react-router-dom';

function Header() {
    // Use the useLocation hook to get the current pathname
    const location = useLocation();
    const currentPage = location.pathname; // Get the current pathname

    // Define class names based on the current page
    const headerClassName = `sticky top-0 z-50 mb-5 ${currentPage === "/repo-radar" ? 'bg-transparent' : 'bg-white'}`;

    return (
        <header className={headerClassName}>
            <StickyNavbar />
        </header>
    );
}
export default Header;
