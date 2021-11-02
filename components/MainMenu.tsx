import { whileStatement } from '@babel/types';
import React, { Dispatch, SetStateAction } from 'react';

/** CSS, UI */
/*
import '../styles/MainMenu.css'; */
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, ImageBackgroundBase } from "react-native";
import { Divider, Header } from 'react-native-elements';


/** Config / Socket */
import { socket } from '../config';

interface Props {
  nick: string;
  setIsHost: Dispatch<SetStateAction<boolean>>;
  setGameId: Dispatch<SetStateAction<string>>;
  setNick: Dispatch<SetStateAction<string>>;
  setShowGameView: Dispatch<SetStateAction<boolean>>;
}




const MainMenu: React.FC<Props> = ({
  nick,
  setIsHost,
  setGameId,
  setNick,
  setShowGameView
}: Props) => {
  const initializeHostGame = (): void => {
    if (!nick) {
      alert('Choose nickname');
      return;
    }

    socket.connect();
    // eslint-disable-next-line
    socket.emit('host-game', (response: any) => {
      setGameId(response.gameId as string);
      setIsHost(true);
      setNick(nick);
      setShowGameView(true);
    });
  };

  return (
    <ImageBackground source={require('../resources/photo-1520034475321-cbe63696469a.webp')} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      <Text>{nick}</Text>
     <Text style={styles.title}>Main Menu</Text>

     <View style={styles.horizontal1}>
     <Divider />
     </View>
      <Button
      onPress={initializeHostGame}
      title="HOST"
      />
      <View style={styles.horizontal}>
     <Divider />
     </View>
      <Button
      onPress={initializeHostGame}
      title="JOIN"
      />
            <View style={styles.horizontal}>
     <Divider />
     </View>
      <TextInput style={styles.input}
         placeholder ="username"
         onChangeText={text => setNick(text)}
      />
                  <View style={styles.horizontal}>
     <Divider />
     </View>
    </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: "space-between",
      backgroundColor: "black",
      padding: 4,
      borderColor: "white",
      borderStyle: 'solid',
      position: 'relative',
      margin: 60,
      borderWidth: 1,
      textAlign: 'center',
    },
    title: {
      color: "white",
      fontSize: 30,
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
    input: {
      color: "black",
      height: 40,
      backgroundColor: 'white',
      width: 100,
      
    },
    button: {

    },
    horizontal1: {
      marginBottom: 40,
    },
    horizontal: {
      marginBottom: 20,
    },
});

export default MainMenu; 