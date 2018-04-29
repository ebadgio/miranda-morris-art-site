import React from 'react';


import Photo from '../components/Photo';

import gallery from '../../assets/data';
const items=['PAINTING', 'DRAWING', 'SCULPTURE', 'TATTOO DESIGN', 'VIDEO'];

class Gallery extends React.Component {

    constructor() {
        super();
        this.state = {
            tab: 'PAINTING',
            photos: gallery.painting,
        }
    }

    switchTab(t) {
        switch (t) {
            case "PAINTING":
                this.setState({photos: gallery.painting, tab: 'PAINTING'});
                return;
            case "DRAWING":
                // this.setState({tab: 'drawing'});
                this.setState({photos: gallery.drawing, tab: 'DRAWING'});
                return;
            case "SCULPTURE":
                // this.setState({tab: 'sculpture'});
                this.setState({photos: gallery.sculpture, tab: 'SCULPTURE'});
                return;
            case "TATTOO DESIGN":
                // this.setState({tab: 'tattoo'});
                this.setState({photos: gallery.tattoo, tab: 'TATTOO DESIGN'});
                return;
            case "VIDEO":
                //this.setState({tab: 'video'});
                this.setState({photos: gallery.video, tab: 'VIDEO'});
                return;
            default:
                // this.setState({tab: 'painting'});
                return;
        }
    }

    render() {
        return (
            <div className="page-wrapper flex-col">
                {/*<Menu items={['PAINTING', 'DRAWING', 'SCULPTURE', 'TATTOO DESIGN', 'VIDEO']}*/}
                      {/*active={this.state.tab}*/}
                      {/*switchFunc={(t) => this.switchTab(t)}/>*/}
                <div className="menu-wrapper row between">
                    {items.map((item, idx) =>
                        <div onClick={() => this.switchTab(item)}
                             key={idx}
                             className={this.state.tab === item ? "menu-item active row" : "menu-item row"}>{item}</div>)}
                </div>
                {/*// <Deck photos={gallery[this.state.tab]}/>*/}
                <div className="deck-wrapper w-full center">
                    {this.state.photos.map((photo) => <Photo image={photo} key={photo.src}/>)}
                </div>
            </div>
        );
    }


}

export default Gallery;