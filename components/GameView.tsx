import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/** Components */
import Game from './game/Game';

/** UI, CSS */
/*import { Container, Icon } from 'semantic-ui-react';
import '../styles/GameView.css';*/

/** Socket */
import { socket } from '../config';

/** Types */
import { GameData } from '../server/game-common/index';
import GameOver from './game/GameOver';

interface Props {
  gameId: string;
  isHost: boolean;
  nick: string;
  setShowGameView: Dispatch<SetStateAction<boolean>>;
}

const GameView: React.FC<Props> = ({
  gameId,
  isHost,
  nick,
  setShowGameView
}: Props) => {
  const [gameData, setGameData] = useState<GameData>();
  const [showGameOver, setShowGameOver] = useState<boolean>(false);

  socket.on('game-data', (gameData: GameData) => setGameData(gameData));
  socket.once('game-over', (gameData: GameData) => {
    setGameData(gameData);
    setShowGameOver(true);
  });

  /** Try to connect to game on initialize render */
  useEffect(() => {
    socket.connect();
    socket.emit('join-game', nick, gameId, isHost);
  }, [gameId, isHost, nick]);

  const leaveGameView = (): void => {
    socket.disconnect();
    setShowGameView(false);
  };

  const handleExitIconClick = (): void => {
    window.confirm('Do you want to abort game?') && leaveGameView();
  };


  return (
    <View style={{ height: '100%', width: '100%' }}>
        <Icon
        name='sign-out'
        color={'orange'}
        onPress={handleExitIconClick}
        />
      {showGameOver ? (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        <GameOver players={gameData!.players} />
      ) : !gameData ? (
        <View>
          <h1 style={{ color: 'white' }}>Game not started</h1>
        </View>
      ) : (
        <Game gameId={gameId} nick={nick} gameData={gameData} />
      )}
    </View>
  );
};

export default GameView;
