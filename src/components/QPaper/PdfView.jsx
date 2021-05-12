import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useState } from "react";
import "./PdfView.css";

function PdfView(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  }

  return (
    <div>
      <div className="container">
        <div className="d-flex flex-row-reverse">
          {props.pdfLink && (
            <div className="p-2">
              <span>
                Page {pageNumber} of {numPages}
              </span>
              <span>&nbsp;</span>
              <button
                className="btn btn-info"
                onClick={() => {
                  setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1);
                }}
              >
                Previous
              </button>
              <span>&nbsp;</span>
              <button
                className="btn btn-info"
                onClick={() => {
                  setPageNumber(
                    pageNumber < numPages ? pageNumber + 1 : numPages
                  );
                }}
              >
                Next
              </button>
            </div>
          )}
        </div>

        <div id="PdfContainer">
          <Document
            file={props.pdfLink}
            onLoadSuccess={onDocumentLoadSuccess}
            noData=""
            className="PDFDocument"
            loading={
              <div className="d-flex align-items-center">
                <strong>Loading... &nbsp;&nbsp;&nbsp;</strong>
                <div
                  className="spinner-border ml-auto text-info"
                  role="status"
                  aria-hidden="true"
                ></div>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              onLoadSuccess={removeTextLayerOffset}
              className="PDFPage"
            />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default PdfView;
