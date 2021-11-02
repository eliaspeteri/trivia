import React from 'react';

/** CSS, UI */
/*import BootStrapProgress from 'react-bootstrap/ProgressBar'; */
import { View, TextInput, Button, StyleSheet } from "react-native";

/** Const(s) */
/*import { timeToAnswerQuestion } from 'game-common'; */

interface Props {
  /** Time left to answer in ms */
  progress: number;
}

const ProgressBar: React.FC<Props> = ({ progress }: Props) => {
  return (
    <View>
    <ProgressBar progress={progress} />
  </View>
  );
};

export default ProgressBar;