import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor='transparent' translucent />
    <View style={styles.container}>
      <Text style={styles.peachTitle}>Hello Peach!</Text>
    </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  peachTitle: {
    color: '#d46e48',
    fontSize: 20,
    fontWeight: '900'
  }
});
