import React from 'react';
import "./style.css";
import BioPhoto from '../images/bio_photo.jpeg';
import Resume from '../pdf/HK_Code_Resume.pdf';

function Bio() {
    return (
        <div>
            <div className="container-fluid" id="intro-header">
                <div className="row">
                    <div className="col-md-3">
                        <a href="contact"><i className="far fa-paper-plane nav-icon-home"></i></a>
                        <p className="hand-text">CONTACT</p>
                        <i className="hands far fa-hand-point-up"></i>
                    </div>
                    <div className="col-md-6">
                        <h1>Hello. My name is Howard Kennedy and I am a fullstack developer.</h1>
                        <div className="bio-box">
                            <img src={BioPhoto} width="50%" alt="me" />
                            <div className="bio-text">
                                <h5 className="bio-header">Languages:</h5>
                                <h6>HTML CSS JAVASCRIPT JQUERY NODE.JS MYSQL MONGODB HANDLEBARS REACT</h6>
                                <br></br>
                                <h5 className="bio-header">Education:</h5>
                                <h6>UNVERSITY OF OREGON - CODING BOOTCAMP - 2020</h6>
                                <br></br>
                                <h6>PORTLAND STATE UNVERSITY - BA ADVERTISING MGMT - 2019</h6>
                                <br></br>
                                <h5 className="bio-header">Resume: <a href={Resume}>👀</a></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <i className="hands far fa-hand-point-down"></i>
                        <p className="hand-text">SEE WORK</p>
                        <a href="portfolio"><i className="fas fa-palette nav-icon-home"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio;