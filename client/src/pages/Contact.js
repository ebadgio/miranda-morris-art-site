import React from 'react';

const Contact = ({}) => {
    return (
        <div className="page-wrapper frame">
            <div className="contact-wrapper">
                <div className="contact-header">CONTACT</div>
                <div className="row-base wrap">
                    <div style={{marginBottom: '60px'}}>
                        <div className="contact-desc">Working and living in Houston, TX. For inquiries about available artwork,
                            please email directly.</div>
                        <div style={{marginBottom: '10px'}}>
                            <span className="contact-header-sub">Email: </span>
                            <a style={{color: '#3d5afe'}} href="mailto:mirandaxmorris@gmail.com">mirandaxmorris@gmail.com</a>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;