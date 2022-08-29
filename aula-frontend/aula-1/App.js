/*

exemplo 1

import React, { Component } from "react";
import { View, Text } from "react-native";


class App extends Component {
  render() {
    return (
      <View style={{ height: 100, width: 100, backgroundColor: "blue" }} />
    );
  }
}
export default App; */

//exemplo 2

/*import React, { Component } from "react";
import { View, Text } from "react-native";
class App extends Component {
  render() {
    return (
      <View>
        <View style={{
          width: 300, height: 50, backgroundColor: 'powderblue'
        }} />
        <View style={{
          width: 100, height: 100, backgroundColor: 'skyblue'
        }} />
        <View style={{
          width: 150, height: 150, backgroundColor: 'steelblue'
        }} />
      </View>
    );
  }
}
export default App;
*/

//exemplo 3

/*import React, { Component } from "react";
import { View, Text } from "react-native";
class App extends Component {
  render() {
// flex: Permite que o componente se expanda e encolha dinamicamente com base no espaço disponível
    return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'rgb(255, 0, 255)' }}/>
      <View style={{ flex: 2, backgroundColor: 'aqua' }} />
      <View style={{ flex: 3, backgroundColor: '#7fffd4' }} />
      <View style={{ flex: 2, backgroundColor: '#rgba(255, 0, 255,1)' }} />
    </View>
    );
  }
}
// O React Native permite o usuo do Hue Saturation Lightness (HSL)
// hsl(360, 100%, 100%)
// hsla(360, 100%, 100%, 1.0)
// Aceita também o 'transparent', que é o atalho para rgba(0,0,0,0).
//
export default App;

*/


//exemplo 4

/*

import React, { Component } from "react";
import { View, Text } from "react-native";
class App extends Component {
  render() {
// flex: Permite que o componente se expanda e encolha dinamicamente com base no espaço disponível
return (
  <View style={{ height: '90%' }}>
    <View style={{
      height: '16%', width: '50%', backgroundColor: 'powderblue'
    }} />
    <View style={{
      width: '66%', height: '35%', backgroundColor: 'skyblue'
    }} />
    <View style={{
      width: '33%', height: '50%', backgroundColor: 'steelblue'
    }} />
  </View>
);
  }
}
// O React Native permite o usuo do Hue Saturation Lightness (HSL)
// hsl(360, 100%, 100%)
// hsla(360, 100%, 100%, 1.0)
// Aceita também o 'transparent', que é o atalho para rgba(0,0,0,0).
//
export default App; 

/*import React, { Component } from "react";
import { View, Text , StyleSheet} from "react-native";
class App extends Component {
  render() {
return (
  <View style={[styles.container]}>
   <View style={[styles.box, { backgroundColor: "powderblue" }]}/>
   <View style={[styles.box, { backgroundColor: "skyblue" }]} />
   <View style={[styles.box, { backgroundColor: "steelblue" }]} />
</View>
  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", // // Podemos usar column , que é o valor padrão, ou column-reverse, ou row-reverse.
    marginTop: 8,
    backgroundColor: "aliceblue",
    
  },
  box: {
    width: 50,
    height: 50,
  },
});
export default App;*/

//exemplo 5

import React, { Component } from "react";
import { View, Text , StyleSheet, Image} from "react-native";
class App extends Component {
  render() {
return (
  <View style={[styles.container]}>
        <Text> Primeira forma</Text>
      <Image
          style={styles.logotipo}
          source={require('./assets/e.png')} // Observe bem as diferenças na regra da construção.
        />
        <Text> Segunda forma</Text>
        <Image
          style={styles.logotipo}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
  </View>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    padding:20,
    flex: 1,
  },
  logotipo: {
    width: 50,
    height: 50,
  },
});
export default App;