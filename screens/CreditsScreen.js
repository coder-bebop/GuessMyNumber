import { View, StyleSheet, Text, Image, Pressable, ImageBackground, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function CreditsScreen({ changeScreen, attemptsNumber }) {
    return (
        <View style={styles.screen}>
            <LinearGradient colors={["#674889", "#e59977"]} style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/congratulations.png')}
                    />
            </LinearGradient>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    It took the machine {attemptsNumber} attempts to find your number
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={changeScreen}>
                    <Text style={styles.buttonText}>Retry?</Text>
                </Pressable>
            </View>
            <View style={styles.creditsContainer}>
                <Text style={styles.creditsText}>
                    DIRECTED, WRITTEN, PRODUCED {"&"} ACTED
                    {"\n"}
                    BY
                </Text>
            </View>
            <ImageBackground
                source={require("../assets/space-background.jpeg")}
                style={styles.nameContainer}>
                <View style={styles.coderContainer}>
                    <Text style={styles.coderText}>
                        Coder
                    </Text>
                </View>
                <View style={styles.bebopContainer}>
                    <Text style={styles.bebopText}>
                        Bebop
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const isWidthSmaller = Dimensions.get("window").width < 380;

const styles = StyleSheet.create({
    screen: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: isWidthSmaller ? 30 : 40,
    },
    imageContainer: {
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 180,
        backgroundColor: "#8B0000",
        padding: isWidthSmaller ? 7 : 10,
        marginBottom: isWidthSmaller ? 20 : 30
    },
    image: {
        opacity: 0.6
    },
    infoContainer: {
        alignItems: "center",
        backgroundColor: "#8b0000",
        padding: isWidthSmaller ? 9 : 12,
        borderRadius: 5,
        borderWidth: 0.5,
        marginBottom: isWidthSmaller ? 7 : 10
    },
    infoText: {
        
    },
    buttonContainer: {
        alignItems: "center",
        backgroundColor: "#8b0000",
        padding: isWidthSmaller ? 9 : 12,
        borderRadius: 15,
        borderWidth: 0.5,
        marginBottom: isWidthSmaller ? 20 : 30
    },
    button: {

    },
    buttonText: {
        fontWeight: "bold"
    },
    creditsContainer: {
        alignItems: "center",
        backgroundColor: "#8b0000",
        padding: isWidthSmaller ? 9 : 12,
        borderRadius: 5,
        borderWidth: 0.5,
        marginBottom: isWidthSmaller ? 7 : 10
    },
    creditsText: {
        fontSize: isWidthSmaller ? 13 : 17,
        textAlign: "center"
    },
    nameContainer: {
        padding: isWidthSmaller ? 7 : 10,
        width: isWidthSmaller ? 100 : 150,
        alignItems: "center",
        borderColor: "#000",
        borderWidth: 5,
        transform: [{ skewX: '-15deg' }],
    },
    coderContainer: {},
    coderText: {
        fontFamily: "Exo 2",
        fontSize: isWidthSmaller ? 20 : 30,
        color: "#ffffff",
        transform: [{ skewX: '-10deg' }],
        marginBottom: isWidthSmaller ? -12.5 : -25,
    },
    bebopContainer: {
        backgroundColor : "#0000",
        shadowColor: "#ff61af",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
    },
    bebopText: {
        fontFamily: "Mr Dafoe",
        fontSize: isWidthSmaller ? 30 : 40,
        color: "#ffffff",
        borderRadius: 200,
        shadowColor: "#ff61af",
        transform: [{ rotate: '-5deg' }],
    }
});