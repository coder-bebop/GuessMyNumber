import { Alert, StyleSheet } from 'react-native'

export const generateRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min) + min)
}

export const cheatingPrompt = () => {
    Alert.alert(
        'No cheating!',
        "We know you're misleading us.\nWe'll still catch up to you...",
        [
            {
                text: 'OK',
            },
        ]
    )
}

export const createStyle = (styleObject) => {
    return StyleSheet.create(styleObject)
}
