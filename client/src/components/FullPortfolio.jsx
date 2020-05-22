import React, { useState } from 'react';
import "./style.css";
import CahootsImage from '../images/cahoots_portfolio.jpg';
import NBAImage from '../images/nba_fanboi_portfolio.jpg';
import BooksImage from '../images/im_already_booked_portfolio.jpg';
import TeamImage from '../images/one_mean_team_portfolio.jpg';
import ShowsImage from '../images/show_me_shows_portfolio.jpg';
import NoteImage from '../images/note_taker.png';
import WatchmenImage from '../images/watchmen_portfolio.png';
import Bitmoji from '../images/portfolio_bitmoji.png';

function FullPortfolio() {

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
                    <h1 className="text-center gallery-header">projects:</h1>
                    <div className="container my-4">
                        <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails"
                            data-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                    <img className="d-block w-100 carousel-image" src={CahootsImage} alt="First slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>CAHOOTS (Social App)</h5>
                                        <p>Guest Account: cahootsguy@email.com
                                            <br />
                                            Password: password
                                        </p>
                                        <p>Application for organizing neighbor hangouts. Users can join an existing event or create one of their own.</p>
                                        <p>Built with: MERN STACK, MATERIAL-UI, PASSPORT, BCRYPT, GOOGLE MAPS and GEOLOCATOR APIs.</p>
                                        <a href="https://u-incahoots.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fas fa-link"></i>
                                        </a>
                                            &nbsp;
                                        <a href="https://github.com/hkennedyvi/event-maker" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github-square"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 carousel-image" src={NBAImage} alt="Second slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>NBA FANBOI (Sports App)</h5>
                                        <p>A league tracking application with up to the minute player, team, and playoff standing data and statistics.</p>
                                        <p>Built with: HTML, BOOTSTRAP, JAVASCRIPT, NODE.JS, EXPRESS, MYSQL, HANDELBARS, PASSPORT, SPORTS RADAR API.</p>
                                        <a href="https://nbafanboi.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fas fa-link"></i>
                                        </a>
                                            &nbsp;
                                        <a href="https://github.com/hkennedyvi/project2.github.io" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github-square"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 carousel-image" src={BooksImage} alt="Third slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>ALREADY-BOOKED (Book App)</h5>
                                        <p>A book library builder. Pulling results from Google Books, this application searches titles that can then be saved and managed in a personal bookshelf.</p>
                                        <p>Built with: MERN STACK, GOOGLE BOOKS API.</p>
                                        <a href="https://imalreadybooked.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fas fa-link"></i>
                                        </a>
                                            &nbsp;
                                        <a href="https://github.com/hkennedyvi/google-books" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github-square"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 carousel-image" src={WatchmenImage} alt="Fourth slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>THE WATCHMEN (Comic App)</h5>
                                        <p>Simple application for getting to know the characters of Watchmen utilizing Bulma's styling framework to mimic a traditional comic layout.</p>
                                        <p>Built with: JQUERY, BULMA, EXPRESS, HANDLEBARS, SUPERHERO API.</p>
                                        <a href="https://the-watchmen.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fas fa-link"></i>
                                        </a>
                                            &nbsp;
                                        <a href="https://github.com/hkennedyvi/watchmen" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github-square"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 carousel-image" src={ShowsImage} alt="Fifth slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>SHOW-ME-SHOWS (Music App)</h5>
                                        <p>An entertainment application for finding upcoming local concerts and events.</p>
                                        <p>Built with: HTML, CSS, JAVASCRIPT, SONGKICK and TICKETMASTER API.</p>
                                        <a href="https://jeretc79.github.io/project1/" target="_blank" rel="noopener noreferrer">
                                            <i className="fas fa-link"></i>
                                        </a>
                                            &nbsp;
                                        <a href="https://github.com/Jeretc79/project1" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github-square"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 carousel-image" src={NoteImage} alt="Sixth slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>NOTE-TAKER (Notes App)</h5>
                                        <p>A simple notetaker application. Using basic CRUD principles, unique notes can be saved, edited, and deleted.</p>
                                        <p>Built with: HTML, BOOTSTRAP, JQUERY, EXPRESS.</p>
                                        <a href="https://jot-me-down.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fas fa-link"></i>
                                        </a>
                                            &nbsp;
                                        <a href="https://github.com/hkennedyvi/note-taker" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github-square"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 carousel-image" src={TeamImage} alt="Seventh slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>ONE-MEAN-TEAM (Employee Directory App)</h5>
                                        <p>React based directory for managing employees. An administrator can search and sort through a collection of team members generated from Random User API.</p>
                                        <p>Built with: REACT, BOOTSTRAP, AXIOS, RANDOM-USER API.</p>
                                        <a href="https://onemeanteam.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fas fa-link"></i>
                                        </a>
                                            &nbsp;
                                        <a href="https://github.com/hkennedyvi/employeeDirectory" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github-square"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!--/.Slides--> */}
                            {/* <!--Controls--> */}
                            <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            {/* <!--/.Controls--> */}
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-thumb" data-slide-to="0" className="active">
                                    <img className="d-block w-100" src={CahootsImage} className="img-fluid" alt="" />
                                </li>
                                <li data-target="#carousel-thumb" data-slide-to="1">
                                    <img className="d-block w-100" src={NBAImage} className="img-fluid" alt="" />
                                </li>
                                <li data-target="#carousel-thumb" data-slide-to="2">
                                    <img className="d-block w-100" src={BooksImage} className="img-fluid" alt="" />
                                </li>
                                <li data-target="#carousel-thumb" data-slide-to="3">
                                    <img className="d-block w-100" src={WatchmenImage} className="img-fluid" alt="" />
                                </li>
                                <li data-target="#carousel-thumb" data-slide-to="4">
                                    <img className="d-block w-100" src={ShowsImage} className="img-fluid" alt="" />
                                </li>
                                <li data-target="#carousel-thumb" data-slide-to="5">
                                    <img className="d-block w-100" src={NoteImage} className="img-fluid" alt="" />
                                </li>
                                <li data-target="#carousel-thumb" data-slide-to="6">
                                    <img className="d-block w-100" src={TeamImage} className="img-fluid" alt="" />
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FullPortfolio;