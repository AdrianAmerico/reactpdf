import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    page: {
        display: "flex",
        flexDirection: 'column',
        padding: "15px",
        fontSize: "12pt",
        margin: "0",
        boxSizing: "border-box"
    },
    header: {
    },
    titlePage: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontWeight: "bold",
        alignItems: "center"
    },
    headerInfo: {
        display: "flex",
        margin: "10px auto",
        width: "90%",
    },
    clientDataLeftSide: {
        display: "flex",
        flexDirection: "column",
    },
    monthSection: {
        border: "1px solid black",
        textAlign: "center",
        padding: "5px 0",
        margin: "30px 0"
    },
    mainContent: {
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-between",
        margin: "20px 0",
        width: "100%"
    },
    clientInfoContainer: {
        display: "flex",
        flexDirection: "column",
        flex: "3"
    },
    clientInfo: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        margin: "10px 0",
        padding: "10px",
    },
    mainContentCenter: {
        flex: "1"
    },
    clientInfoContainerRightSide: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        justifyContent: "center",
        flex: "1.2 1",
        textAlign: "center",
        padding: "0 5px"
    },
    paymentInfo: {
        display: "flex",
        flexDirection: "column",
        margin: "2.5px 0",
        fontSize: "10pt"
    },

    energyContainer: {
        display: "flex",
        border: "0.5 solid black",
        width: "100%",
    },
    energyTitle: {
        border: "0.5px solid black",
        alignItems: "center",
        padding: "1px 0"
    },
    energyColumn: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"

    },
    energyGridTitle: {
        flex: "1.2",
        border: "0.5px solid black",
        alignItems: "center",
        padding: "1px 0"
    },
    energyGridTitleColumn: {
        flex: "1",
        textAlign: "center",
        border: "0.5px solid black",
        alignItems: "center",
        padding: "1px 0"
    },
    energyGridCell: {
        flex: "1",
        display: "flex",
        textAlign: "center",
        border: "0.5px solid black",
        alignItems: "center",
        padding: "1px 0"
    },

    footer: {
        border: "1px solid black",
        margin: "50px 0",
        height: "100px"
    },
    footerAlign: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "70%"
    },
    footerTitle: {
        fontWeight: "bold",
        textAlign: "center"
    },
    bold: {
        fontWeight: "700",
    }
});
