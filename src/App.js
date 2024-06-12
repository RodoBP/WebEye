import React, { useState, useEffect } from 'react';
import ImageUploader from './components/ImageUploader';
import AnalyzeButton from './components/AnalyzeButton';
import WebEyeAnimation from './components/WebEyeAnimation';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form, Spinner } from 'react-bootstrap';
import { jsPDF } from 'jspdf';
import axios from 'axios';
import './App.css'; // Import your CSS file

function App() {
  const [image, setImage] = useState(null);
  const [analysis, setAnalysis] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(''); // Define feedback state
  const [downloadEnabled, setDownloadEnabled] = useState(false);
  const [feedbackEnabled, setFeedbackEnabled] = useState(false);
  const [analysisEnabled, setAnalysisEnabled] = useState(false);

  const handleImageUpload = (file) => {
    setImage(file);
  };

  const handleAnalyze = () => {
    if (image) {
      setLoading(true);
      setError('');
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result.split(',')[1];
        await sendImageToOpenAI(base64Image);
      };
      reader.readAsDataURL(image);
    }
  };

  const sendImageToOpenAI = async (base64Image) => {
    const otterKey = process.env.REACT_APP_OPENAI_API_KEY;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${otterKey}`,
    };

    const payload = {
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Identify each element you can interact with. After that, identify the html code of each element and generate a list of test cases in JUnit format to test the functionality of each element. Just show me the Junit cases.',
            },
            {
              type: 'image_url',
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`,
              },
            },
          ],
        },
      ],
      max_tokens: 1000,
    };

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', payload, { headers });
      setAnalysis(response.data.choices[0].message.content);
      setDownloadEnabled(true);
      setFeedbackEnabled(true);
    } catch (error) {
      setError('Error sending request to OpenAI');
      console.error('Error sending request to OpenAI', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFeedback = (response) => {
    setFeedback(response);
  };

  useEffect(() => {
    if (image && !analysis) {
      setAnalysisEnabled(true);
    }
  }, [image, analysis]);

  const downloadTxtFile = () => {
    const element = document.createElement('a');
    const file = new Blob([analysis], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'contenido.txt';
    document.body.appendChild(element); // Required for this to work in Firefox
    element.click();
  };

  const downloadPdfFile = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    const margin = 10;
    const maxLineWidth = pageWidth - margin * 2;
    const lineHeight = 1.2 * doc.internal.getFontSize();

    const lines = doc.splitTextToSize(analysis, maxLineWidth);
    let cursorY = margin;

    lines.forEach(line => {
      if (cursorY + lineHeight > pageHeight - margin) {
        doc.addPage();
        cursorY = margin;
      }
      doc.text(line, margin, cursorY);
      cursorY += lineHeight;
    });

    doc.save('contenido.pdf');
  };

  return (
    <div className="app-container">
      <header className="header">
        <WebEyeAnimation />
      </header>
      <div className="content">
        <div className="input-area">
          <Container className="text-center">
            <Row>
              <Col sm={12}>
                <ImageUploader onImageUpload={handleImageUpload} />
              </Col>
              <Col sm={12}>
                <AnalyzeButton onClick={handleAnalyze} disabled={!analysisEnabled} />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="analysis-area">
          <Form.Group controlId="analysis.Textarea" className="mt-4">
            <Form.Label>Analysis:</Form.Label>
            <Form.Control as="textarea" readOnly value={loading ? 'Processing...' : error ? error : analysis} style={{ height: '55vh' }} />
          </Form.Group>
          <Container className="text-center">
            <Row>
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
              <Col>
                <div className="d-grid gap-2 mt-4">
                  <Button variant="success" size="lg" onClick={() => handleFeedback('Good Response')} disabled={!feedbackEnabled}>
                    Good Response
                  </Button>
                </div>
              </Col>
              <Col>
                <div className="d-grid gap-2 mt-4">
                  <Button variant="danger" size="lg" onClick={() => handleFeedback('Bad Response')} disabled={!feedbackEnabled}>
                    Bad Response
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;