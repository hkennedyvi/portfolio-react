import React, { useState } from 'react';
import './style.css';
import GalleryRow from './GalleryRow';
import CahootsImage from '../images/cahoots_portfolio.jpg';
import NBAImage from '../images/nba_fanboi_portfolio.jpg';
import BooksImage from '../images/im_already_booked_portfolio.jpg';
import TeamImage from '../images/one_mean_team_portfolio.jpg';
import ShowsImage from '../images/show_me_shows_portfolio.jpg';

function Gallery() {

    const [portfolioItems, setPortfolioItems] = useState([
        { title: "NBA", thumbnail: NBAImage },
        { title: "CAHOOTS", thumbnail: CahootsImage },
        { title: "BOOKS", thumbnail: BooksImage },
        { title: "TEAM", thumbnail: TeamImage },
        { title: "SHOWS", thumbnail: ShowsImage },
        { title: "COMING SOON", thumbnail: CahootsImage },
    ])

    return (
        <div class="container-fluid">
            <GalleryRow />
            <GalleryRow />
        </div>
    )
}

export default Gallery;