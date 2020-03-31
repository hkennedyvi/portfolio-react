import React from 'react';
import './style.css';

function GalleryColumn () {
    return (
        <div class="col">
        <div class="card text-right">
            <img src="public/images/nba_app.jpg" class="card-img-top" alt="..." />
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <button class="btn portfolio-btn" data-toggle="collapse" data-target="#first-card" role="button"
                aria-expanded="false" aria-controls="collapseExample">NBA FANBOI</button>
            <div class="collapse" id="first-card">
                <div class="card-body text-center">
                    <p>USED: HTML, CSS, JAVASCRIPT, NODE.JS, HANDELBARS, PASSPORT, SPORTS RADAR API.
                    <br></br>
                        <br></br>
                RESULT: NBA STAT GENERATOR/PLAYER TRACKER
                <br></br>
                        <br></br>
                        <a href="https://nbafanboi.herokuapp.com/">SEE IT</a></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default GalleryColumn;