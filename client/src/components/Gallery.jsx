import React from 'react';
import './style.css';
import GalleryRow from './GalleryRow';

function Gallery() {
    return (
        <div class="container-fluid">
            <GalleryRow />
            <GalleryRow />
        </div>
    )
}

export default Gallery;