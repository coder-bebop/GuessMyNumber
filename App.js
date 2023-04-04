import { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, View, Text, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Start, Game, Credits } from "./screens";
import * as Font from 'expo-font';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const startGameBound = startGame.bind(this);
  const showCreditsBound = showCredits.bind(this);
  const restartGameBound = restartGame.bind(this);
  const [currentScreen, setCurrentScreen] = useState(<Start changeScreen={startGameBound} />);

  function startGame(number) {
    setCurrentScreen(<Game changeScreen={showCreditsBound} inputNumber={number} />);
  }

  function showCredits(attempts) {
    setCurrentScreen(<Credits changeScreen={restartGameBound} attemptsNumber={attempts} />);
  }

  function restartGame() {
    setCurrentScreen(<Start changeScreen={startGameBound} />);
  }
  useEffect(() => {
    async function getFonts() {
      await Font.loadAsync({
        "Exo 1": require("./assets/fonts/Exo-VariableFont_wght.ttf"),
        "Exo 2": require("./assets/fonts/Exo-ExtraBoldItalic.ttf"),
        "Mr Dafoe": require("./assets/fonts/MrDafoe-Regular.ttf"),
      });

      setFontsLoaded(true);
    }
    getFonts();
  }, []);
 
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('./assets/casino-background.jpeg')}
      imageStyle={styles.backgroundImage}
      style={styles.rootScreen}>
        <SafeAreaView style={styles.rootScreen}>{currentScreen}</SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    flex: 1
  },
  backgroundImage: {
    opacity: 0.75
  }
});