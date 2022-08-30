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

/*import React, { Component } from "react";
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
export default App;*/

//exemplo 9 caixa de texto

/*import React, { Component } from "react";
import { View, SafeAreaView, Text, TextInput , StyleSheet, Image} from "react-native";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {texto: ''};
    this.state= {numero: 0};
  }
  render() {
return (
    <SafeAreaView style={styles.container}>
      <Text align='center'>Exemplos de caixas de texto</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu texto aqui"
        onChangeText={(texto) => this.setState({texto})}
      />
      <TextInput
        style={styles.input}
        onChangeText={(numero) => this.setState({numero})}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Text>Texto Digitado: {this.state.texto}</Text>
      <Text>Número Digitado: {this.state.numero}</Text>
    </SafeAreaView>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    alignItems: "center",
  },
  input: {
    height: 40,
    width:200,
    margin: 20,
    borderWidth: 2,
    borderRadius:3,
    textAlign: "center",
  },
});
export default App; 


*/ //exemplo 10 multilinhas


/*import React, { Component } from "react";
import { View, SafeAreaView, Text, TextInput , StyleSheet, Image} from "react-native";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {texto: ''};
    this.state= {numero: 0};
  }
  render() {
return (
    <SafeAreaView style={styles.container}>
      <Text>Exemplos de caixas de texto</Text>
      <TextInput
      multiline
      numberOfLines={4}
        style={styles.input}
        placeholder="Digite seu texto aqui"
        onChangeText={(texto) => this.setState({texto})}
      />
      <TextInput
        style={styles.input}
        onChangeText={(numero) => this.setState({numero})}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Text>Texto Digitado: {this.state.texto}</Text>
      <Text>Número Digitado: {this.state.numero}</Text>
    </SafeAreaView>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
  },
  input: {
    height: 40,
    width:200,
    margin: 12,
    borderWidth: 1,
  },
});
export default App; 

*/ //Exemplo 12 Texto com máscara Para funcionar precisa instalar o mask-text


/*import React, { Component } from "react";
import { View, SafeAreaView, Text, TextInput , StyleSheet, Image} from "react-native";
import { MaskedTextInput} from "react-native-mask-text";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {cep: ''};
  }
  render() {
return (
    <SafeAreaView style={styles.container}>
      <Text>Exemplos de caixas de texto</Text>
      <MaskedTextInput
        mask="99999-999"
        style={styles.input}
        onChangeText={(cep) => this.setState({cep})}
      />
      <Text>Texto Digitado: {this.state.cep}</Text>
    </SafeAreaView>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
  },
  input: {
    height: 40,
    width:200,
    margin: 12,
    borderWidth: 1,
  },
});
export default App; 

*/ //exemplo 13 botao

/*import React, { Component } from "react";
import { View, Button, SafeAreaView, Text, TextInput , StyleSheet, Image, Alert} from "react-native";
class App extends Component {
   render() {
return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Clique-Me"
        onPress={() => Alert.alert('Olá Mundo!')}
      />
    </SafeAreaView>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    width:'80%',
    alignItems:"center",
    marginLeft:30,
  },
});
export default App; 

*/ //exemplo 11 scroll view

/*import React, { Component } from "react";
import { View, SafeAreaView, Text, TextInput , StyleSheet, Image, ScrollView, StatusBar } from "react-native";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {texto: ''};
    this.state= {numero: 0};
  }
  render() {
return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 32,
  },
});
export default App; 

*/ // exemplo 14 touchableOpacity

/*import React, { Component } from "react";
import { View, Button, SafeAreaView, Text, TouchableOpacity, TextInput , StyleSheet, Image, Alert} from "react-native";
class App extends Component {
   render() {
return (
  <View style={styles.container}>
  <TouchableOpacity
    onPress={() => alert('Hello, world!')}
    style={{ backgroundColor: 'blue' , borderRadius: 5}}>
    <Text style={{ fontSize: 35, color: '#fff' }}>Um simples botão</Text>
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

*/

/*import React, { Component } from "react";
import { View, Button, SafeAreaView, Text, TouchableOpacity, TextInput , StyleSheet, Image, Alert} from "react-native";
class App extends Component {
   render() {
return (
  <View style={styles.container}>
  <TouchableOpacity
    onPress={() => alert('Hello, world!')}
    style={styles.TouchableOpacityStyle}>
    <Text style={{ fontSize: 20, color: '#fff', alignSelf:'center' }}>Um simples botão</Text>
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
  TouchableOpacityStyle:
  {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'blue',
    marginBottom: 20,
    width: '70%',
    height: 50,
    marginHorizontal: 7,
    justifyContent: 'center',
    borderRadius: 60,
    borderColor: '#008B8B',
    borderWidth: 2,
  },
});
export default App;


*/  // exemplo 17 font awesome

/*import React, { Component } from "react";
import { View, Pressable ,Button, SafeAreaView, Text, TouchableOpacity, TextInput , StyleSheet, Image, Alert} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
// https://fontawesome.com/icons
class App extends Component {
   render() {
return (
  <View style={styles.container}>
  <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={() => alert('Hello, world!')}>
    Login com Facebook
  </FontAwesome.Button>
  <Text> </Text>
  <FontAwesome.Button name="apple" backgroundColor="black" onPress={() => alert('Hello, world!')}>
    Login com Apple
  </FontAwesome.Button>
  <Text> </Text>
  <FontAwesome.Button name="whatsapp" backgroundColor="green" onPress={() => alert('Hello, world!')}>
    Enviar whatsapp
  </FontAwesome.Button>
  <Text> <FontAwesomeIcon icon="fa-thin fa-atom-simple" /> </Text>
  <FontAwesome.Button name="youtube" backgroundColor="red" onPress={() => alert('Hello, world!')}>
    Enviar whatsapp
  </FontAwesome.Button>
</View>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 40,
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 26,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'gray',
  },
});
export default App;

*/ //exemplo 18 TouchableHighlight

/*import React, { Component } from "react";
import { View, Pressable ,TouchableHighlight, Text, TextInput , StyleSheet, Image, Alert} from "react-native";
class App extends Component {
   render() {
return (
  <View style={styles.container}>
  <TouchableHighlight onPress={() => alert('Hello, world!')}>
          <View style={styles.button}>
            <Text>Clique</Text>
          </View>
        </TouchableHighlight>
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
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    },
    countText: {
      color: "#FF00FF"
    }
  });
export default App;

*/


import React, { Component } from "react";
import { View, Button, Switch, SafeAreaView, Text, TextInput , StyleSheet, Image, Alert} from "react-native";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isEnabled: false};
    this.state= {toggleSwitch:false};
  }
   render() {
return (
    <SafeAreaView style={styles.container}>
      <Switch
        style={{alignSelf:"center"}}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(toggleSwitch)=>this.setState({toggleSwitch})}
        value={this.state.isEnabled=this.state.toggleSwitch}
      />
      <Text style={{alignSelf:"center"}}>{this.state.isEnabled? "on": "off"}</Text>
      <Image
          style={styles.logotipo}
          source={this.state.isEnabled?
            {uri: 'https://reactnative.dev/img/tiny_logo.png'}:
            {uri: 'https://cdn11.bigcommerce.com/s-80e63/images/stencil/960w/products/169/596/RE001__11099.1386259430.png'}}
        />
    </SafeAreaView>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
  },
  logotipo: {
    width: 50,
    height: 50,
  },
});
export default App; 