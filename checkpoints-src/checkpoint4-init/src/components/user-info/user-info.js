'use strict';

const React = require('react-native');

const RngameActivityIndicator = require('../rngame-activity-indicator/rngame-activity-indicator');

const firebaseApi = require('../.././services/firebase-api');

const {
  StyleSheet,
  Text,
  View,
  Image
} = React;


module.exports = React.createClass({

  getInitialState(){
    return  {
      user: {
        id: -1,
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
      //TODO #1 Fazer Set ao objeto utilizador
    })
    .catch((error) => {
      console.log("Some error occured, try again!" + error)
    })
  },

  render() {
    if(this.hasEnoughData()){
      //TODO #2 Na view correspondente ao nome do utilizador fazer get do atributo name do objeto user
      return (
        <View style={styles.container}>
            <View style={[styles.profilePhotoContainer, styles.centering]}>
              <Image style={styles.profileImage} source={{uri: this.state.user.photo}} />
            </View>
            <View style={[styles.playerNameContainer, styles.centering]}>
              <Text style={styles.text}> Nome do Utilizador </Text>
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
  },
  hasEnoughData() {
    return this.state.user.id != -1;
  },

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
