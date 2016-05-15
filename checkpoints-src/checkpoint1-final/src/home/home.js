/*
 * Import do React Native
 */
let React = require('react-native');

/*
 * Import dos componentes do React que vamos utilizar no nosso componente
 */
let {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;

/*
 *  Criação do componente Home.
 */
let Home = React.createClass({

  onPress() {
    console.log('Button clicked!!!');
  },
  render(){
    return (
      <View>
        <TouchableHighlight underlayColor='#333333' onPress={this.onPress}>
        <Text style={styles.Text}>RNGame Home </Text>
        </TouchableHighlight>
      </View>
    );
  }

});

/*
 * Definição de estilos
 */
const styles = StyleSheet.create({
  Text: {
    flex: 1,
    fontSize: 36,
    color: '#f26d35'
  }
});

/*
 * Exportar o componente para ser usado
 */
module.exports = Home;
