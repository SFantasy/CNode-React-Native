'use strict';

var React = require('react-native');

var {
  Text,
  View,
  TouchableHighlight
  } = React;

var styles = require("./style");

var ReplyCell = React.createClass({
  render: function () {
    return (
      <View>
        <Text>{this.props.reply.content}</Text>
      </View>
    );
  }
});
