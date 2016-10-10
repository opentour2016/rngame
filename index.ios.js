/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React from 'react';

import {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Navigator
} from 'react-native';

//Import do Home
let RnGameApp = require('./checkpoints-src/rnGameApp');

const RNGameFramework = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <RnGameApp sceneTransition={Navigator.SceneConfigs.PushFromRight}  />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('RNGameFramework', () => RNGameFramework);
