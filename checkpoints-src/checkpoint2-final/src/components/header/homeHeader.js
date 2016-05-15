let React = require('react-native');


let {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;


let HomeHeader = React.createClass({
    onPress(){

    },
    render(){
      return(
        <View style={styles.headerContainer}>
          <TouchableHighlight onPress={this.onPress}>
            <Text style={styles.Text}>
              Perfil
            </Text>
          </TouchableHighlight>
        </View>

      )
    }
});

const styles = StyleSheet.create({
  Text:{
    fontSize: 24,
    color: '#00a4a4'
  },
  headerContainer:{
    flex:1,
    backgroundColor: '#333333',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20
  },
});


module.exports = HomeHeader;
