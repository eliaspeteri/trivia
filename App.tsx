import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground } from "react-native";

/** Components */
import MainMenu from './components/MainMenu';
import GameView from './components/GameView';


/** CSS, UI */
/*import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameView from './components/GameView'; */



const App: React.FC = () => {
  const [nick, setNick] = useState<string>('');
  const [gameId, setGameId] = useState<string>('');
  const [showGameView, setShowGameView] = useState<boolean>(false);
  const [isHost, setIsHost] = useState<boolean>(false);


  return (
     <ImageBackground source={require('./resources/photo-1520034475321-cbe63696469a.webp')} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      {showGameView ? (
        <GameView
          gameId={gameId}
          isHost={isHost}
          nick={nick}
          setShowGameView={setShowGameView}
        />
      ) : (
        <MainMenu
          nick={nick}
          setNick={setNick}
          setShowGameView={setShowGameView}
          setGameId={setGameId}
          setIsHost={setIsHost}
        />
      )}
    </View>
    </ImageBackground>
  );
}; 

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
      flex: 1,
  },
});

export default App;
