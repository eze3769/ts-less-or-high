import React from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { palette, shadowProp } from '../../constants';
import GameScreen from '../gameScreen';
import IntroComponent from '../intro';

type MainProps = {
  className?: string;
  header?: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ header }) => {
  const [selectedNumber, setSelectedNumber] = React.useState<number | ''>(1);
  const [startGame, setStartGame] = React.useState<boolean>(false);

  const handleStartGame = (value: boolean) => {
    setStartGame(value);
  };

  const handleSelectedNumber = (number: number | '') => {
    setSelectedNumber(number);
  };

  return (
    <View style={style.root}>
      <View style={[style.container, shadowProp]}>
        {!startGame ? (
          <IntroComponent
            selectedNumber={selectedNumber}
            handleStartGame={handleStartGame}
            handleNumber={handleSelectedNumber}
          />
        ) : (
          <GameScreen
            number={selectedNumber as number}
            handleStartGame={handleStartGame}
            handleNumber={handleSelectedNumber}
          />
        )}
      </View>
    </View>
  );
};

export default Main;

const style = StyleSheet.create({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    margin: 20,
    marginTop: '50%',
    width: '90%',
    backgroundColor: palette.greyScale.dark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
