import React from 'react';
import Pdf from 'react-to-pdf';
import PdfPage from '../Pages/PdfPage';

const ref = React.createRef();

const PDF = (props) => {
    return (
        <>
            <div ref={ref}>
                <PdfPage />
            </div>
            <Pdf targetRef={ref} filename="teste.pdf">
                {({ toPdf }) => <button onClick={toPdf}>capture</button>}
            </Pdf>
        </>
    )
}

export default PDF;