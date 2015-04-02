/**
 *
 * CommentCell
 *
 * @description
 * @author shaochunhua
 * @create 2015-04-02
 * @update 2015-04-02
 */

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
