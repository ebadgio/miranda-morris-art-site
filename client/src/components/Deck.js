import React from 'react';

import Photo from './Photo';

let intervalId;

class Deck extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            photos: props.photos,
            windowWidth: window.innerWidth,
            size: props.size
        };
    }

    componentDidMount() {
        intervalId = setInterval(() => this.setState({windowWidth: window.innerWidth}), 50);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({photos: nextProps.photos, size: nextProps.size});
    }

    componentWillUnmount() {
        clearInterval(intervalId);
    }

    small() {
        let sendWidth;
        let margin = true;

        if (this.state.windowWidth > 900) {
            sendWidth = '20%';
        } else if (this.state.windowWidth > 750) {
            sendWidth = '25%'
        } else if (this.state.windowWidth > 400) {
            sendWidth = '40%';
        } else {
            sendWidth = '100%';
            margin = false;
        }

        return (
            <div id="deck">
                <div className="deck-wrapper w-full center" style={{flexWrap: 'wrap'}}>
                    {this.state.photos.map((photo) => <Photo image={photo}
                                                             style={margin ?
                                                                 {marginRight: '30px', width: sendWidth} :
                                                                 {width: sendWidth}}
                                                             selectFunc={this.props.selectFunc}
                                                             key={photo.src}/>)}
                </div>
            </div>
        );
    }

    render() {
        if (this.state.windowWidth > 900) {

            if (this.state.size < 5) {
                return this.small();
            }

            return (
                <div id="deck">
                    <div className="deck-wrapper w-full center">
                        <div className="flex-col deck-col">
                            {this.state.photos
                                .slice(0, Math.floor(this.state.size / 4) + 1)
                                .map((photo) => <Photo image={photo}
                                                       selectFunc={this.props.selectFunc}
                                                       key={photo.src}/>)}
                        </div>
                        <div className="flex-col deck-col">
                            {this.state.photos
                                .slice(Math.floor(this.state.size / 4) + 1, 2 * Math.floor(this.state.size / 4) + 2)
                                .map((photo) => <Photo image={photo}
                                                       selectFunc={this.props.selectFunc}
                                                       key={photo.src}/>)}
                        </div>
                        <div className="flex-col deck-col">
                            {this.state.photos
                                .slice(2 * Math.floor(this.state.size / 4) + 2, 3 * Math.floor(this.state.size / 4) + 2)
                                .map((photo) => <Photo image={photo}
                                                       selectFunc={this.props.selectFunc}
                                                       key={photo.src}/>)}
                        </div>
                        <div className="flex-col deck-col" style={{marginRight: 0}}>
                            {this.state.photos
                                .slice(3 * Math.floor(this.state.size / 4) + 2)
                                .map((photo) => <Photo image={photo}
                                                       selectFunc={this.props.selectFunc}
                                                       key={photo.src}/>)}
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.windowWidth > 750) {
            if (this.state.size < 4) {
                return this.small();
            }
            return (
                <div id="deck">
                    <div className="deck-wrapper w-full center">
                        <div className="flex-col deck-col">
                            {this.state.photos
                                .slice(0, Math.floor(this.state.size / 3))
                                .map((photo) => <Photo image={photo}
                                                       selectFunc={this.props.selectFunc}
                                                       key={photo.src}/>)}
                        </div>
                        <div className="flex-col deck-col">
                            {this.state.photos
                                .slice(Math.floor(this.state.size / 3), 2 * Math.floor(this.state.size / 3) + 1)
                                .map((photo) => <Photo image={photo}
                                                       selectFunc={this.props.selectFunc}
                                                       key={photo.src}/>)}
                        </div>
                        <div className="flex-col deck-col" style={{marginRight: 0}}>
                            {this.state.photos
                                .slice(2 * Math.floor(this.state.size / 3) + 1)
                                .map((photo) => <Photo image={photo}
                                                       selectFunc={this.props.selectFunc}
                                                       key={photo.src}/>)}
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.windowWidth > 400) {
            if (this.state.size < 3) {
                return this.small();
            }
            return (
                <div id="deck">
                    <div className="deck-wrapper w-full center">
                        <div className="flex-col deck-col">
                            {this.state.photos
                                .slice(0, Math.floor(this.state.size / 2))
                                .map((photo) => <Photo image={photo}
                                                       selectFunc={this.props.selectFunc}
                                                       key={photo.src}/>)}
                        </div>
                        <div className="flex-col deck-col" style={{marginRight: 0}}>
                            {this.state.photos
                                .slice(Math.floor(this.state.size / 2))
                                .map((photo) => <Photo image={photo}
                                                       selectFunc={this.props.selectFunc}
                                                       key={photo.src}/>)}
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div id="deck">
                <div className="deck-wrapper w-full center">
                    <div className="flex-col deck-col" style={{marginRight: 0}}>
                        {this.state.photos.map((photo) => <Photo image={photo}
                                                                 selectFunc={this.props.selectFunc}
                                                                 key={photo.src}/>)}
                    </div>
                </div>
            </div>
        );
    }

}

export default Deck;