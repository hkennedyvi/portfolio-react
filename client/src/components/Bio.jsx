import React, { useState } from 'react';
import "./style.css";
import BioPhoto from '../images/bio_photo.jpeg';
import Resume from '../pdf/HK_Resume_4.2020_v1.pdf';
import htmlIcon from '../icons/portfolio_html96.png';
import cssIcon from '../icons/portfolio_css90.png';
import javascriptIcon from '../icons/portfolio_javascript100.png';
import bootstrapIcon from '../icons/portfolio_bootstrap96.png';
import jqueryIcon from '../icons/portfolio_jquery100.png';
import nodeIcon from '../icons/portfolio_node96.png';
import mysqlIcon from '../icons/portfolio_mysql80.png';
import reactIcon from '../icons/portfolio_react64.png';
import mongoIcon from '../icons/portfolio_mongodb96.png';

function Bio() {

    const [sideNavOpen, setSideNavOpen] = useState(true);

    function toggleMenu(e) {
        e.preventDefault();
        setSideNavOpen(!sideNavOpen);
    }

    return (
        <div class={sideNavOpen ? "d-flex" : " d-flex toggled"} id="wrapper">

            <div class="border-right" id="sidebar-wrapper">
                <div class="sidebar-heading">HOWARD</div>
                <div class="list-group list-group-flush">
                    <a href="/" class="nav-item list-group-item list-group-item-action">Home</a>
                    <a href="/portfolio" class="nav-item list-group-item list-group-item-action">Gallery</a>
                    <a href="/contact" class="nav-item list-group-item list-group-item-action">Contact</a>
                </div>
            </div>

            <div id="page-content-wrapper">

                <button id="menu-toggle" class="navbar-toggler" type="button" data-toggle="collapse" onClick={toggleMenu}
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="white-text">
                        <i class="fas fa-bars fa-1x"></i>
                    </span>
                </button>

                <div class="container-fluid">
                    <div class="jumbotron" id="bio-jumbotron">
                        <div class="row">
                            <div class="col">
                                <img class="portrait" src={BioPhoto} />
                            </div>
                            <div class="col">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        </div>
                    </div>
                </div>

                <div class="container ml-2">
                    <div class="row">
                        <div class="col skill-container">
                            <h1>skills</h1>
                            <div class="row">
                                <div class="col-sm">
                                    <img class="code-icon" src={htmlIcon} />
                                </div>
                                <div class="col-sm">
                                    <img class="code-icon" src={cssIcon} />
                                </div>
                                <div class="col-sm">
                                    <img class="code-icon" src={bootstrapIcon} />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm">
                                    <img class="code-icon" src={javascriptIcon} />
                                </div>
                                <div class="col-sm">
                                    <img class="code-icon" src={jqueryIcon} />
                                </div>
                                <div class="col-sm">
                                    <img class="code-icon" src={nodeIcon} />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm">
                                    <img class="code-icon" src={mysqlIcon} />
                                </div>
                                <div class="col-sm">
                                    <img class="code-icon" src={mongoIcon} />
                                </div>
                                <div class="col-sm">
                                    <img class="code-icon" src={reactIcon} />
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <h1>education</h1>
                            <h6>UNVERSITY OF OREGON - CODING BOOTCAMP - 2020</h6>
                            <h6>PORTLAND STATE UNVERSITY - BA ADVERTISING MGMT - 2019</h6>
                            <h5>Resume: <a href={Resume} target="_blank">👀</a></h5>
                            <div class="container">
                                <div class="row find-me-row">
                                    <div class="col-sm-8">
                                        <h3>find me here <i class="fas fa-hand-point-right"></i></h3>
                                    </div>
                                    <div class="col-sm-2">
                                        <a href="https://www.linkedin.com/in/howard-kennedy-5784876b/" target="_blank"><i
                                            class="fab fa-linkedin social-icon-contact"></i></a>
                                    </div>
                                    <div class="col-sm-2">
                                        <a href="https://github.com/hkennedyvi" target="_blank"><i
                                            class="fab fa-github-square social-icon-contact"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Bio;