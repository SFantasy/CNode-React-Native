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
  WebView,
  ListView,
  TouchableHighlight
} = React;

var styles = require('./style');
var ReplyCell = require('./Elements/ReplyCell');

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
    if (!this.state.loaded) {
      return (
        <View style={styles.container}>
          <Text>数据加载中...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.topicTitle}</Text>
        <Text style={styles.tag}>{this.state.tag} | {this.state.author.loginname} | {this.state.date}</Text>
        <WebView
        style={styles.webView}
        ref={'webview'}
        html={this.state.topicContent}
        automaticallyAdjustContentInsets={false}
        url={'https://github.com/SFantasy'} />
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
          author: data.author,
          tag: data.tab
        });
      }).done();
  }
});

module.exports = Topic;
