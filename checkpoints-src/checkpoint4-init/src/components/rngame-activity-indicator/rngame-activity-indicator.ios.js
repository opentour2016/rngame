var React = require('react-native');

var {
  View,
  ActivityIndicatorIOS
} = React;

module.exports = React.createClass({

  render: function() {
    return (
        <View>
          <ActivityIndicatorIOS/>
        </View>
    )
  }
});
