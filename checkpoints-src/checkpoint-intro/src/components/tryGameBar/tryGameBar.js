let React = require('react-native');


let {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;


let TryGameBar = React.createClass({
    onPress(){

    },
    render(){
      return(
        <View style={styles.Container}>
            <Text style={styles.Text}>
              RNGame Workshop!
            </Text>
        </View>

      )
    }
});

const styles = StyleSheet.create({
  Text:{
    fontSize: 24,
    color: '#00a4a4'
  },
  Container:{
    flex:1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20
  },
});


module.exports = TryGameBar;
