import React from 'react';
import { View, TextInput, Button, StyleSheet } from "react-native";

/** CSS, UI */
import { Container, Grid } from 'semantic-ui-react'; 

/** Types */
import { Player } from '../../server/game-common/index';
import CSS from 'csstype';

interface Props {
  players: Player[];
}

const containerStyles: CSS.Properties = {
  backgroundColor: 'black',
  position: 'relative',
  border: '3px solid white',
  top: '5em',
  margin: '5em'
};

const GameOver: React.FC<Props> = ({ players }: Props) => {
  return (
    <View>
      <h1 style={{ color: 'white' }}>Players and their score:</h1>

      <Grid container style={containerStyles}>
        <ul style={{ color: 'white', padding: '1em', marginLeft: '1em' }}>
          {players.map((player: Player, index: number) => (
            <li key={index}>
              <p>{`Name: ${player.nick}, Points: ${player.points}`}</p>
            </li>
          ))}
        </ul>
      </Grid>
    </View>
  );
};

export default GameOver;
