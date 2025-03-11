import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';

const Navbar = () => {
    const location = useLocation();

    return (
        <BootstrapNavbar expand="lg" aria-label="Main navigation">
            <Container>
                <BootstrapNavbar.Brand as={Link} to="/">The Remnant Project</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="mainNavbar" />
                <BootstrapNavbar.Collapse id="mainNavbar">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={location.pathname === '/' ? 'active' : ''}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className={location.pathname === '/about' ? 'active' : ''}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/explore"
                            className={location.pathname === '/explore' ? 'active' : ''}
                        >
                            Search & Explore
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/places"
                            className={location.pathname === '/places' ? 'active' : ''}
                        >
                            Places
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/people"
                            className={location.pathname === '/people' ? 'active' : ''}
                        >
                            People
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/interviews"
                            className={location.pathname === '/interviews' ? 'active' : ''}
                        >
                            Interviews
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
                            to="/contribute"
                            className={location.pathname === '/contribute' ? 'active' : ''}
                        >
                            Share Your Story
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;