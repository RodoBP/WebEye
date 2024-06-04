import React, { useState, useEffect } from 'react';
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
import { Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { jsPDF } from 'jspdf';

function App() {
  const [image, setImage] = useState(null);
  const [analysis, setAnalysis] = useState('');
  const [feedback, setFeedback] = useState('');
  const [downloadEnabled, setDownloadEnabled] = useState(false);
  const [analysisAvailable, setAnalysisAvailable] = useState(false);

  const handleImageUpload = (file) => {
    setImage(file);
  };

  const handleAnalyze = () => {
    // Lógica para analizar la imagen
    setAnalysis('This is a sample analysis.');
  };

  const handleFeedback = (response) => {
    // setFeedback(response);
    setFeedback('This is a sample feedback.');
  };

  useEffect(() => {
    if (image && analysis && !feedback) {
      setAnalysisAvailable(true);
    }
    if (image && analysis && feedback) {
      setDownloadEnabled(true);
    }
  }, [image, analysis, feedback]);

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([analysis], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "contenido.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const downloadPdfFile = () => {
    const doc = new jsPDF();
    doc.text(analysis, 10, 10);
    doc.save("contenido.pdf");
  };

  return (
    <div className="container mx-auto p-4" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1 }}>
        {/* Logo */}
        <WebEyeAnimation />

        {/* Handle Image Uploader and Analyze Button */}
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

        {/* Analysis TextArea */}
        <Form.Group controlId="analysis.Textarea" className='mt-4'>
          <Form.Label>Analysis:</Form.Label>
          <Form.Control as="textarea" readOnly value={analysis} />
          {/* <AnalysisOutput analysis={analysis} /> */}
        </Form.Group>

        {/* Download and Feedback Buttons */}
        <Container className='text-center'>
          <Row>
            {/* <Col><DownloadButton text="Download as TXT" fileType="TXT" disabled={!downloadEnabled} onClick={downloadTxtFile} /></Col>
            <Col><DownloadButton text="Download as PDF" fileType="PDF" disabled={!downloadEnabled} onClick={downloadPdfFile} /></Col> */}
            <Col>
              <div className="d-grid gap-2 mt-4">
                <Button variant="secondary" size="lg" onClick={downloadTxtFile} disabled={!downloadEnabled}>
                  Download as TXT
                </Button>
              </div>
            </Col>
            <Col>
              <div className="d-grid gap-2 mt-4">
                <Button variant="secondary" size="lg" onClick={downloadPdfFile} disabled={!downloadEnabled}>
                  Download as PDF
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            {/* <Col><FeedbackButton text="Good Response" onClick={() => handleFeedback('Good Response')} /></Col>
            <Col><FeedbackButton text="Bad Response" onClick={() => handleFeedback('Bad Response')} /></Col> */}
            <Col>
              <div className="d-grid gap-2 mt-4">
                <Button variant="success" size="lg" onClick={() => handleFeedback('Good Response')} disabled={!analysisAvailable}>
                  Good Response
                </Button>
              </div>
            </Col>
            <Col>
              <div className="d-grid gap-2 mt-4">
                <Button variant="danger" size="lg" onClick={() => handleFeedback('Bad Response')} disabled={!analysisAvailable}>
                  Bad Response
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Feedback TextArea */}
        <Form.Group controlId="feedback.Textarea" className='mt-4'>
          <Form.Label>Feedback:</Form.Label>
          <Form.Control as="textarea" readOnly value={feedback} />
          {/* <FeedbackResponse feedback={feedback} /> */}
        </Form.Group>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
