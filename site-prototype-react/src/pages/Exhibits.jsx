import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import exhibit images
import exhibit1Img from '../assets/images/exhibit1 - Black Anchors Cover.png';
import exhibit2Img from '../assets/images/exhibit2 - The Case of Missing Remnants.png';
import exhibit3Img from '../assets/images/exhibit3 - The Black PRess.png';
import exhibit4Img from '../assets/images/exhibit4 - Red Pedagogy.png';
import exhibit5Img from '../assets/images/exhibit5 - We THe PEople.png';
import exhibit6Img from '../assets/images/exhibit6 - The Black Church.png';


const Exhibits = () => {
    const exhibitsData = [
        { id: 1, img: exhibit1Img, alt: 'Black Anchors Cover', link: '/exhibit/1' },
        { id: 2, img: exhibit2Img, alt: 'The Case of Missing Remnants Cover', link: '/exhibit/2' },
        { id: 3, img: exhibit3Img, alt: 'The Black Press Cover', link: '/exhibit/3' },
        { id: 4, img: exhibit4Img, alt: 'Red Pedagogy Cover', link: '/exhibit/4' },
        { id: 5, img: exhibit5Img, alt: 'We The People Cover', link: '/exhibit/5' },
        { id: 6, img: exhibit6Img, alt: 'The Black Church Cover', link: '/exhibit/6' },
    ];

    return (
        <main className="container my-5" id="main-content">
            {/* Special Collections Section */}
            <section>
                <h2 className="mb-4">Special Exhibits and Collections</h2> {/* Updated Heading */}
                <Row className="exhibit-gallery">
                    {exhibitsData.map((exhibit) => (
                        <Col key={exhibit.id} sm={6} md={4} lg={3} className="mb-4 px-2"> {/* Add Col for grid layout and horizontal padding */}
                           <Link to={exhibit.link} style={{ textDecoration: 'none' }}>
                               <img
                                   className="exhibit-image"
                                   src={exhibit.img}
                                   alt={exhibit.alt}
                               />
                           </Link>
                        </Col>
                    ))}
                </Row>
            </section>
        </main>
    );
};

export default Exhibits;