import React from 'react';
import utils from './../../utils/index';

class HomePageBox extends React.Component<HomePageBoxProps> {
    videoBox: HTMLDivElement | null;
    video: HTMLVideoElement | null;

    onVideoCanPlayBind:EventListener;

    constructor(props: HomePageBoxProps) {
        super(props);

        //Video Events
        if (this.props.video) {
            this.onVideoCanPlayBind = this.onVideoCanPlay.bind(this);//Thanks for that Typescript!
        }
    }

    onVideoCanPlay(): void {
        //Video is able to be played
        if (!this.videoBox) return;
        utils.HTMLElement.removeClass(this.videoBox, "loading");//Done loading!

        //No need to listen anymore.
        if (!this.video) return;
        this.video.removeEventListener('canplay', this.onVideoCanPlayBind);
    }

    componentDidMount() {
        if (this.video) {
            //Awesome so let's make a listener that shows the video when it's ready to be played.
            this.video.addEventListener('canplay', this.onVideoCanPlayBind);
        }
    }

    componentWillUnmount() {
        if (this.video) {
            this.video.removeEventListener('canplay', this.onVideoCanPlayBind);
        }
    }

    render() {
        let inners = [];

        //Add the Box Image
        inners.push(
            <div className="box-image" key="box-image">
                <img src={this.props.image} />
            </div>
        );

        //Video?
        if (this.props.video) {
            //This box has a video!
            let type:string = "video/mp4";//TODO determine type.

            inners.push (
                <div className="box-overlay box-video loading" ref={e => { this.videoBox = e }} key="box-video">
                    <video ref={e => { this.video = e }} loop autoPlay={true}>
                        <source src={this.props.video} type={type}  />
                    </video>
                </div>
            );
        }

        if (this.props.title) {
            inners.push(
                <div className="box-overlay box-title">
                    {this.props.title}
                </div>
            );
        }

        return (
            <div className={"box box-" + this.props.box}>
                <div className="box-inner">
                    {inners}
                </div>
            </div>
        )
    }
}

export interface HomePageBoxProps {
    box: number,
    image: string,
    video?: string,
    title?: string
    classes?:string
}

export default HomePageBox;