import { View, Text, StyleSheet, Pressable, TextInput, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import { useState, useRef } from "react";

export default function StartScreen({ changeScreen }) {
    const [inputNumber, setInputNumber] = useState(-1);
    const textInput = useRef();
    const { height } = useWindowDimensions();

    function changeInputNumber(number) {
        setInputNumber(parseInt(number));
    }

    function reset() {
        textInput.current.clear();
        setInputNumber(-1);
    }

    function confirm() {
        if (inputNumber >= 0 && inputNumber < 100) {
            changeScreen(inputNumber);
        }
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
                <View style={[styles.screen, { marginTop: height < 400 ? 30 : 100 }]}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Guess My Number</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitleText}>Enter a number</Text>
                        <TextInput
                            ref={textInput}
                            style={styles.numberInput}
                            placeholder={"00"}
                            inputMode="numeric"
                            maxLength={2}
                            onChangeText={changeInputNumber}
                            />
                        <View style={styles.buttonContainer}>
                            <Pressable style={styles.button} onPress={reset}>
                                <Text style={styles.buttonText}>Reset</Text>
                            </Pressable>
                            <Pressable style={styles.button} onPress={confirm}>
                                <Text style={styles.buttonText}>Confirm</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        alignItems: "center",
    },
    titleContainer: {
        borderWidth: 5,
        borderColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        width: 220,
        height: 50,
        marginBottom: 50,
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold"
    },
    inputContainer: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#8B0000",
        padding: 30,
        borderRadius: 30,
        borderColor: "#000000",
        borderWidth: 1.5,
    },
    inputTitleText: {
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: "#000000",
        fontSize: 16,
    },
    numberInput: {
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#000000",
        paddingTop: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 30,
        width: 200,
    },
    button: {
        borderWidth: 0.5,
        borderColor: "#000000",
        borderRadius: 20,
        backgroundColor: "#a90000",
        padding: 13
    },
    buttonText: {
        fontSize: 15,
    }
});