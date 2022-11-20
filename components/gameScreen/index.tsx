import React from 'react';
import { Button, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { palette, shadowProp } from '../../constants';
import { calcNewNumber } from '../../utils/randomNumber';

type GameScreenProps = {
  className?: string;
  number: number;
  handleStartGame: (value: boolean) => void;
  handleNumber: (number: number | '') => void;
};

interface Results {
  result: 'loose' | 'win' | 'tie';
  current: number;
  newNumber: number;
  selection: 'greater' | 'less';
}

const GameScreen: React.FC<GameScreenProps> = ({ number, handleNumber, handleStartGame }) => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [results, setResults] = React.useState<Results | null>(null);
  const [nextNumber, setNextNumber] = React.useState<number>(calcNewNumber());

  const handleAssing = (condition: boolean, res: Results['result'], selection: Results['selection']) => {
    if (condition) {
      setResults({
        result: res,
        current: number,
        newNumber: nextNumber,
        selection: selection,
      });
    }
    setOpenModal(true);
    handleNumber(nextNumber);
    setNextNumber(calcNewNumber());
  };

  const playGame = (selection: 'lesser' | 'higher') => {
    switch (selection) {
      case 'lesser':
        if (nextNumber < number) {
          return handleAssing(nextNumber < number, 'win', 'less');
        }
        if (nextNumber > number) {
          return handleAssing(nextNumber > number, 'loose', 'less');
        }
        return handleAssing(nextNumber === number, 'tie', 'less');

      case 'higher':
        if (nextNumber < number) {
          return handleAssing(nextNumber < number, 'loose', 'greater');
        }
        if (nextNumber > number) {
          return handleAssing(nextNumber > number, 'win', 'greater');
        }
        return handleAssing(nextNumber === number, 'tie', 'greater');
    }
  };

  const message = (result: Results['result']) => {
    switch (result) {
      case 'win':
        return {
          title: 'You win!!',
          message: "You don't need to drink",
        };
      case 'loose':
        return {
          title: 'Sorry, you Loose!!',
          message: 'You must drink one shot!',
        };
      case 'tie':
        return {
          title: 'Oh my god!!',
          message: "It's a tie! You must drink two shots!",
        };
    }
  };

  return (
    <>
      <View>
        <Text style={style.text}>Current number:</Text>
        <Text style={style.text}>{number}</Text>
        <Text style={style.subtitleText}>Next one will be...</Text>
        <View style={style.actionContainer}>
          <Pressable style={style.actionButtons} onPress={() => playGame('lesser')}>
            <Text style={{ color: '#fff' }}>lesser</Text>
          </Pressable>
          <Pressable style={style.actionButtons} onPress={() => playGame('higher')}>
            <Text style={{ color: '#fff' }}>HIGHER</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Pressable
          style={[style.actionButtons, { backgroundColor: palette.orange }]}
          onPress={() => handleStartGame(false)}
        >
          <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>End Game</Text>
        </Pressable>
      </View>
      <Modal visible={openModal} transparent={true}>
        <View style={[modal.container, modal.shadowProp]}>
          <View style={modal.headerContainer}>
            <Text style={modal.headerText}>{results ? message(results.result).title : ''}</Text>
          </View>
          <View style={modal.body}>
            <Text style={modal.textHighlighted}>Current number: {results?.current}</Text>
            <Text style={modal.textHighlighted}>New number: {results?.newNumber}</Text>
            <Text style={{ paddingVertical: 5 }}>
              {`You said that ${results?.current} would be ${results?.selection} than ${results?.current}`}
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '700',
                paddingTop: 10,
                color: results?.result === 'win' ? 'green' : 'red',
              }}
            >
              {results ? message(results.result).message : ''}
            </Text>
          </View>
          <View style={modal.actions}>
            <Pressable style={style.actionButtons} onPress={() => setOpenModal(false)}>
              <Text style={{ color: palette.greyScale.light }}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default GameScreen;

const style = StyleSheet.create({
  input: {
    backgroundColor: palette.greyScale.light,
    width: '40%',
    fontSize: 32,
    marginBottom: 20,
    borderRadius: 5,
    padding: 8,
    ...shadowProp,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 16,
    fontWeight: '300',
    paddingBottom: 5,
    textAlign: 'center',
  },
  actionContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  actionButtons: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: '#000',
    margin: 10,
    backgroundColor: palette.blue,
    ...shadowProp,
  },
});

const modal = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
    marginTop: 300,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    backgroundColor: 'hsl(0,0%,96.5%)',
    minHeight: 220,
    boxShadow: '10 5 5 red',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headerContainer: {
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  body: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  textHighlighted: {
    fontSize: 22,
    padding: 5,
  },
  actions: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
