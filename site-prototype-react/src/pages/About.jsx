import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AccessibilityPanel from '../components/AccessibilityPanel';

const About = ({ changeFontSize, changeFont, changeColorScheme }) => {
    return (
        <div className="font-clear">
            <AccessibilityPanel
                changeFontSize={changeFontSize}
                changeFont={changeFont}
                changeColorScheme={changeColorScheme}
            />
            <Navbar />

            <main className="container my-5" id="main-content">
                <h1>About The Remnant Project</h1>
                <p className="lead">The Remnant Project is dedicated to preserving, digitizing, and sharing the historical records and stories of Black and Indigenous communities in Washington State at Tacoma Evergreen State College.</p>

                <p>Our mission is to preserve these stories in ways that honor the people they come from, using methods that maintain authentic context and connection, and place them in the hands of the communities they represent. We are creating a digital archive, accessible online and in virtual reality, where these stories can be experienced, shared, and celebrated by everyone.</p>

                <p>We are also working to turn these archives into tools for learning—state-approved curriculum that ensures future generations grow up knowing the full history of the diverse communities who helped shape this region. This will ensure that these important historical narratives are taught in schools and recognized as integral parts of our shared history, honoring the legacy of these communities and acknowledging their vital contributions.</p>

                <Row className="mt-5">
                    <Col md={6}>
                        <h2>Our Values</h2>
                        <ul>
                            <li>Community ownership of historical narratives</li>
                            <li>Accurate representation and contextualization</li>
                            <li>Accessible preservation techniques</li>
                            <li>Inclusive historical education</li>
                            <li>Technological innovation in archival practices</li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <h2>Our Team</h2>
                        <p>The Remnant Project is led by a diverse team of historians, archivists, educators, and community members, all committed to preserving Washington's rich cultural heritage through innovative and respectful methods.</p>
                        <p>We collaborate with local communities, educational institutions, and technology partners to ensure our archives are comprehensive, accessible, and meaningful.</p>
                    </Col>
                </Row>
            </main>

            <Footer />
        </div>
    );
};

export default About;