'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} = React;


var GameCard = React.createClass({
  render: function() {
    return (
      <View style={styles.container}  elevation={5}>
        <View style={[styles.topContainer]}>
          <Image source={{uri: this.props.image}} style={styles.backgroundImageContainer}>
            <Text style={styles.statisticNameText}>{this.props.text}</Text>
          </Image>
        </View>
        <View style={[styles.bottomContainer, styles.centering]}>
        <TouchableHighlight onPress={this.onGamePress}>
          <Text> Play Game !</Text>
        </TouchableHighlight>
        </View>
      </View>
    );
  },
  onGamePress(){
     //this.props.navigator.push({name: this.props.file});
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    opacity: 50,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    borderTopColor: '#d3d3d3',
    borderTopWidth: 1,
    backgroundColor: '#FFF',
    shadowColor: '#444',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {width:1 , height: 1},
    borderRadius: 5
    //borderTopColor: '#d3d3d3',
    //borderTopWidth: 2
  },
  backgroundImageContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: null,
    height: null
  },
  topContainer: {
    flex: 3,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#EEE',
    borderRadius: 5,
    shadowColor: 'rgba(0.1,0.1,0.1, 0.2)',
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {width:0 , height: -30},
  },
  statisticNameText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingBottom: 5
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  textStatistic: {
    color: '#333',
    fontSize: 24,
    fontFamily: 'Verdana',
    fontWeight:'bold'
  },
  statisticBoxTitle: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statisticBoxGameName: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statisticBoxImage: {
    flex:4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});


module.exports = GameCard;
