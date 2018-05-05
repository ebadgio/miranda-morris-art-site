import React from 'react';

const Bottom = ({}) => {

    return (
        <div className="bottom row between wrap">
            <div className="end-text">
                &copy; 2018 MIRANDA MORRIS
            </div>
            <div>
            <div className="row" style={{marginRight: '10px', marginTop: '10px'}}>
                <a target="_blank" href="https://www.instagram.com/mirandaxiao_/">
                    <div className="btn solid frame circle transparent" id="insta">
                        <i className="fab fa-instagram" />
                    </div>
                </a>
                <a target="_blank" href="https://www.society6.com/mirandaxmorris">
                    <div className="btn solid circle frame transparent" id="shop">
                        <i className="fas fa-shopping-bag" />
                    </div>
                </a>
            </div>
            </div>
            <div className="end-text">
                Site Design By <a target="_blank" href="https://www.github.com/ebadgio">Eli Badgio</a>
            </div>
        </div>
    );

};

export default Bottom;
