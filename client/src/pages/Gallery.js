import React from 'react';


import Photo from '../components/Photo';

import gallery from '../../assets/data';
import PhotoViewer from "../components/PhotoViewer";
const items=['PAINTING', 'DRAWING', 'SCULPTURE', 'TATTOO DESIGN', 'VIDEO'];

class Gallery extends React.Component {

    constructor() {
        super();
        this.state = {
            tab: 'PAINTING',
            photos: gallery.painting,
            modal: false,
            view: {},
            viewIdx: 0
        };
        this.view = this.view.bind(this);
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

    view(photo) {
        // console.log('called view', photo, this.state.photos.indexOf(photo));
        this.setState({view: photo, modal: true, viewIdx: this.state.photos.indexOf(photo)});
    }

    close() {
        this.setState({modal: false});
        document.getElementById('body').style.overflow = 'auto';
        document.getElementById('gallery').style.paddingTop = '55px';
    }

    render() {
        return (
            <div className="page-wrapper flex-col" id="gallery">

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
                        {this.state.photos.map((photo) => <Photo image={photo}
                                                                 selectFunc={this.view}
                                                                 key={photo.src}/>)}
                    </div>
                </div>
                <PhotoViewer open={this.state.modal}
                             closeFunc={() => this.close()}
                             viewIdx={this.state.viewIdx}
                             photos={this.state.photos}
                             view={this.state.view}/>

            </div>
        );
    }


}

export default Gallery;