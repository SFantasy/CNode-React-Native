'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var HomeView = require('./App/Views/Home');

var CNode = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        tintColor='#FF6600'
        initialRoute={{
          title: 'CNode - Home',
          component: HomeView
        }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7C00'
  }
});

AppRegistry.registerComponent('CNode', () => CNode);

module.exports = CNode;
