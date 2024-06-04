import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import AnalyzeButton from './components/AnalyzeButton';
import DownloadButton from './components/DownloadButton';
import FeedbackButton from './components/FeedbackButton';
import AnalysisOutput from './components/AnalysisOutput';
import FeedbackResponse from './components/FeedbackResponse';
import WebEyeAnimation from './components/WebEyeAnimation';

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
    <div className="container mx-auto p-4">
      <WebEyeAnimation />
      <ImageUploader onImageUpload={handleImageUpload} />
      <AnalyzeButton onClick={handleAnalyze} />
      <AnalysisOutput analysis={analysis} />
      <div className="flex justify-around mt-4">
        <DownloadButton text="Download as TXT" fileType="TXT" disabled={!downloadEnabled} />
        <DownloadButton text="Download as PDF" fileType="PDF" disabled={!downloadEnabled} />
      </div>
      <div className="flex justify-around mt-4">
        <FeedbackButton text="Good Response" onClick={() => handleFeedback('Good Response')} />
        <FeedbackButton text="Bad Response" onClick={() => handleFeedback('Bad Response')} />
      </div>
      <FeedbackResponse feedback={feedback} />
    </div>
  );
}

export default App;
