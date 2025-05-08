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
import exhibit7Img from '../assets/images/exhibit7 - The Women.png';
import exhibit8Img from '../assets/images/exhibit8 - Virtual Store.png';
import exhibit9Img from '../assets/images/exhibit9 - The African Mask.png';
import exhibit10Img from '../assets/images/exhibit10 - The Negatives.png';


const Exhibits = () => {
    const exhibitsData = [
        { id: 1, name: 'Black Anchors', img: exhibit1Img, alt: 'Black Anchors Cover', link: '/exhibit/black-anchors' },
        { id: 2, name: 'The Case of Missing Remnants', img: exhibit2Img, alt: 'The Case of Missing Remnants Cover', link: '/exhibit/missing-remnants' },
        { id: 3, name: 'The Black Press', img: exhibit3Img, alt: 'The Black Press Cover', link: '/exhibit/black-press' },
        { id: 4, name: 'Red Pedagogy', img: exhibit4Img, alt: 'Red Pedagogy Cover', link: '/exhibit/red-pedagogy' },
        { id: 5, name: 'We The People', img: exhibit5Img, alt: 'We The People Cover', link: '/exhibit/we-the-people' },
        { id: 6, name: 'The Black Church', img: exhibit6Img, alt: 'The Black Church Cover', link: '/exhibit/the-black-church' },
        { id: 7, name: 'The Women', img: exhibit7Img, alt: 'The Women Cover', link: '/exhibit/the-women' },
        { id: 8, name: 'Virtual Store', img: exhibit8Img, alt: 'Virtual Store Cover', link: '/exhibit/virtual-store' },
        { id: 9, name: 'The African Mask', img: exhibit9Img, alt: 'The African Mask Cover', link: '/exhibit/the-african-mask' },
        { id: 10, name: 'The Negatives', img: exhibit10Img, alt: 'The Negatives Cover', link: '/exhibit/the-negatives' },
    ];

    return (
        <main className="container my-5" id="main-content">
            {/* Special Collections Section */}
            <section>
                <h2 className="mb-4">Special Exhibits and Collections</h2> {/* Updated Heading */}
                <p>Explore our comprehensive digital archives for in-depth research on key aspects of Black history. These resources provide valuable insights into the lives and contributions of Black communities, leaders, and organizations throughout history.</p>
                <p>Pages created on <a href="https://notion.ai" target="_blank" rel="noopener noreferrer">notion.ai</a></p>
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