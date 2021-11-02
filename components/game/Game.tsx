import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Header } from 'react-native-elements';

/** Components */
import ProgressBar from './ProgressBar';
import QuestionIndicator from './QuestionIndicator';

/** Css UI */
/*import { Container, Grid, Header, Segment } from 'semantic-ui-react';
import '../../styles/GameView.css'; */

/** Types, Config, Socket */
import { GameData } from '../../server/game-common';
import { socket } from '../../config';
import GameSegment from './GameSegment';

interface Props {
  gameId: string;
  nick: string;
  gameData: GameData;
}

const Game: React.FC<Props> = ({ gameId, nick, gameData }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  useEffect(() => {
    socket.emit('selected-answer', selectedAnswer, gameId, nick);
  });

  const mapAnswerCards = (): JSX.Element[] => {
    return gameData?.currentQuestion?.answers.map(
      (answer: string, index: number) => (
        <View style={[styles.container, {
          flexDirection: "column"
        }]}>
          <GameSegment
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            text={answer}
            highlightCorrectAnswer={
              /** Highlight correct answer */
              gameData.showCorrectAnswer &&
              answer === gameData.currentQuestion.correctAnswer
            }
          />
          </View>
      )
    );
  };

  return (

        <View style={[styles.container, {
          flexDirection: "column"
          }]}>
          <View style={{ flex: 1, backgroundColor: "red" }}>
          <QuestionIndicator
            currentQuestion={gameData.currentQuestionIndex}
            questionTotal={gameData.questionsTotal}
          />
          </View>
        

          <View style={{ flex: 1, backgroundColor: "red" }}>
          {/** Question Segment */}
            <View>
              {gameData?.currentQuestion?.question || ''}
            </View>
         </View>

         <View style={{ flex: 1, backgroundColor: "red" }}>{mapAnswerCards()}</View>
         <View style={{ flex: 1, backgroundColor: "red" }}>
           <ProgressBar progress={gameData.timeLeftToAnswer} />
           </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Game;