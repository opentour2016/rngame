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
let GamesContainer = require('.././components/game-viewer/game-viewer');

/*
 *  Criação do componente Home.
 */
let Home = React.createClass({
  // TODO #1 - Incluir GamesContainer
  render(){
    return (
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <HomeHeader/>
        </View>

        <View style={styles.logoContainer}>
          <LogoContainer/>
        </View>

        <View style={styles.gamesContainer}>
          <GamesContainer/>
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
    flex: 1
  },
  headerContainer:{
    flex:1,
    backgroundColor: '#333333',
  },
  logoContainer:{
    flex:5
  },
  gamesContainer:{
    flex:5,
    backgroundColor: '#f26d35',
  },
  Text:{
    fontSize: 36,
  },
  TextWhite:{
    color: '#ffffff'
  },
  TextBlack:{
    color: '#000000'
  }
});

/*
 * Exportar o componente para ser usado
 */
module.exports = Home;
