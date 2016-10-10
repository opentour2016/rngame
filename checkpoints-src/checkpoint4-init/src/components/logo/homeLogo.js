import React from 'react';


import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native';


let HomeHeader = React.createClass({
    onPress(){

    },
    render(){
      return(

        <Image source={require('./backgroundHome.png')} style={styles.logoContainer}>
          <View style={styles.logoImageContainer}>
            <Image source={require('./logorngame.jpg')} style={styles.logoImage}/>
          </View>
        </Image>
      )
    }
});

const styles = StyleSheet.create({
  Text:{
    fontSize: 24,
    color: '#00a4a4'
  },
  logoContainer:{
    flex:1,
    width:null,
    height:null,
  },
  logoImageContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    margin:40,
    backgroundColor: '#ffffff',
    borderColor: '#cccccc',
    borderRadius: 10,
    borderWidth: 2,
  },
  logoImage:{
    flex:1,
    resizeMode:'contain',
    margin:10
  }
});


module.exports = HomeHeader;
