import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { styles } from './styles';

function PdfPage() {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>
    )

}
export default PdfPage;