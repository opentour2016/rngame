/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var React = require('react-native');

let {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Navigator
} = React;

//Import do Home
let RnGameApp = require('./checkpoints-src/rnGameApp');

class RNGameFramework extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RnGameApp sceneTransition={Navigator.SceneConfigs.FadeAndroid}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('RNGameFramework', () => RNGameFramework);
