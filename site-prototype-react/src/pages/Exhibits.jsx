import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import images
import collection1Img from '../assets/images/collection1.png';
import collection2Img from '../assets/images/collection2.png';
import collection3Img from '../assets/images/collection3.png';


const Exhibits = () => {
    return (
        <main className="container my-5" id="main-content">
            {/* Special Collections Section */}
            <section>
                <h2 className="mb-4">Special Exhibits and Collections</h2> {/* Updated Heading */}
                <Row>
                    {/* Example Card 1 */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={collection1Img} alt="Collection of civil rights documents" />
                            <Card.Body>
                                <Card.Title>Documents that changed the Civil Rights Movements</Card.Title>
                                <Link to="/collection" className="btn btn-secondary">View Collection</Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Example Card 2 */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={collection2Img} alt="Collection of historical photographs" />
                            <Card.Body>
                                <Card.Title>Historical Photographs: Untold Stories</Card.Title>
                                <Link to="/collection" className="btn btn-secondary">View Collection</Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Example Card 3 */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={collection3Img} alt="George Washington photographs" />
                            <Card.Body>
                                <Card.Title>The Legacy of George Washington</Card.Title>
                                <Link to="/collection" className="btn btn-secondary">View Collection</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </main>
    );
};

export default Exhibits;