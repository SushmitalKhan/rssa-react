import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Preference extends Component {



    render(){
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="header">Continuous Decoupled</h1>
                    <p>This is how your preference compares with your community.</p>
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
                        <div style={{width: "24%", height: "200px", backgroundColor: "blue"}}>
                            {/* //Your side panel goes here */}
                        </div>
                    </div>
                </Card>
                <div className="jumbotron jumbotron-footer">
                <Link to={{
                    pathname: "/newcomp"
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

export default Preference;