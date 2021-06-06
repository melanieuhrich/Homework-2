import React from "react";
import AboutMe from '../components/AboutMe';
import Project from '../components/Project';
import './style.css';

function HomePage() {
    return (
        <div>
            <AboutMe />
            <h4 className='work'>Work</h4>
            <Project />
        </div>
    )
};

export default HomePage;