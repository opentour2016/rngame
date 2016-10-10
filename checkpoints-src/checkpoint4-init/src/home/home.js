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
let GamesContainer = require('.././components/game-viewer/game-viewer');

/*
 *  CriaÃ§Ã£o do componente Home.
 */
let Home = React.createClass({

  dashboardPressEvent(){
      this.props.navigator.push({name: 'dashboard'});
  },
  render(){
    return (
      <View style={styles.container}>

        <View style={styles.headerContainer} >
          <HomeHeader navigator={this.props.navigator} navigatorTitle='Ver Perfil' onPress={this.dashboardPressEvent}/>
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
 * DefiniÃ§Ã£o de estilos
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
