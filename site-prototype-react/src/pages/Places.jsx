import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AccessibilityPanel from '../components/AccessibilityPanel';

// Import images
import splashImg from '../assets/images/splash.png';
import bainbridgeImg from '../assets/images/bainbridge.png';
import seattleImg from '../assets/images/seattle.png';

const Places = ({ changeFontSize, changeFont, changeColorScheme }) => {
    return (
        <div className="font-clear">
            <AccessibilityPanel
                changeFontSize={changeFontSize}
                changeFont={changeFont}
                changeColorScheme={changeColorScheme}
            />
            <Navbar />

            <main className="container my-5" id="main-content">
                <h1>Places</h1>
                <p className="lead">Explore the geographic locations throughout Washington State that have historical significance.</p>

                <Row>
                    {/* Place Card 1 */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={splashImg} alt="Kitsap County landscape" />
                            <Card.Body>
                                <Card.Title>Kitsap County</Card.Title>
                                <p>A region with a rich history of diverse communities and development.</p>
                                <Link to="/timelines" className="btn btn-secondary">View Timeline</Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Place Card 2 */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={bainbridgeImg} alt="Bainbridge Island landscape" />
                            <Card.Body>
                                <Card.Title>Bainbridge Island</Card.Title>
                                <p>A community shaped by multiple cultural influences over generations.</p>
                                <Link to="/timelines" className="btn btn-secondary">View Timeline</Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Place Card 3 */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={seattleImg} alt="Historic Seattle skyline" />
                            <Card.Body>
                                <Card.Title>Historic Seattle</Card.Title>
                                <p>Explore the transformation of Seattle through key historical moments.</p>
                                <Link to="/timelines" className="btn btn-secondary">View Timeline</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </main>

            <Footer />
        </div>
    );
};

export default Places;