import React from 'react';
import Photo from "./Photo";

const Deck = ({photos}) => {

    return (
        <div className="deck-wrapper w-full center">
            {photos.map((photo, idx) => <Photo image={photo} key={idx}/>)}
        </div>
    );

};

export default Deck;