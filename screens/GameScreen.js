import { useEffect, useState } from 'react'
import {
    View,
    Text,
    Pressable,
    FlatList,
    Dimensions,
    useWindowDimensions,
    ScrollView,
} from 'react-native'
import Card from '../components/Card'
import { generateRandomInt, cheatingPrompt } from '../utils'

export default function GameScreen({ changeScreen, inputNumber }) {
    const [lowest, setLowest] = useState(0)
    const [highest, setHighest] = useState(100)
    const [randomInt, setRandomInt] = useState(-1)
    const [guessRounds, setGuessRounds] = useState([])
    const { height } = useWindowDimensions()

    useEffect(() => {
        const newRandomInt = generateRandomInt(lowest, highest)

        if (newRandomInt === inputNumber) {
            changeScreen(guessRounds.length + 1)
            return
        }

        setRandomInt(newRandomInt)
        setGuessRounds((rounds) => [...rounds, newRandomInt])
    }, [lowest, highest])

    return (
        <ScrollView style={{ flex: 1 }}>
            <View
                style={[styles.screen, { marginTop: height < 400 ? 30 : 80 }]}
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Opponent's Guess</Text>
                </View>
                <View style={styles.numberContainer}>
                    <Text style={styles.numberText}>{randomInt}</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.instructionsText}>
                        Higher or lower?
                    </Text>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={styles.button}
                            onPress={() =>
                                randomInt < inputNumber
                                    ? cheatingPrompt()
                                    : setHighest(randomInt)
                            }
                        >
                            <Text style={styles.buttonText}>—</Text>
                        </Pressable>
                        <Pressable
                            style={styles.button}
                            onPress={() =>
                                randomInt > inputNumber
                                    ? cheatingPrompt()
                                    : setLowest(randomInt + 1)
                            }
                        >
                            <Text style={styles.buttonText}>+</Text>
                        </Pressable>
                    </View>
                </View>
                <FlatList
                    style={styles.roundsContainer}
                    data={guessRounds}
                    renderItem={({ item, index }) => (
                        <Card roundNumber={index} guessedNumber={item} />
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
        </ScrollView>
    )
}

const isWidthSmaller = Dimensions.get('window').width < 370

const styles = createStyle({
    screen: {
        alignItems: 'center',
        flex: 1,
    },
    titleContainer: {
        borderWidth: 5,
        borderColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: isWidthSmaller ? 220 : 250,
        height: isWidthSmaller ? 70 : 80,
        marginBottom: isWidthSmaller ? 17 : 20,
    },
    titleText: {
        fontSize: isWidthSmaller ? 15 : 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    numberContainer: {
        borderWidth: 5,
        borderColor: '#daa520',
        alignItems: 'center',
        justifyContent: 'center',
        width: isWidthSmaller ? 190 : 220,
        height: isWidthSmaller ? 70 : 80,
        marginBottom: isWidthSmaller ? 23 : 30,
    },
    numberText: {
        alignItems: 'center',
        fontSize: isWidthSmaller ? 17 : 20,
        color: '#daa520',
    },
    inputContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#8B0000',
        padding: isWidthSmaller ? 23 : 30,
        borderRadius: 15,
        borderColor: '#000000',
        borderWidth: 0.75,
        marginBottom: isWidthSmaller ? 17 : 20,
    },
    instructionsText: {
        color: '#daa520',
        fontSize: isWidthSmaller ? 15 : 18,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: isWidthSmaller ? 23 : 30,
        width: isWidthSmaller ? 190 : 220,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#a90000',
        borderWidth: 0.5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: isWidthSmaller ? 9 : 12,
        width: isWidthSmaller ? 80 : 100,
    },
    buttonText: {
        fontSize: isWidthSmaller ? 13 : 16,
    },
    roundsContainer: {},
})
