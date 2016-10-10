import React from 'react';


import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';


let MessageArea = React.createClass({
    onPress(){

    },
    render(){
      return(
        <View style={styles.container}>
          <View style={styles.messageTitle}>
            <Text style={[styles.TextHeader, styles.TextWhite]}>Opentour 2016</Text>
          </View>
          <View style={styles.scrollViewContainer}>
            <ScrollView>
              <View style={styles.Centering}>
                <Text style={[styles.TextSmall, styles.TextGray]}>Estás pronto para o desafio?</Text>
                <Text style={[styles.TextSmall, styles.TextGray]}>Vai ao ficheiro rnGameApp.js</Text>
                <Text style={[styles.TextSmall, styles.TextGray]}>altera a variavel CHECKPOINT_ATUAL_NAME</Text>
                <Text style={[styles.TextSmall, styles.TextGray]}>para 'CheckPoint1Final' e faz refresh!</Text>
                <Text style={[styles.TextSmall, styles.TextGray]}>Have Fun!</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      )
    }
});

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  messageTitle: {
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#bbbbbb',
    borderBottomWidth: 1
  },
  scrollViewContainer: {
    flex:5,
    paddingTop: 20
  },
  TextHeader:{
    fontSize: 36,
  },
  TextSmall:{
    fontSize: 14
  },
  TextWhite:{
    color: '#ffffff'
  },
  TextGray:{
    color: '#eeeeee'
  },
  Centering: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});


module.exports = MessageArea;
