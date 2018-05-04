import React from 'react';

const Bottom = ({}) => {

    return (
        <div className="bottom row between">
            <div className="end-text">
                &copy; 2018 MIRANDA MORRIS
            </div>
            <div>
            <div className="row">
                <div className="btn solid frame circle transparent" id="insta">
                    <i className="fab fa-instagram" />
                </div>
                <div className="btn solid circle frame transparent" id="shop">
                    <i className="fas fa-shopping-bag" />
                </div>
            </div>
            </div>
            <div className="end-text">
                Site Design By <a target="_blank" href="https://www.github.com/ebadgio">Eli Badgio</a>
            </div>
        </div>
    );

};

export default Bottom;
