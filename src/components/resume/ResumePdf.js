import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const ResumePdf = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <button onClick={() => setPageNumber(1)}>Open Resume</button>
      {pageNumber && (
        <Document
          file="./Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      )}
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
};

export default ResumePdf;
