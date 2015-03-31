/**
 *
 * index.js
 *
 * @description
 * @author shaochunhua <shaochunhua@tuniu.com>
 * @create 2015-03-31
 * @update 2015-03-31
 */

'use strict';

var React = require('react-native');

var {
  Text,
  View,
  TouchableHighlight
} = React;

var styles = require('./style');

var TopicCell = React.createClass({
  render: function() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View style={styles.container}>
          <Text style={styles.topicTitle}>{this.props.topic.title}</Text>
          <View style={styles.topicDetailRow}>
            <Text style={styles.topicTab}>{this.props.topic.tab}</Text>
            <Text>{this.props.topic.author.loginname} | {this.props.topic.reply_count}回复 | {this.props.topic.visit_count}阅读</Text>
          </View>
          <View/>
        </View>
      </TouchableHighlight>
    );
  }
});

module.exports = TopicCell;