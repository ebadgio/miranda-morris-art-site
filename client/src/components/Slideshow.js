import React from 'react';

const slides = {
    0: 'slide-1',
    1: 'slide-2',
    2: 'slide-3'
};

let interval;
let timeout;

class Slideshow extends React.Component {

    constructor() {
        super();
        this.state = {
            slide: 0,
            opacity: 1,
        }
    }

    componentDidMount() {
        interval = setInterval(() => {
            this.setState({opacity: 0});
            timeout = setTimeout(() => {
                if (this.state.slide === 2) {
                    this.setState({slide: 0, opacity: 1});
                } else {
                    this.setState({slide: this.state.slide + 1, opacity: 1});
                }
            }, 600);

        }, 6000);

    }

    componentWillUnmount() {
        clearInterval(interval);
        clearTimeout(timeout);
    }

    render() {
        return(
            <div className="cover-wrapper w-full" id={slides[this.state.slide]} style={{opacity: this.state.opacity}}>
                <img style={{display: 'none'}} src="https://s3.us-east-2.amazonaws.com/mirandamorrisart/Slideshow+Landscape+Lavish+.jpg"/>
                <img style={{display: 'none'}} src="https://s3.us-east-2.amazonaws.com/mirandamorrisart/Slideshow+Renaissance+Woman.jpg"/>
                <img style={{display: 'none'}} src="https://s3.us-east-2.amazonaws.com/mirandamorrisart/Slideshow+Landscape+Witch+Doctor.jpg"/>

            </div>
        );
    }

}

export default Slideshow;