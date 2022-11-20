import React from 'react';
import {
  Button,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TextInputEndEditingEventData,
  TextInputKeyPressEventData,
  TextInputTextInputEventData,
  View,
} from 'react-native';
import { palette, shadowProp } from '../../constants';
import { numericRegexOneToTwelve } from '../../utils/regex';

type IntroComponentProps = {
  className?: string;
  header?: React.ReactNode;
  selectedNumber: number | '';
  handleNumber: (number: number | '') => void;
  handleStartGame: (value: boolean) => void;
};

const IntroComponent: React.FC<IntroComponentProps> = ({ selectedNumber, handleNumber, handleStartGame }) => {
  const [alert, setAlert] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<number | null>(null);

  const handleValue = (text: string) => {
    if (numericRegexOneToTwelve.test(text)) {
      let value = parseInt(text) || '';

      if (parseInt(text) > 12 || parseInt(text) < 1) {
        setAlert(true);
        value = 12;
      } else if (alert) {
        setAlert(false);
      }

      handleNumber(value as number | '');
    }
  };

  return (
    <View>
      <Text style={style.text}>Choose a number</Text>
      <Text style={style.subtitleText}>From 1 to 12</Text>
      <View style={style.inputContainer}>
        {!selected ? (
          <TextInput
            style={style.input}
            value={`${selectedNumber}`}
            onChangeText={handleValue}
            keyboardType="number-pad"
          />
        ) : (
          <Text style={[style.input, { backgroundColor: 'unset' }]}>{selected}</Text>
        )}
        {alert ? (
          <Text style={{ color: 'red', fontSize: 12, textAlign: 'center' }}>
            You must enter numbers between 1 and 12
          </Text>
        ) : null}
      </View>
      <View style={style.actionContainer}>
        <Pressable
          style={[style.actionButtons, { backgroundColor: !selected ? 'grey' : 'red' }]}
          disabled={!selected}
          onPress={() => (selectedNumber ? setSelected(null) : null)}
        >
          <Text style={{ color: '#fff' }}>Clear</Text>
        </Pressable>
        <Pressable
          style={[style.actionButtons, { backgroundColor: selectedNumber ? palette.blue : 'grey' }]}
          disabled={!selectedNumber}
          onPress={() => (selectedNumber ? setSelected(selectedNumber) : null)}
        >
          <Text style={{ color: '#fff' }}>Save</Text>
        </Pressable>
      </View>
      {selected ? (
        <View>
          <Pressable
            style={[style.actionButtons, { backgroundColor: !selectedNumber ? 'grey' : palette.blue }]}
            disabled={!selectedNumber}
            onPress={() => (selectedNumber ? setSelected(selectedNumber) : null)}
          >
            <Text
              onPress={() => handleStartGame(true)}
              style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}
            >
              Start Game
            </Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

export default IntroComponent;

const style = StyleSheet.create({
  input: {
    backgroundColor: palette.greyScale.light,
    width: '40%',
    textAlign: 'center',
    minWidth: 150,
    fontSize: 32,
    borderRadius: 5,
    marginBottom: 10,
    padding: 8,
    ...shadowProp,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
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
    marginBottom: 20,
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
