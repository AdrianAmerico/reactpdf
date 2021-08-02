import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import Pdf from 'react-to-pdf';
import PdfPage from '../Pages/PdfPage';

const ref = React.createRef();

function PDF() {
    return (
        <>
            {/* <PDFViewer width="1000" height="1000"> */}
                {/* <div ref={ref}> */}
                    <PdfPage />
                {/* </div> */}

            {/* </PDFViewer> */}
            <Pdf targetRef={ref} filename="teste.pdf">
                {({ toPdf }) => <button onClick={toPdf}>capture</button>}
            </Pdf>
        </>
    )
}

export default PDF;