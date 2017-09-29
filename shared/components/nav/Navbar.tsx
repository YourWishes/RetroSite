import React from 'react';
import SiteLogo from '../logo/SiteLogo';

class Navbar extends React.Component<NavbarProps> {
    constructor(props: NavbarProps) {
        super(props);
    }

    render() {
        let links: Array<any> = [
            { href: "#", text: "Home" },
            { href: "#", text: "PlayStation" },
            { href: "#", text: "XBOX" },
            { href: "#", text: "Nintendo" },
            { href: "#", text: "Retro" }
        ];

        let desktopLinks: Array<any> = [];
        for (let i: number = 0; i < links.length; i++) {
            desktopLinks.push(
                <a href={links[i].href} className="nav-link">{links[i].text}</a>
            );
        }

        return (
            <nav className="navbar">
                <div className="navbar-full">
                    <SiteLogo size="auto" />
                    {desktopLinks}
                </div>
            </nav>
        );
    }
}

export interface NavbarProps {

}
    
export default Navbar;