import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import Pdf from 'react-to-pdf';
import PdfPage from '../Pages/PdfPage';

const ref = React.createRef();

function PDF() {
    return (
        <>
            <div ref={ref}>
                {/* <PDFViewer width="800px" height="600px"> */}
                <div style={{ width: "210mm", height: "297mm", background: "#f2f4f5" }}>
                    <PdfPage />
                </div>
                {/* </PDFViewer> */}
            </div>
            <Pdf targetRef={ref} filename="teste.pdf">
                {({ toPdf }) => <button onClick={toPdf}>capture</button>}
            </Pdf>
        </>
    )
}

export default PDF;