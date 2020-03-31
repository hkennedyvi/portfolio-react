import React from 'react';
import './style.css';
import GalleryColumn from './GalleryColumn'

function GalleryRow() {
    return (
        <div className="row portfolio-row">
            <GalleryColumn />
            <GalleryColumn />
            <GalleryColumn />
        </div>
    )
}

export default GalleryRow;