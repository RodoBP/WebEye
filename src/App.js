import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import AnalyzeButton from './components/AnalyzeButton';
import DownloadButton from './components/DownloadButton';
import FeedbackButton from './components/FeedbackButton';
import AnalysisOutput from './components/AnalysisOutput';
import FeedbackResponse from './components/FeedbackResponse';
import WebEyeAnimation from './components/WebEyeAnimation';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [image, setImage] = useState(null);
  const [analysis, setAnalysis] = useState('');
  const [feedback, setFeedback] = useState('');
  const [downloadEnabled, setDownloadEnabled] = useState(false);

  const handleImageUpload = (file) => {
    setImage(file);
  };

  const handleAnalyze = () => {
    // Lógica para analizar la imagen
    setAnalysis('This is a sample analysis.');
  };

  const handleFeedback = (response) => {
    setFeedback(response);
    setDownloadEnabled(true);
  };

  return (
    <div className="container mx-auto p-4" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1 }}>
        <WebEyeAnimation />
        <Container className='text-center'>
          <Row >
            <Col sm={10}>
              <ImageUploader onImageUpload={handleImageUpload} />
            </Col>
            <Col sm={2}>
              <AnalyzeButton onClick={handleAnalyze} />
            </Col>
          </Row>
        </Container>
        <AnalysisOutput analysis={analysis} />
        <Container className='text-center'>
          <Row>
            <Col><DownloadButton text="Download as TXT" fileType="TXT" disabled={!downloadEnabled} /></Col>
            <Col><DownloadButton text="Download as PDF" fileType="PDF" disabled={!downloadEnabled} /></Col>
          </Row>
          <Row>
            <Col><FeedbackButton text="Good Response" onClick={() => handleFeedback('Good Response')} /></Col>
            <Col><FeedbackButton text="Bad Response" onClick={() => handleFeedback('Bad Response')} /></Col>
          </Row>
        </Container>
        <FeedbackResponse feedback={feedback} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
