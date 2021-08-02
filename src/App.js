import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import PdfPage from './Pages/PdfPage';

function App() {
  return (
    <div className="App">
      <PDFViewer width="1000" height="1000">
        <PdfPage />
      </PDFViewer>
    </div>
  );
}

export default App;