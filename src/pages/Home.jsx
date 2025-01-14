import React from 'react';
import videoBg from '../assets/home.mp4';
import './home.css';

function Home() {
    return (
        <div className="main">
            <video
                src={videoBg}
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                }}
            />
            <div className="overlay"></div>
            <div className="content">
                <div className="content-box"> 
                    <p>DIRECTED BY -</p>
                    <h1>VAIBHAV VINAYAK</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;