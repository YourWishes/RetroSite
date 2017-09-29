import React from 'react';

import SiteLogo from './../logo/SiteLogo';
import Navbar from './Navbar';

class NavbarArea extends React.Component<NavbarAreaProps> {
    onScrollBind: any;//Function but typescript is a meanie.
    section: HTMLDivElement | null;

    constructor(props: NavbarAreaProps) {
        super(props);
    }

    onScroll(e: Event):void {
        if (!this.section) return;
        let p = -window.pageYOffset;//Short-hand

        this.section.style.backgroundPositionY = (p * 0.15) + "px";
    }

    componentDidMount() {
        this.onScrollBind = this.onScroll.bind(this);
        window.addEventListener('scroll', this.onScrollBind);
    }

    componentWillUnmount() {
        if (this.onScrollBind) {
            window.removeEventListener('scroll', this.onScrollBind);
            this.onScrollBind = null;
        }
    }

    render() {
        return (
            <div className="section navbar-area" ref={node => { this.section = node }} >
                <Navbar />
                <SiteLogo />
            </div>
        );
    }
}

export interface NavbarAreaProps {

}

export default NavbarArea;