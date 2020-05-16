import React, { useState } from 'react';
import "./style.css";
import BioPhoto from '../images/bio_photo.jpeg';
import Resume from '../pdf/HK_Resume_4.2020_v1.pdf';
import HtmlIcon from '../icons/portfolio_html96.png';
import CssIcon from '../icons/portfolio_css90.png';
import JavascriptIcon from '../icons/portfolio_javascript100.png';
import BootstrapIcon from '../icons/portfolio_bootstrap96.png';
import JqueryIcon from '../icons/portfolio_jquery100.png';
import NodeIcon from '../icons/portfolio_node96.png';
import MysqlIcon from '../icons/portfolio_mysql80.png';
import ReactIcon from '../icons/portfolio_react64.png';
import MongoIcon from '../icons/portfolio_mongodb96.png';
import Bitmoji from '../images/portfolio_bitmoji.png';

function Bio() {

    const [sideNavOpen, setSideNavOpen] = useState(true);

    function toggleMenu(e) {
        e.preventDefault();
        setSideNavOpen(!sideNavOpen);
    }

    return (
        <div className={sideNavOpen ? "d-flex" : " d-flex toggled"} id="wrapper">

            <div className="border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">
                    <img id="avatar" src={Bitmoji} alt="avatar" />
                </div>
                <div className="list-group list-group-flush">
                    <a href="/" className="nav-item list-group-item list-group-item-action">Home</a>
                    <a href="/portfolio" className="nav-item list-group-item list-group-item-action">Gallery</a>
                    <a href="/contact" className="nav-item list-group-item list-group-item-action">Message</a>
                </div>
            </div>

            <div id="page-content-wrapper">

                <button id="menu-toggle" className="navbar-toggler" type="button" data-toggle="collapse" onClick={toggleMenu}
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="burger white-text">
                        <i className="fas fa-bars fa-1x"></i>
                    </span>
                </button>

                <div className="container-fluid">
                    <div className="jumbotron" id="bio-jumbotron">
                        <div className="row">
                            <div className="col">
                                <img className="portrait" src={BioPhoto} alt="portrait" />
                            </div>
                            <div className="col">
                                <h1>about me...</h1>
                                <br />
                                My name is Howard Kennedy. I'm a Full Stack Developer
                                recently certified through University of Oregon with a background in Advertising.
                                <br /><br />
                                Today, I have a toolbelt of 9 languages ranging
                                from essential to emerging. Just as importantly, the curiositly I ignited
                                the very first day I opened an HTML file has only gotten stronger.
                                <br /><br />
                                <h4>Proficiencies:</h4>
                                React, Javascript, NodeJS, CSS3, HTML
                                <br /><br />
                                <h4>Email:</h4>
                                hkennedyvi@gmail.com
                                <br /><br />
                                <h4>Resume:
                                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                                        <i className="sm-icon far fa-file"></i>
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container ml-2">
                    <div className="row">
                        <div className="col skill-container">
                            <h1>skills</h1>
                            <div className="row">
                                <div className="col-sm">
                                    <img className="code-icon" src={HtmlIcon} alt="html icon" />
                                </div>
                                <div className="col-sm">
                                    <img className="code-icon" src={CssIcon} alt="css icon" />
                                </div>
                                <div className="col-sm">
                                    <img className="code-icon" src={BootstrapIcon} alt="bootstrap icon" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm">
                                    <img className="code-icon" src={JavascriptIcon} alt="javascript icon" />
                                </div>
                                <div className="col-sm">
                                    <img className="code-icon" src={JqueryIcon} alt="jquery icon" />
                                </div>
                                <div className="col-sm">
                                    <img className="code-icon" src={NodeIcon} alt="node icon" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm">
                                    <img className="code-icon" src={MysqlIcon} alt="mysql icon" />
                                </div>
                                <div className="col-sm">
                                    <img className="code-icon" src={MongoIcon} alt="mongodb icon" />
                                    <p id="icon-citation">icons by
                                        <a id="icon-citation" target="_blank" href="https://icons8.com" rel="noopener noreferrer">Icons8</a>
                                    </p>
                                </div>
                                <div className="col-sm">
                                    <img className="code-icon" src={ReactIcon} alt="react icon" />
                                </div>
                            </div>
                        </div>

                        <div className="col education-container">
                            <h1>education</h1>
                            <br /><br />
                            <h6>UNVERSITY OF OREGON - CODING BOOTCAMP - 2020</h6>
                            <h6>PORTLAND STATE UNVERSITY - BA ADVERTISING MGMT - 2019</h6>
                            <br /><br />
                            <div className="container">
                                <div className="row find-me-row">
                                    <div className="col-xl-8 col-lg-6 col-md-4 col-sm-4 col-xs-4">
                                        <h3>find me here <i className=" sm-icon fas fa-hand-point-right"></i></h3>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-xs-4">
                                        <a href="https://www.linkedin.com/in/howard-kennedy-5784876b/" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin social-icon-contact"></i>
                                        </a>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-xs-4">
                                        <a href="https://github.com/hkennedyvi" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github-square social-icon-contact"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Bio;