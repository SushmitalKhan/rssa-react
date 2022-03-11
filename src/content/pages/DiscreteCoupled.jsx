import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class DiscreteCoupled extends Component {

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className = "header">Discrete Coupled
                    </h1>
                </div>
                <Card bg="light">
                    {/* <Card.Body>
                        <Card.Title>What can you expect?</Card.Title>
                        <p>Something to say</p>
                    </Card.Body> */}
                    <div className="d-flex justify-content-between">
                        <div style={{width: "75%", height: "fit-content"}}>
                            {/* Your graph stuff goes here */}
                            
                        </div>
                        <div style={{width: "24%", height: "400px", backgroundColor: "blue"}}>
                            {/* //Your side panel goes here */}
                        </div>
                    </div>
                </Card>
                <div className="jumbotron jumbotron-footer">
                    <Link to={{
                        pathname:"/discreteD"
                    }}>
                        <Button variant="primary" size="lg" className="footer-btn">
						    Next
					    </Button>
                    </Link>
                </div>
            </div>          
        );
    }
}

export default DiscreteCoupled;