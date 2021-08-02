import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import { styles } from './styles';

function PdfPage() {
    return (
        <Document>
            <Page size="A4" style={styles.page}>

                <View style={styles.header}>

                    <View style={styles.titlePage}>
                        <Text>FATURA | CONTA DE ENERGIA ELÉTRICA</Text>
                    </View>

                    <View style={styles.headerInfo}>
                        <View style={styles.clientDataLeftSide}>
                            <Text style={styles.bold}>Shopping</Text>
                            <Text>endereço</Text>
                            <Text>CEP</Text>
                            <Text>CNPJ</Text>
                        </View>

                        <View style={styles.clientDataRightSide}>
                            {/* Imagem de loja a ser adicionada em um proximo update */}
                        </View>
                    </View>
                </View>

                <View style={styles.monthSection}>
                    <Text style={styles.bold}>FATURA MÊS DE ABRIL</Text>
                </View>

                <View style={styles.mainContent}>
                    <View style={styles.clientInfoContainer}>
                        <View style={styles.clientInfo}>
                            <Text style={styles.bold}>DADOS DO CLIENTE</Text>
                            <Text>NOME: AAAAAAA</Text>
                            <Text>CPF/CNPJ</Text>
                        </View>

                        <View style={styles.clientInfo}>
                            <Text style={styles.bold}>ENDEREÇO</Text>
                            <Text>Rua teste123</Text>
                        </View>
                    </View>

                    <View style={styles.clientInfoContainerRightSide}>
                        <View style={styles.paymentInfo}>
                            <Text style={styles.bold}>DATA DE VENCIMENTO</Text>
                            <Text style={styles.bold}>10/05/2021</Text>
                        </View>

                        <View style={styles.paymentInfo}>
                            <Text style={styles.bold}>TOTAL A PAGAR (R$)</Text>
                            <Text style={styles.bold}>127,13</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.energyContainer}>
                    <View style={styles.energyTitle}>
                        <Text style={styles.bold}>DESCRIÇÃO DO CONSUMO DE ENERGIA</Text>
                    </View>

                    {/* Titulos */}

                    <View style={styles.energyColumn}>
                        <Text style={styles.energyGridCell}></Text>
                        <Text style={styles.energyGridTitleColumn}>QUANTIDADE</Text>
                        <Text style={styles.energyGridTitleColumn}>PREÇO(R$)</Text>
                        <Text style={styles.energyGridTitleColumn}>VALOR(R$)</Text>
                    </View>

                    {/* Coluna 2 linha 1-3 */}

                    <View style={styles.energyColumn}>
                        <Text style={styles.energyGridTitle}>Consumo em kWh</Text>
                        <Text style={styles.energyGridCell}>123</Text>
                        <Text style={styles.energyGridCell}>0,45786341</Text>
                        <Text style={styles.energyGridCell}>102,10</Text>
                    </View>

                    {/* Coluna 3 linha 1-3 */}

                    <View style={styles.energyColumn}>
                        <Text style={styles.energyGridTitle}>Contrib.Ilum.PúblicaMunicipal</Text>
                        <Text style={styles.energyGridCell}></Text>
                        <Text style={styles.energyGridCell}></Text>
                        <Text style={styles.energyGridCell}>25,03</Text>
                    </View>
                    {/* Coluna 4 linha 1-3 */}

                    <View style={styles.energyColumn}>
                        <Text style={styles.energyGridTitle}>VALOR TOTAL</Text>
                        <Text style={styles.energyGridCell}></Text>
                        <Text style={styles.energyGridCell}></Text>
                        <Text style={styles.energyGridCell}>127,13</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <View style={styles.footerAlign}>
                        <Text style={styles.footerTitle}>DADOS PARA PAGAMENTO</Text>
                        <Text>Banco: 01</Text>
                        <Text>Conta: 3294329</Text>
                    </View>
                </View>

            </Page>
        </Document>
    )
}

export default PdfPage;