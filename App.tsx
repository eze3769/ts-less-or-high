import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import NavigationTabs from './navigation/tabs';
import configureStore from './store';

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-variable.ttf'),
    OpenSansItalic: require('./assets/fonts/OpenSans.ttf'),
  });

  const store = configureStore();

  if (!loaded) {
    return <Text>Cargando...</Text>;
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <NavigationTabs />
      </Provider>
    </NavigationContainer>
  );
}
