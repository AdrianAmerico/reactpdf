import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
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
                            <Text style={{ fontWeight: "bold" }}>Shopping</Text>
                            <Text>endereço</Text>
                            <Text>CEP</Text>
                            <Text>CNPJ</Text>
                        </View>

                        <View style={styles.clientDataRightSide}>
                            <img src="https://i.stack.imgur.com/5dG21.png" alt="" style={{ width: "100%", height: "100%" }} />
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
                    <Text style={styles.bold}>QUANTIDADE</Text>
                    <Text style={styles.bold}>PREÇO(R$)</Text>
                    <Text style={styles.bold}>VALOR(R$)</Text>

                    {/* Coluna 2 linha 1-3 */}
                    <Text>Consumo em kWh</Text>
                    <Text>123</Text>
                    <Text>0,45786341</Text>
                    <Text>102,10</Text>

                    {/* Coluna 3 linha 1-3 */}

                    <Text>Contrib.Ilum.PúblicaMunicipal</Text>
                    <Text></Text>
                    <Text></Text>
                    <Text>25,03</Text>

                    {/* Coluna 4 linha 1-3 */}
                    <Text style={styles.bold}>VALOR TOTAL</Text>
                    <Text>127,13</Text>
                </View>

                <View style={styles.footer}>
                    <View>
                        <Text>DADOS PARA PAGAMENTO</Text>

                        <View>
                            <Text>Banco: 01</Text>
                            <Text>Conta: 3294329</Text>
                        </View>
                    </View>
                </View>

            </Page>
        </Document>
    )

}
export default PdfPage;