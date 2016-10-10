'use strict';

import React from 'react';

const RngameActivityIndicator = require('../rngame-activity-indicator/rngame-activity-indicator');

const firebaseApi = require('../.././services/firebase-api');

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


module.exports = React.createClass({

  getInitialState(){
    return  {
      user: {
        id: '',
        name: '',
        photo: 'uri'
      }
    };
  },

  componentWillMount() {
    // Obter perfil utilizador
    console.log(this.props.userId);
    firebaseApi.getUserById(this.props.userId)
    .then((user) => {
      this.setState({
        user: {
          id: user.id,
          name: user.name,
          photo: user.photo
        }
      });
    })
    .catch((error) => {
      console.log("Some error occured, try again!" + error)
    })
  },

  hasEnoughData() {
    return this.state.user;
  },

  render() {
    if(this.hasEnoughData()){
      return (
        <View style={styles.container}>
            <View style={[styles.profilePhotoContainer, styles.centering]}>
              <Image style={styles.profileImage} source={{uri: this.state.user.photo}} />
            </View>
            <View style={[styles.playerNameContainer, styles.centering]}>
              <Text style={styles.text}> {this.state.user.name} </Text>
            </View>
            <View style={[styles.footerContainer, styles.centering]}>
              <Text style={styles.text}> Obrigado por participares no workshop RNGame! </Text>
            </View>
        </View>
      );

    } else {

      return (
        <View>
          <RngameActivityIndicator/>
        </View>
      );

    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profilePhotoContainer: {
    flex: 3,
    backgroundColor: '#DDD'
  },
  playerNameContainer: {
    flex: 2,
    backgroundColor: '#DDD',
    borderBottomColor: '#BBB',
    borderBottomWidth: 1
  },
  footerContainer:{
    flex:1
  },
  buttonsContainer: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  profileImage: {
    borderRadius: 48,
    borderWidth: 1,
    width:200,
    height:200,
    borderColor: '#BBB'
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
