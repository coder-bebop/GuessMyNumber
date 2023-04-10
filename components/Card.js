import { Text, View, Dimensions } from 'react-native'
import { createStyle } from './utils'

export default function Card(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>Round #{props.roundNumber + 1}</Text>
            <Text style={styles.cardText}>
                Opponent's Guess: {props.guessedNumber}
            </Text>
        </View>
    )
}

const isWidthSmaller = Dimensions.get('window').width < 370

const styles = createStyle({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#d1d100',
        borderRadius: 20,
        marginBottom: isWidthSmaller ? 3 : 5,
        padding: isWidthSmaller ? 8 : 10,
        width: isWidthSmaller ? 250 : 300,
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: isWidthSmaller ? 13 : 15,
    },
})
