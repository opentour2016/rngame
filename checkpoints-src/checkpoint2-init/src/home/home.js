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
  StyleSheet,
  Dimensions
} = React;

let HomeHeader = require('.././components/header/homeHeader');
let LogoContainer = require('.././components/logo/homeLogo');

/*
 *  Criação do componente Home.
 */
let Home = React.createClass({

  /*
   * TODO 0 - Associar estilos aos elementos (View)
   * TODO #3 -Substituir views por componentes respetivos
   */
  render(){
    return (
      <View style={styles.todo1}>

        <View style={styles.todo2}>
          <Text style={[styles.Text, styles.TextGray]}>Header</Text>
        </View>

        <View style={styles.todo3}>
          <Text style={[styles.Text, styles.TextBlack]}>logo</Text>
        </View>

        <View style={styles.todo4}>
          <Text style={[styles.Text, styles.TextGray]}>Games</Text>
        </View>

      </View>
    );
  }

});

/*
 * Definição de estilos
 */
const styles = StyleSheet.create({
  container:{
    //TODO 1
  },
  headerContainer:{
    //TODO 2
    backgroundColor: '#333333',
  },
  logoContainer:{
    //TODO 3
  },
  gamesContainer:{
    //TODO 4
    backgroundColor: '#f26d35',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Text:{
    fontSize: 36,
  },
  TextGray:{
    color: '#cccccc'
  },
  TextBlack:{
    color: '#000000'
  }
});

/*
 * Exportar o componente para ser usado
 */
module.exports = Home;
