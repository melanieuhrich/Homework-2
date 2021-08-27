import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import './style.css';

function AboutMe() {
    return (
        <div className='about'>
            <div>
                <h1>Technical Skills</h1>
                <hr />
                <h3>Languages</h3>
                <Row>
                    <Col><Badge className='badge'>HTML5</Badge></Col>
                    <Col><Badge className='badge'>CSS3</Badge></Col>
                    <Col><Badge className='badge'>JavaScript ES6+</Badge></Col>
                    <Col><Badge className='badge'>SQL</Badge></Col>
                    <Col><Badge className='badge'>NoSQL</Badge></Col>
                </Row>
                <h3>Applications</h3>
                <Row>
                    <Col><Badge className='badge'>GitHub</Badge></Col>
                    <Col><Badge className='badge'>MongoDB</Badge></Col>
                    <Col><Badge className='badge'>MySQL</Badge></Col>
                    <Col><Badge className='badge'></Badge></Col>
                    <Col><Badge className='badge'></Badge></Col>
                </Row>
                <h3>Tools</h3>
                <Row>
                    <Col><Badge className='badge'>Express</Badge></Col>
                    <Col><Badge className='badge'>React</Badge></Col>
                    <Col><Badge className='badge'>Node.js</Badge></Col>
                    <Col><Badge className='badge'>Handlebars</Badge></Col>
                </Row>
                <Row>
                    <Col><Badge className='badge'>Query</Badge></Col>
                    <Col><Badge className='badge'>Boostrap</Badge></Col>
                    <Col><Badge className='badge'>Materialize</Badge></Col>
                    <Col><Badge className='badge'>RESTful APIs</Badge></Col>
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