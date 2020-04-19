import React from 'react';
import "./style.css";
import CahootsImage from '../images/cahoots_portfolio.jpg';
import NBAImage from '../images/nba_fanboi_portfolio.jpg';
import BooksImage from '../images/im_already_booked_portfolio.jpg';
import TeamImage from '../images/one_mean_team_portfolio.jpg';
import ShowsImage from '../images/show_me_shows_portfolio.jpg';

function FullPortfolio() {

    return (
        <div className="container-fluid">
            <div className="row portfolio-row">
                <div className="col">
                    <div className="card text-right">
                        <img src={NBAImage} className="card-img-top" alt="..." />
                        <button className="btn portfolio-btn" data-toggle="collapse" data-target="#first-card" role="button"
                            aria-expanded="false" aria-controls="collapseExample">NBA FANBOI</button>
                        <div className="collapse" id="first-card">
                            <div className="card-body text-center">
                                <p>USED: HTML, BOOTSTRAP, JAVASCRIPT, NODE.JS, EXPRESS, MSQL, HANDELBARS, PASSPORT, SPORTS RADAR API.
                                    <br /><br />
                                    RESULT: NBA STAT GENERATOR/PLAYER TRACKER
                                    <br /><br />
                                    <a href="https://nbafanboi.herokuapp.com/">SEE IT</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card text-right">
                        <img src={ShowsImage} className="card-img-top" alt="..." />
                        <button className="btn portfolio-btn" data-toggle="collapse" data-target="#second-card" role="button"
                            aria-expanded="false" aria-controls="collapseExample">SHOW ME SHOWS</button>
                        <div className="collapse" id="second-card">
                            <div className="card-body text-center">
                                <p>USED: HTML, CSS, JAVASCRIPT, SONGKICK and TICKETMASTER API.
                                    <br /><br />
                                    RESULT: CONCERT FINDER
                                    <br /><br />
                                    <a href="https://jeretc79.github.io/project1/">SEE IT</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card text-right">
                        <img src={CahootsImage} className="card-img-top" alt="..." />
                        <button className="btn portfolio-btn" data-toggle="collapse" data-target="#third-card" role="button"
                            aria-expanded="false" aria-controls="collapseExample">CAHOOTS</button>
                        <div className="collapse" id="third-card">
                            <div className="card-body text-center">
                                <p>USED: MERN STACK, MATERIAL-UI, PASSPORT, BCRYPT, GOOGLE MAPS and GEOLOCATOR APIs.
                                    <br /><br />
                                    RESULT: NEIGHBORHOOD-BASED SOCIAL APP
                                    <br /><br />
                                    <a href="https://u-incahoots.herokuapp.com/">SEE IT</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row portfolio-row">
                <div className="col">
                    <div className="card text-right">
                        <img src={BooksImage} className="card-img-top" alt="..." />
                        <button className="btn portfolio-btn" data-toggle="collapse" data-target="#fourth-card" role="button"
                            aria-expanded="false" aria-controls="collapseExample">IM ALREADY BOOKED</button>
                        <div className="collapse" id="fourth-card">
                            <div className="card-body text-center">
                                <p>USED: MERN STACK, GOOGLE BOOKS API.
                                    <br /><br />
                                    RESULT: LIBRARY BUILDER
                                    <br /><br />
                                    <a href="https://nbafanboi.herokuapp.com/">SEE IT</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card text-right">
                        <img src={TeamImage} className="card-img-top" alt="..." />
                        <button className="btn portfolio-btn" data-toggle="collapse" data-target="#fifth-card" role="button"
                            aria-expanded="false" aria-controls="collapseExample">ONE MEAN TEAM</button>
                        <div className="collapse" id="fifth-card">
                            <div className="card-body text-center">
                                <p>USED: REACT, BOOTSTRAP, RANDOM-USER API.
                                    <br /><br />
                                    RESULT: EMPLOYEE DIRECTORY
                                    <br /><br />
                                    <a href="https://jeretc79.github.io/project1/">SEE IT</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card text-right">
                    <i id="portfolio-placeholder" class="fas fa-tools"></i>
                        <button className="btn portfolio-btn" data-toggle="collapse" data-target="#sixth-card" role="button"
                            aria-expanded="false" aria-controls="collapseExample">COMING SOON</button>
                        <div className="collapse" id="sixth-card">
                            <div className="card-body text-center">
                                <p>I'M ALWAYS WORKING ON SOMETHING NEW. CHECK BACK TO SEE MY NEXT PROJECT.
                                    <br /><br />
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullPortfolio;