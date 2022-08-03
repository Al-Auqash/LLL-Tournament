import React from 'react';
import Card from "./Card";

import "../Homepage.css"

const news = () => {
    return (
        <div class="news">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="title">
                    <h1>NEWS</h1>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className="row justify-content-evenly">
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="row justify-content-evenly">
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row justify-content-evenly">
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default news;