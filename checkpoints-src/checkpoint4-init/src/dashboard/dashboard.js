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
  StyleSheet
} = React;

let HomeHeader = require('.././components/header/homeHeader');
let DashboardUserInfo = require('../components/user-info/user-info');
/*
 *  Criação do componente Home.
 */
let Dashboard = React.createClass({
  homePressEvent(){
      this.props.navigator.pop();
  },
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer} >
          <HomeHeader navigator={this.props.navigator} navigatorTitle='Voltar' onPress={this.homePressEvent}/>
        </View>

        <View style={styles.userInfoContainer}>
          <DashboardUserInfo userId='1' />
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
    flex: 1
  },
  userInfoContainer:{
    flex:6
  },
  text:{
    fontSize: 24,
    color: '#f26d35'
  }
});

/*
 * Exportar o componente para ser usado
 */
module.exports = Dashboard;
