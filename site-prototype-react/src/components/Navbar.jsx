import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    const location = useLocation();

    return (
        <BootstrapNavbar expand="lg" aria-label="Main navigation">
            <Container>
                <BootstrapNavbar.Brand as={Link} to="/" className="navbar-brand-custom">The Remnant Project</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="mainNavbar" />
                <BootstrapNavbar.Collapse id="mainNavbar">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className={location.pathname === '/about' ? 'active' : ''}
                        >
                            Our Story
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/campaign"
                            className={location.pathname === '/campaign' ? 'active' : ''}
                        >
                            The Campaign
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/lesson-plans"
                            className={location.pathname === '/lesson-plans' ? 'active' : ''}
                        >
                            Lesson Plans
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/explore"
                            className={location.pathname === '/explore' ? 'active' : ''}
                        >
                            Explore
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/timelines"
                            className={location.pathname === '/timelines' ? 'active' : ''}
                        >
                            Timelines
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/exhibits"
                            className={location.pathname === '/exhibits' ? 'active' : ''}
                        >
                            Exhibits
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/artifacts-apparel"
                            className={location.pathname === '/artifacts-apparel' ? 'active' : ''}
                        >
                            Artifacts & Apparel
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/contribute"
                            className={location.pathname === '/contribute' ? 'active' : ''}
                        >
                            Share Your Story
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto d-flex flex-row">
                        <Nav.Link href="https://www.facebook.com/profile.php?id=61574037418823" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                            <FaFacebook size={24} />
                        </Nav.Link>
                        <Nav.Link href="https://www.instagram.com/washingtonremnants/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                            <FaInstagram size={24} />
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;