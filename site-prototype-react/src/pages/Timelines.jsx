import React from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';

// Import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AccessibilityPanel from '../components/AccessibilityPanel';

// Import images
import timelineImg from '../assets/images/timeline.png';

const Timelines = ({ changeFontSize, changeFont, changeColorScheme }) => {
    return (
        <div className="font-clear">
            <AccessibilityPanel
                changeFontSize={changeFontSize}
                changeFont={changeFont}
                changeColorScheme={changeColorScheme}
            />
            <Navbar />

            <main className="container my-5" id="main-content">
                <h1>Timelines</h1>
                <p className="lead">Explore historical events in chronological order to better understand their context and relationships.</p>

                {/* Timeline Dropdown */}
                <div className="mb-3">
                    <Form.Label htmlFor="timelineSelect">Select a Timeline:</Form.Label>
                    <Form.Select id="timelineSelect" aria-label="Select a timeline to display">
                        <option>Kitsap County</option>
                        <option>Bainbridge Island</option>
                        <option>Historic Seattle</option>
                        <option>Civil Rights Movement in Washington</option>
                        <option>Indigenous History of Puget Sound</option>
                    </Form.Select>
                </div>

                {/* Timeline Image */}
                <div className="mb-4 card timeline-card p-3">
                    <img
                        src={timelineImg}
                        alt="Timeline showing historical events in Kitsap County"
                        className="img-fluid rounded"
                    />
                    <div className="mt-3">
                        <h3>Kitsap County Timeline</h3>
                        <p>This timeline illustrates key events in Kitsap County's development from the 1850s through today, highlighting contributions from diverse community members and important historical moments.</p>
                    </div>
                </div>

                <Row className="mt-4">
                    <Col md={6}>
                        <Card className="mb-3">
                            <Card.Body>
                                <h3>Featured Event: 1942</h3>
                                <p>The Puget Sound Naval Shipyard expands dramatically during WWII, bringing significant demographic changes to Kitsap County.</p>
                                <button className="btn btn-secondary">Explore Related Items</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="mb-3">
                            <Card.Body>
                                <h3>Featured Event: 1974</h3>
                                <p>The Boldt Decision affirms treaty fishing rights for Native American tribes in Washington State, with significant impacts for Kitsap County communities.</p>
                                <button className="btn btn-secondary">Explore Related Items</button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </main>

            <Footer />
        </div>
    );
};

export default Timelines;