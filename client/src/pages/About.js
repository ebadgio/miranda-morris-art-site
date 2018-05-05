import React from 'react';

const About = ({}) => {
    return (
        <div className="page-wrapper frame" style={{paddingLeft: '20px'}}>
            <div style={{maxWidth: '800px'}}>
                <div style={{marginTop: '40px', height: '10px'}} />
                <div className="contact-desc" style={{maxWidth: 'none', marginRight: 0, paddingRight: '20px'}}>
                    <img className="about-photo left" src="https://s3.us-east-2.amazonaws.com/mirandamorrisart/Lavish+portrait.jpg" />
                    <div className="contact-header">ABOUT THE ARTIST</div>
                    Miranda Morris is currently studying studio art,
                    policy studies, and pre-medicine at Rice University (‘19). Her creative
                    production includes portraiture, sculpture, landscape, and expressionism,
                    with special interests in surrealism, atmospheric color profiles, and the
                    empowerment of female subjects in portraiture.
                </div>
                <div style={{clear: 'both', paddingTop: '50px'}}>
                    <div className="contact-desc" style={{maxWidth: 'none', marginRight: 0}}>
                        <div className="contact-header">ACCOMPLISHMENTS</div>
                        <img className="about-photo right"
                             src="https://s3.us-east-2.amazonaws.com/mirandamorrisart/Renaissance+Woman+NYTimes.jpg"/>
                        In 2015, the oil painting Renaissance Woman won first place and the American Vision award
                        from the State of Connecticut Scholastic Art Awards, with the honor of being
                        featured in the New York Times, displayed in the Pratt Institute gallery, and
                        sent on tour to several cities across the country for two years.
                        <br/>
                        <br />
                        At Rice University, her artwork has been featured in several locations,
                        including the Moody Center for the Arts, Rice Memorial Center, McMurtry College,
                        Sewall Hall, and Rice Coffeehouse. Her largest piece, McMurtry College,
                        is a permanent gift to her residential college.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;