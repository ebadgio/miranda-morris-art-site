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
                // document.getElementById('photo-cont').style.minHeight = 'none';
                return;
            case "DRAWING":

                this.setState({photos: gallery.drawing, tab: 'DRAWING'});
                // document.getElementById('photo-cont').style.minHeight = 'none';
                return;
            case "SCULPTURE":

                this.setState({photos: gallery.sculpture, tab: 'SCULPTURE'});
                // document.getElementById('photo-cont').style.minHeight = '700px';
                return;
            case "TATTOO DESIGN":

                this.setState({photos: gallery.tattoo, tab: 'TATTOO DESIGN'});
                // document.getElementById('photo-cont').style.minHeight = '700px';
                return;
            case "VIDEO":

                this.setState({photos: gallery.video, tab: 'VIDEO'});
                // document.getElementById('photo-cont').style.minHeight = 'none';
                return;
            default:

                // document.getElementById('photo-cont').style.minHeight = 'none';
                return;
        }
    }

    render() {
        return (
            <div className="page-wrapper flex-col">

                <div className="menu-wrapper row center">
                    {items.map((item, idx) =>
                        <div onClick={() => this.switchTab(item)}
                             key={idx}
                             className={this.state.tab === item ? "menu-item active row" : "menu-item row"}>{item}</div>)}
                </div>


                {this.state.tab === 'VIDEO' ? <iframe id="embedded"
                                                      width="560"
                                                      height="315"
                                                      src="https://www.youtube.com/embed/CK-X4Y-zBqo"
                                                      frameborder="0"
                                                      allow="autoplay; encrypted-media"
                                                      allowfullscreen>

                    </iframe> : <div></div>}

                {this.state.tab === 'VIDEO' ?
                    <div className="description" style={{maxWidth: '400px'}}>
                        Witch Doctor explores the demonized monstrous-feminine and the antiseptic
                        aesthetic through an ascetic healing ritual, performed by masked witch
                        figures.</div> : <div></div>}
                <div id="deck">
                    <div className="deck-wrapper w-full center">
                        {this.state.photos.map((photo) => <Photo image={photo} key={photo.src}/>)}
                    </div>
                </div>

            </div>
        );
    }


}

export default Gallery;