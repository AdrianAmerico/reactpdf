import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    page: {
        display: "flex",
        flexDirection: 'column',
        padding: "15px"
    },
    titlePage: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold"
    },
    headerInfo: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "30px auto",
        width: "90%",
    },
    clientDataLeftSide: {
        display: "flex",
        flexDirection: "column",
    },
    clientDataRightSide: {
        width: "70px",
        height: "70px"
    },
    monthSection: {
        border: "1px solid black",
        textAlign: "center",
        padding: "5px 0"
    },
    mainContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "10px 0"
    },
    clientInfoContainer: {
        display: "flex",
        flexDirection: "column",
    },
    clientInfo: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        margin: "10px 0",
        width: "500px",
        padding: "10px",
    },
    clientInfoContainerRightSide: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        justifyContent: "space-around",
        alignItems: "stretch",
        flex: "0 1",
        padding: "5px 25px"
    },
    paymentInfo: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
    },
    energyContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        border: "1px solid black",
        gridGap: "1px",
    },
    energyTitle: {
        gridColumn: "1 / -1",
        background: "#ccc",
        textAlign: "center"
    },
    energyColumn: {
        display: "grid",
        gridColumn: "1 / -1",
        gridTemplateColumns: "repeat(4, 1fr)",
        textAlign: "center"
    },
    bold: {
        fontWeight: "bold",
    }
});
