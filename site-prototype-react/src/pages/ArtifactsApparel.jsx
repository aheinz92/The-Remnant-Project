import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AccessibilityPanel from '../components/AccessibilityPanel';

// Import images
import artifactsImage from '../assets/images/artifacts.png'; // Assuming this is the correct path
import apparelImage from '../assets/images/apparel.png';   // Assuming this is the correct path

// Import styles if needed, though react-bootstrap handles much of it
import '../assets/styles/custom.css';

const ArtifactsApparel = ({ changeFontSize, changeFont, changeColorScheme }) => {
  return (
    <div className="font-clear"> {/* Match font style class if needed */}
      <AccessibilityPanel
        changeFontSize={changeFontSize}
        changeFont={changeFont}
        changeColorScheme={changeColorScheme}
      />
      <Navbar />

      <main className="container my-5" id="main-content">
        <h1 className="text-3xl font-bold mb-4">Artifacts & Apparel</h1>

        {/* Artifacts and Apparel Sections */}
        <Row className="mb-4">
          <Col md={6} className="mb-4 mb-md-0 d-flex"> {/* Use d-flex for equal height */}
            <Card className="h-100 shadow-sm flex-fill"> {/* Use flex-fill */}
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h2">Artifacts</Card.Title>
                <Card.Text>
                  Purchase digital assets to help preserve and share
                  Black and Indigenous history. Each asset funds the
                  protection and digitization of invaluable artifacts,
                  ensuring our stories live on for generations.
                </Card.Text>
                {/* Image moved below text, centered, max height */}
                <img
                  src={artifactsImage}
                  alt="Artifacts preview"
                  style={{ maxHeight: '250px', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '1rem' }}
                  className="img-fluid mt-3" // Added margin top for spacing
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="d-flex"> {/* Use d-flex for equal height */}
            <Card className="h-100 shadow-sm flex-fill"> {/* Use flex-fill */}
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h2">Apparel</Card.Title>
                <Card.Text>
                  Support the movement by purchasing exclusive
                  apparel. Each piece tells a story and funds our
                  efforts to preserve Black and Indigenous history.
                  Wear your pride and help protect our legacy.
                </Card.Text>
                 {/* Image moved below text, centered, max height */}
                <img
                  src={apparelImage}
                  alt="Apparel preview"
                  style={{ maxHeight: '250px', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '1rem' }}
                  className="img-fluid mt-3" // Added margin top for spacing
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </main>

      <Footer />
    </div>
  );
};

export default ArtifactsApparel;