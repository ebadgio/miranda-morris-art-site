import React from 'react';
import Menu from "../components/Menu";
import Deck from "../components/Deck";

import gallery from '../../assets/data';

class Gallery extends React.Component {

    constructor() {
        super();

    }

    render() {
        return (
            <div className="page-wrapper flex-col">
                <Menu items={['PAINTING', 'DRAWING', 'SCULPTURE', 'TATOO DESIGN', 'VIDEO']}/>
                <Deck photos={gallery.painting}/>
            </div>
        );
    }


}

export default Gallery;