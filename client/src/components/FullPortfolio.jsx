import React, { useState } from 'react';
import "./style.css";
import CahootsImage from '../images/cahoots_portfolio.jpg';
import NBAImage from '../images/nba_fanboi_portfolio.jpg';
import BooksImage from '../images/im_already_booked_portfolio.jpg';
import TeamImage from '../images/one_mean_team_portfolio.jpg';
import ShowsImage from '../images/show_me_shows_portfolio.jpg';
import NoteImage from '../images/note_taker.png';
import WatchmenImage from '../images/watchmen_portfolio.png';

function FullPortfolio() {

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
                    <a href="/" class="nav-item list-group-item list-group-item-action">Dashboard</a>
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
                    <div class="container my-4">
                        <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails"
                            data-ride="carousel">
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active">
                                    <img class="d-block w-100 carousel-image" src={CahootsImage} alt="First slide" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>CAHOOTS (Social App)</h5>
                                        <p>Built with: MERN STACK, MATERIAL-UI, PASSPORT, BCRYPT, GOOGLE MAPS and GEOLOCATOR APIs.</p>
                                        <a href="https://u-incahoots.herokuapp.com/" target="_blank"><i class="fas fa-link"></i></a> &nbsp;
                                        <a href="https://github.com/hkennedyvi/event-maker" target="_blank"><i class="fab fa-github-square"></i></a>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100 carousel-image" src={NBAImage} alt="Second slide" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>NBA FANBOI (Sports App)</h5>
                                        <p>Built with: HTML, BOOTSTRAP, JAVASCRIPT, NODE.JS, EXPRESS, MSQL, HANDELBARS, PASSPORT, SPORTS RADAR API.</p>
                                        <a href="https://nbafanboi.herokuapp.com/" target="_blank"><i class="fas fa-link"></i></a> &nbsp;
                                        <a href="https://github.com/hkennedyvi/project2.github.io" target="_blank"><i class="fab fa-github-square"></i></a>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100 carousel-image" src={BooksImage} alt="Third slide" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>ALREADY-BOOKED (Book App)</h5>
                                        <p>Built with: MERN STACK, GOOGLE BOOKS API.</p>
                                        <a href="https://imalreadybooked.herokuapp.com/" target="_blank"><i class="fas fa-link"></i></a> &nbsp;
                                        <a href="https://github.com/hkennedyvi/google-books" target="_blank"><i class="fab fa-github-square"></i></a>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100 carousel-image" src={WatchmenImage} alt="Fourth slide" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>THE WATCHMEN (Comic App)</h5>
                                        <p>Built with: JQUERY, BULMA, EXPRESS, HANDLEBARS, SUPERHERO API.</p>
                                        <a href="https://the-watchmen.herokuapp.com/" target="_blank"><i class="fas fa-link"></i></a> &nbsp;
                                        <a href="https://github.com/hkennedyvi/watchmen" target="_blank"><i class="fab fa-github-square"></i></a>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100 carousel-image" src={ShowsImage} alt="Fifth slide" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>SHOW-ME-SHOWS (Music App)</h5>
                                        <p>Built with: HTML, CSS, JAVASCRIPT, SONGKICK and TICKETMASTER API.</p>
                                        <a href="https://jeretc79.github.io/project1/" target="_blank"><i class="fas fa-link"></i></a> &nbsp;
                                        <a href="https://github.com/Jeretc79/project1" target="_blank"><i class="fab fa-github-square"></i></a>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100 carousel-image" src={NoteImage} alt="Sixth slide" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>NOTE-TAKER (Notes App)</h5>
                                        <p>Built with: HTML, BOOTSTRAP, JQUERY, EXPRESS.</p>
                                        <a href="https://jot-me-down.herokuapp.com/" target="_blank"><i class="fas fa-link"></i></a> &nbsp;
                                        <a href="https://github.com/hkennedyvi/note-taker" target="_blank"><i class="fab fa-github-square"></i></a>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100 carousel-image" src={TeamImage} alt="Seventh slide" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>ONE-MEAN-TEAM (Employee Directory App)</h5>
                                        <p>Built with: REACT, BOOTSTRAP, AXIOS, RANDOM-USER API.</p>
                                        <a href="https://onemeanteam.herokuapp.com/" target="_blank"><i class="fas fa-link"></i></a> &nbsp;
                                        <a href="https://github.com/hkennedyvi/employeeDirectory" target="_blank"><i class="fab fa-github-square"></i></a>
                                    </div>
                                </div>
                            </div>
                            {/* <!--/.Slides--> */}
                            {/* <!--Controls--> */}
                            <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                            {/* <!--/.Controls--> */}
                            <ol class="carousel-indicators">
                                <li data-target="#carousel-thumb" data-slide-to="0" class="active"> <img
                                    class="d-block w-100" src={CahootsImage} class="img-fluid" /></li>
                                <li data-target="#carousel-thumb" data-slide-to="1"><img class="d-block w-100" src={NBAImage}
                                    class="img-fluid" /></li>
                                <li data-target="#carousel-thumb" data-slide-to="2"><img class="d-block w-100"
                                    src={BooksImage} class="img-fluid" /></li>
                                <li data-target="#carousel-thumb" data-slide-to="3"><img class="d-block w-100"
                                    src={WatchmenImage} class="img-fluid" /></li>
                                <li data-target="#carousel-thumb" data-slide-to="4"><img class="d-block w-100"
                                    src={ShowsImage} class="img-fluid" /></li>
                                <li data-target="#carousel-thumb" data-slide-to="5"><img class="d-block w-100"
                                    src={NoteImage} class="img-fluid" /></li>
                                <li data-target="#carousel-thumb" data-slide-to="6"><img class="d-block w-100"
                                    src={TeamImage} class="img-fluid" /></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FullPortfolio;