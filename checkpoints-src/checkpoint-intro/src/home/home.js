/*
 * Import do React Native
 */
let React = require('react-native');

/*
 * Import dos componentes do React que vamos utilizar no nosso componente
 */
let {
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  StyleSheet,
} = React;

let HomeHeader = require('.././components/header/homeHeader');
let LogoContainer = require('.././components/logo/homeLogo');
let MessageArea = require('.././components/messageArea/messageArea');
let TryGameBar = require('.././components/tryGameBar/tryGameBar');

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

        <View style={styles.messageContainer}>
          <MessageArea />
        </View>

        <View style={styles.tryGameBarContainer}>
          <TryGameBar/>
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
  messageContainer:{
    flex:5,
    backgroundColor: '#FC9851',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tryGameBarContainer: {
    flex:1
  }
});

/*
 * Exportar o componente para ser usado
 */
module.exports = Home;
