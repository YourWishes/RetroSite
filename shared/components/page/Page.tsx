import React from 'react';

class Page extends React.Component<PageProps> {
    constructor(props: PageProps) {
        super(props);
    }

    render() {
        return (
            <div className={"page page-" + this.props.page}>
                <div className="page-inner">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export interface PageProps {
    page:string
}

export default Page;