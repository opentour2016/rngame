/*
 * Import do React Native
 */
import React from 'react';

/*
 * Import dos componentes do React que vamos utilizar no nosso componente
 */
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions
} from 'react-native';

let HomeHeader = require('.././components/header/homeHeader');
let LogoContainer = require('.././components/logo/homeLogo');

/*
 *  Criação do componente Home.
 */
let Home = React.createClass({

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
          <Text style={[styles.Text, styles.TextWhite]}>Games</Text>
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
    flex:4
  },
  gamesContainer:{
    flex:5,
    backgroundColor: '#f26d35',
    alignItems: 'center',
    justifyContent: 'center'
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
