import { Home } from './src/screens/Home';
import {
  useFonts,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  return <Home />;
}
