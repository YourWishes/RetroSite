import React from 'react';
import Page from './../../components/page/Page';
import HomePageBox from './HomePageBox';

class HomePage extends React.Component<HomePageProps> {
    constructor(props: HomePageProps) {
        super(props);
    }

    render() {
        let boxes:Array<any> = [];
        for (var i: number = 1; i < 20; i++) {
            boxes.push(<HomePageBox box={i} image={"serve/0.png"}>I am box {i}</HomePageBox>);
        }

        return (
            <Page page="home">
                <HomePageBox box={0} image={"serve/0.png"} video={"serve/1.mp4"}></HomePageBox>
                {boxes}
            </Page>
        )
    }
}

export interface HomePageProps {
}

export default HomePage;