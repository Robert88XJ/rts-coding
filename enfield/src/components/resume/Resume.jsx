import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../../media/2021-Resume.pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Resume = () =>{
  const [pageNumber, setPageNumber] = useState(1);

  const pdf = resume

  const docError = (error) => {
    console.log(error.message)
  }

  function onDocumentLoadSuccess({ numPages }) {
    setPageNumber(numPages);
  }

  return(
    <Document file={pdf} onSourceError={docError} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber}/>
    </Document>
  )
}

export default Resume