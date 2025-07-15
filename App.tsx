import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function App() {
  
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Appbar.Content title='Pils' titleStyle={styles.appBar}/>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Hello World from Pils</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appBar:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  safeContainer:{
    flex: 1,
    backgroundColor: '#dabfa4ff',
    
  },
  container: {
    flex: 1,
    backgroundColor: '#dabfa4ff',
  },
  box: {
    padding: 20
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
