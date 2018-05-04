import React from 'react';

const Photo = ({image, selectFunc, style}) => {

    // const id = image.title.split(" ")[0] +

    return(
        <div className="photo-wrapper" style={style} onClick={() => selectFunc(image)}>
            <div className="photo-shadow">
                <div className="photo-info" style={{fontSize: '16px', fontWeight: '700'}}>
                    {image.title}
                </div>
                <div className="photo-info">
                    {image.size}
                </div>
                <div className="photo-info">
                    {image.extra}
                </div>
            </div>
            <img src={image.src} className="photo-img"/>
        </div>
    );
};

export default Photo;