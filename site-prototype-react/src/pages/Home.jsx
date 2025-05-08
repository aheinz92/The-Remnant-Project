import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import images
import splashImg from '../assets/images/splash.png';
// import collection1Img from '../assets/images/collection1.png'; // Keep for featured exhibits
import collection2Img from '../assets/images/collection2.png';
import collection3Img from '../assets/images/collection3.png';
// import placesImg from '../assets/images/seattle.png'; // Replaced with emoji
// import peopleImg from '../assets/images/people2.png'; // Replaced with emoji
// import interviewsImg from '../assets/images/interview1.jpeg'; // Replaced with emoji
// import timelinesImg from '../assets/images/timeline.png'; // Replaced with emoji
import sankofaImg from '../assets/images/sankofa.png'; // Keep for Our Story
// import artifactsImg from '../assets/images/artifacts.png'; // Replaced with emoji
// Also need to keep collection1Img, collection2Img, collection3Img for the "Featured Exhibits" section
import collection1Img from '../assets/images/collection1.png';

const Home = () => { // Removed props
    return (
        <> {/* Use Fragment instead of div */}
            {/* Removed AccessibilityPanel and Navbar */}
            <main className="container py-5" id="main-content">
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

                {/* Site Navigation Cards Section */}
                <section className="mb-5">
                    <h2 className="text-center mb-4">Explore Our Site</h2>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Link to="/about" className="text-decoration-none">
                                <Card className="h-100 nav-card">
                                    <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center p-3">
                                        <img src={sankofaImg} alt="Our Story" className="mb-2" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                                        <Card.Title as="h5" className="mb-1">Our Story</Card.Title>
                                        <Card.Text style={{ fontSize: '0.9rem' }}>Learn about our mission and history.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Link to="/campaign" className="text-decoration-none">
                                <Card className="h-100 nav-card">
                                    <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center p-3">
                                        <span role="img" aria-label="Campaign" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📣</span>
                                        <Card.Title as="h5" className="mb-1">The Campaign</Card.Title>
                                        <Card.Text style={{ fontSize: '0.9rem' }}>Join us in preserving Washington's heritage.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Link to="/lesson-plans" className="text-decoration-none">
                                <Card className="h-100 nav-card">
                                    <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center p-3">
                                        <span role="img" aria-label="Lesson Plans" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</span>
                                        <Card.Title as="h5" className="mb-1">Lesson Plans</Card.Title>
                                        <Card.Text style={{ fontSize: '0.9rem' }}>Educational resources for all.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Link to="/explore" className="text-decoration-none">
                                <Card className="h-100 nav-card">
                                    <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center p-3">
                                        <span role="img" aria-label="Explore" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔍</span>
                                        <Card.Title as="h5" className="mb-1">Explore</Card.Title>
                                        <Card.Text style={{ fontSize: '0.9rem' }}>Search and discover items in the archive.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Link to="/places" className="text-decoration-none">
                                <Card className="h-100 nav-card">
                                    <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center p-3">
                                        <span role="img" aria-label="Places" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🗺️</span>
                                        <Card.Title as="h5" className="mb-1">Places</Card.Title>
                                        <Card.Text style={{ fontSize: '0.9rem' }}>Discover significant historical locations.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Link to="/exhibits" className="text-decoration-none">
                                <Card className="h-100 nav-card">
                                    <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center p-3">
                                        <span role="img" aria-label="Exhibits" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🖼️</span>
                                        <Card.Title as="h5" className="mb-1">Exhibits</Card.Title>
                                        <Card.Text style={{ fontSize: '0.9rem' }}>Explore curated digital exhibitions.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Link to="/artifacts-apparel" className="text-decoration-none">
                                <Card className="h-100 nav-card">
                                    <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center p-3">
                                        <span role="img" aria-label="Artifacts & Apparel" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏺</span>
                                        <Card.Title as="h5" className="mb-1">Artifacts & Apparel</Card.Title>
                                        <Card.Text style={{ fontSize: '0.9rem' }}>View historical items and themed gear.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col md={{ span: 4, offset: 0 }} className="mb-4"> {/* Adjusted offset, will be re-evaluated based on total cards */}
                            <Link to="/contribute" className="text-decoration-none">
                                <Card className="h-100 nav-card">
                                    <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center p-3">
                                        <span role="img" aria-label="Share Your Story" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎤</span>
                                        <Card.Title as="h5" className="mb-1">Share Your Story</Card.Title>
                                        <Card.Text style={{ fontSize: '0.9rem' }}>Contribute your narrative to our archive.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </section>

                {/* Special Collections Section */}
                <section>
                    <h2 className="text-center mb-4">Featured Exhibits</h2>
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

            {/* Removed Footer */}
        </>
    );
};

export default Home;