var React = require('react-native');

var{
  StyleSheet,
  Navigator,
  View,
  Text
} = React;

var Home = require('./home/home');
var Dashboard = require('./dashboard/dashboard');


var ROUTES = {
  home: Home,
  dashboard: Dashboard,
};

module.exports = React.createClass({

  renderScene: function(route, navigator){
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },

  render : function(){
    return(
      <Navigator style={styles.container}
        initialRoute={{name: 'home'}}
        renderScene={this.renderScene}
        configureScene={(route) => { return this.props.sceneTransition }}
      />

    );
  }
});

var styles = StyleSheet.create({
  container:{
    backgroundColor: '#f3f3f3'
  },
  navBar:{
    alignItems: 'center'
  }
});
