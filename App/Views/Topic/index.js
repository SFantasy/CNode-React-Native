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
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var styles = require('./style');

var api = require("../../api");

var Topic = React.createClass({

  getInitialState: function () {
    return {
      loaded: false
    }
  },
  componentDidMount: function () {
    this.fetchData();
  },
  render: function () {
    return (
      <View>
        <Text>{this.state.topicTitle}</Text>
        <Text>{this.state.tag} | {this.state.date}</Text>
        <Text dangerous>{this.state.topicContent}</Text>
      </View>
    );
  },
  fetchData: function () {
    fetch(api.topic + '/' + this.props.topicId)
      .then((response) => response.json())
      .then((responseData) => {
        var data = responseData.data;
        this.setState({
          loaded: true,
          topicTitle: data.title,
          topicContent: data.content,
          date: data.create_at,
          tag: data.tab
        });
      }).done();
  }
});

module.exports = Topic;
