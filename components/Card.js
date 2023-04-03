import { StyleSheet, Text, View } from "react-native";


export default function Card(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>Round #{props.roundNumber + 1}</Text>
            <Text style={styles.cardText}>Opponent's Guess: {props.guessedNumber}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#d1d100",
        marginBottom: 5,
        borderRadius: 20,
        padding: 10,
        width: 300,
    },
    cardText: {
        fontWeight: "bold"
    }
});