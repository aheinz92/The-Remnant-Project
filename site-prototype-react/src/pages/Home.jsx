import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AccessibilityPanel from '../components/AccessibilityPanel';

// Import images
import splashImg from '../assets/images/splash.png';
import collection1Img from '../assets/images/collection1.png';
import collection2Img from '../assets/images/collection2.png';
import collection3Img from '../assets/images/collection3.png';

const Home = ({ changeFontSize, changeFont, changeColorScheme }) => {
    return (
        <div className="font-clear">
            <AccessibilityPanel
                changeFontSize={changeFontSize}
                changeFont={changeFont}
                changeColorScheme={changeColorScheme}
            />
            <Navbar />

            <main className="container my-5" id="main-content">
                {/* Splash Section */}
                <section className="text-center mb-5">
                    <h1 className="display-4">Welcome to The Remnant Project</h1>
                    <img
                        src={splashImg}
                        alt="Splash Image showing historical figures from Washington state"
                        className="img-fluid my-4"
                        style={{ maxHeight: '400px', borderRadius: '15px' }}
                    />
                    <p className="lead">A digital archive preserving and celebrating Washington State's diverse historical narratives</p>
                </section>

                {/* Special Collections Section */}
                <section>
                    <h2 className="mb-4">Featured Special Collections</h2>
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

            <Footer />
        </div>
    );
};

export default Home;