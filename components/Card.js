import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function Card(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>Round #{props.roundNumber + 1}</Text>
            <Text style={styles.cardText}>Opponent's Guess: {props.guessedNumber}</Text>
        </View>
    )
};

const isWidthSmaller = Dimensions.get("window").width < 380;

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#d1d100",
        borderRadius: 20,
        marginBottom: isWidthSmaller ? 3 : 5,
        padding: isWidthSmaller ? 7 : 10,
        width: isWidthSmaller ? 200 : 300,
    },
    cardText: {
        fontWeight: "bold",
        fontSize: isWidthSmaller ? 200 : 16,
    }
});