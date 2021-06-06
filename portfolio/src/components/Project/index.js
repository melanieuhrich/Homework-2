import React from "react";
import './style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import projectData from './projectData';


function Project() {
    return (
        <div id='work'>
            <Row>
                {projectData.map(project => (
                    <Col lg={6} className="col-6 project">
                        <h4 className='title'>{project.name}</h4>
                        <img src={project.image} className='image' />
                        <Row>
                            <Col lg={6} className='button'>
                                <a href={project.deployed} target="_blank"><button type="button" className="btn btn-sm btn-light">Deployed Application</button></a>
                            </Col>
                            <Col lg={6} className='button'>
                            <a href={project.github} target="_blank"><button type="button" className="btn btn-sm btn-light">GitHub Repository</button></a>
                            </Col>
                        </Row>
                    </Col>
                ))}
            </Row>

        </div>
    )
};

export default Project;