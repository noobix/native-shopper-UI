import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Shopper from './components/shopper'
import Details from './components/details'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Shopper /> */}
      <Details />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(155, 180, 207,0.4)'
  },
});
