import { StickyNavbar } from './StickyNavbar';  // Adjust the path as needed

function Header() {
    return (
        <header className="sticky top-0">
            <StickyNavbar />
        </header>
    );
}

export default Header;