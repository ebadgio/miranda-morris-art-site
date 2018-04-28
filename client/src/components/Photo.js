import React from 'react';

const Photo = ({image}) => {
    return(
        <div className="photo-wrapper">
            <img src={image.src} className="photo-img"/>
        </div>
    );
};

export default Photo;