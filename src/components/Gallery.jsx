import React from 'react';
import './style.css';
import GalleryRow from './GalleryRow';
import Header from './Header';



function Gallery() {
    return (
        <div class="container-fluid">
            <GalleryRow />
            <GalleryRow />
            <Header />
        </div>
    )
}

export default Gallery;