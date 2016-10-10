import React from 'react';


import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Nvigator
} from 'react-native';


let HomeHeader = React.createClass({

    render(){
      return(
        <View style={styles.headerContainer}>
          <TouchableHighlight onPress={this.props.onPress}>
            <Text style={styles.Text}>
              {this.props.navigatorTitle}
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
