var React = require('react-native');

var {
  View,
  ProgressBarAndroid
} = React;

module.exports = React.createClass({

  render: function() {
    return (
        <View>
          <ProgressBarAndroid/>
        </View>
    )
  }
});
