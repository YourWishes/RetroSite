import React from 'react';
import { Link } from 'react-router-dom';

class SiteLogo extends React.Component<SiteLogoProps, SiteLogoState> {
    constructor(props:SiteLogoProps) {
        super(props);

        //Set Initial State
        let url = "/";
        if (props.url) url = props.url;

        this.state = {
            url: url,
            size: this.props.size ? this.props.size : "lg"
        };
    }

    render() {
        let containerClasses = "logo-area logo-" + this.state.size;
        let el = (
            <div>
                <div className="logo-fix">
                    <div className="logo-square-0"></div>
                    <div className="logo-square-1"></div>
                </div>
                <span>
                    ye
                    <sub>yeeeeet</sub>
                </span>
            </div>
        );

        if (this.state.url) {
            if (this.state.url.startsWith("http")) {
                return (
                    <div className={containerClasses}>
                        <a href={this.state.url} className="logo no-select">
                            {el}
                        </a>
                    </div>
                );
            }

            return (
                <div className={containerClasses}>
                    <Link to={this.state.url} className="logo no-select">
                        {el}
                    </Link>
                </div>
            )
        } else {
            return <div className={containerClasses}><div className="logo no-select">{el}</div></div>
        }
    }
}

export interface SiteLogoProps {
    url?: string
    size?: string
}

export interface SiteLogoState {
    url?: string,
    size:string
}

export default SiteLogo;