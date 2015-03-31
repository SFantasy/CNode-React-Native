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

// Module dependencies
var React = require('react-native');

var {
  Text,
  View,
  ListView
} = React;

var api = require('../../api');
var stylesheet = require('./style');

var TopicCell = require('./Elements/TopicCell');

var HomeViewClass = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false
    };
  },
  componentDidMount: function () {
    this.fetchData();
  },
  fetchData: function () {
    fetch(api.topics)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data),
          loaded: true
        });
      }).done();
  },
  render: function () {
    if (!this.state.loaded) {
      return (
        <View style={stylesheet.container}>
          <Text style={stylesheet.loadingText}>
            Data fetching...
          </Text>
        </View>
      );
    }

    return this.renderListView();
  },
  renderListView: function () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderTopicCell}
        style={stylesheet.topicListView} />
    )
  },
  renderTopicCell: function (topic) {
    return (
      <TopicCell topic={topic} />
    );
  }
});

module.exports = HomeViewClass;
