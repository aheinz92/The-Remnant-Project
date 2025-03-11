import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AccessibilityPanel from '../components/AccessibilityPanel';

// Import images
import collectionItem1Img from '../assets/images/collectionitem1.png';
import collectionItem3Img from '../assets/images/collectionitem3.png';
import collectionItem5Img from '../assets/images/collectionitem5.png';

const Explore = ({ changeFontSize, changeFont, changeColorScheme }) => {
    return (
        <div className="font-cozy">
            <AccessibilityPanel
                changeFontSize={changeFontSize}
                changeFont={changeFont}
                changeColorScheme={changeColorScheme}
            />
            <Navbar />

            <main className="container my-5" id="main-content">
                <h1>Search & Explore the Archive</h1>
                <p className="lead">Discover historical items, stories, and collections from Washington State's diverse communities.</p>

                {/* Search Bar */}
                <Form action="/searchresults" method="GET" role="search" className="mb-4">
                    <InputGroup>
                        <Form.Label htmlFor="searchQuery" className="sr-only">Search the archive</Form.Label>
                        <Form.Control
                            id="searchQuery"
                            type="text"
                            name="query"
                            placeholder="Search by keyword, location, time period..."
                        />
                        <Button variant="secondary" type="submit">
                            <i className="fas fa-search me-2"></i>Search
                        </Button>
                    </InputGroup>
                </Form>

                {/* Tag Search Section */}
                <Card className="mb-4">
                    <Card.Body>
                        <h3>Browse by Tag</h3>
                        <Form action="/searchresults" method="GET" role="search" className="mb-3">
                            <InputGroup>
                                <Form.Control type="text" name="tag" placeholder="Search for a tag..." />
                                <Button variant="secondary" type="submit">
                                    <i className="fas fa-search me-2"></i>Find Tag
                                </Button>
                            </InputGroup>
                        </Form>

                        <div className="popular-tags">
                            <h5>Popular Tags:</h5>
                            <div className="tag-list">
                                <button className="tag-button">Civil Rights <span className="tag-count">24</span></button>
                                <button className="tag-button">Photographs <span className="tag-count">18</span></button>
                                <button className="tag-button">Seattle <span className="tag-count">15</span></button>
                                <button className="tag-button">1960s <span className="tag-count">12</span></button>
                                <button className="tag-button">Education <span className="tag-count">9</span></button>
                                <button className="tag-button">Community <span className="tag-count">7</span></button>
                                <button className="tag-button">Family <span className="tag-count">6</span></button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>

                {/* Filter Options */}
                <Row className="mb-4">
                    <Col md={6} className="mb-3">
                        <Card className="h-100">
                            <Card.Body>
                                <h5 className="card-title">Filter by Categories</h5>
                                <div className="d-flex flex-wrap">
                                    <button className="tag-button">Photographs</button>
                                    <button className="tag-button">Documents</button>
                                    <button className="tag-button">Oral Histories</button>
                                    <button className="tag-button">Artifacts</button>
                                    <button className="tag-button">News Articles</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Card className="h-100">
                            <Card.Body>
                                <h5 className="card-title">Filter by Time Period</h5>
                                <div className="d-flex flex-wrap">
                                    <button className="tag-button">Pre-1900</button>
                                    <button className="tag-button">1900-1950</button>
                                    <button className="tag-button">1950-1970</button>
                                    <button className="tag-button">1970-2000</button>
                                    <button className="tag-button">2000-Present</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <h2 className="mt-5">Featured Items</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={collectionItem1Img} alt="Featured archive item" />
                            <Card.Body>
                                <Card.Title>Girls Reserve, Phyllis Wheatley/ YWCA</Card.Title>
                                <Link to="/item" className="btn btn-secondary">View Item</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={collectionItem3Img} alt="Featured archive item" />
                            <Card.Body>
                                <Card.Title>Black Panthers on the steps of the Legislative Building</Card.Title>
                                <Link to="/item" className="btn btn-secondary">View Item</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={collectionItem5Img} alt="Featured archive item" />
                            <Card.Body>
                                <Card.Title>Family gathering in Spokane</Card.Title>
                                <Link to="/item" className="btn btn-secondary">View Item</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </main>

            <Footer />
        </div>
    );
};

export default Explore;