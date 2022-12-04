import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';
import Navigation from './navigation';
import { store } from './store';
import { Provider } from 'react-redux';

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-variable.ttf'),
    OpenSansItalic: require('./assets/fonts/OpenSans.ttf'),
  });

  if (!loaded) {
    return <Text>Cargando...</Text>;
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
