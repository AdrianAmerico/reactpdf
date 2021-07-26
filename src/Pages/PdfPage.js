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

                    <View>
                        <View>
                            <Text>Shopping</Text>
                            <Text>endereço</Text>
                            <Text>CEP</Text>
                            <Text>CNPJ</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.monthSection}>
                    <Text>FATURA MÊS DE ABRIL</Text>
                </View>

                <View style={styles.mainContent}>
                    <View>
                        <View>
                            <Text>DADOS DO CLIENTE</Text>
                            <Text>NOME: AAAAAAA</Text>
                            <Text>CPF/CNPJ</Text>
                        </View>

                        <View>
                            <Text>ENDEREÇO</Text>
                            <Text>Rua teste123</Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text>DATA DE VENCIMENTO</Text>
                            <Text>10/05/2021</Text>
                        </View>

                        <View>
                            <Text>TOTAL A PAGAR (R$)</Text>
                            <Text>127,13</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.energyInfo}>
                    <View>
                        <Text>DESCRIÇÃO DO CONSUMO DE ENERGIA</Text>
                    </View>

                    {/* Titulos */}
                    <Text>QUANTIDADE</Text>
                    <Text>PREÇO(R$)</Text>
                    <Text>VALOR(R$)</Text>

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
                    <Text>VALOR TOTAL</Text>
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