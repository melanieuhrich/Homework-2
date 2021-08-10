import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import './style.css';

function AboutMe() {
    return (
        <div className='about'>
            <div>
                <h1>Skills</h1>
                <Row>
                    <Col><Badge className='badge'>HTML</Badge></Col>
                    <Col><Badge className='badge'>CSS</Badge></Col>
                    <Col><Badge className='badge'>JavaScript</Badge></Col>
                    <Col><Badge className='badge'>Node.js</Badge></Col>          
                    </Row>
                <Row>
                    <Col><Badge className='badge'>Express</Badge></Col>
                    <Col><Badge className='badge'>MySQL</Badge></Col>
                    <Col><Badge className='badge'>MongoDB</Badge></Col>
                    <Col><Badge className='badge'>React</Badge></Col>
                </Row>

            </div>
            <div className='education'>
                <h1>Education</h1>
                <h3>Northwestern University</h3>
                <p>Full Stack Coding Bootcamp</p>
                <h3>University of Illinois Urbana-Champaign</h3>
                <p>Bachelor of Arts in Political Science, minor in Spanish</p>
            </div>
        </div>
    )
}

export default AboutMe;