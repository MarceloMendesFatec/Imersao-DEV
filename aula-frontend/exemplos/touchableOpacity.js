import React, { Component } from "react";
import { View, Button, SafeAreaView, Text, TouchableOpacity, TextInput , StyleSheet, Image, Alert} from "react-native";
class App extends Component {
   render() {
return (
  <View style={styles.container}>
  <TouchableOpacity
    onPress={() => alert('Hello, world!')}
    style={{ backgroundColor: 'blue' }}>
    <Text style={{ fontSize: 20, color: '#fff' }}>Um simples botão</Text>
  </TouchableOpacity>
</View>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
});
export default App;