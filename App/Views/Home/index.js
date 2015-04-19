'use strict';

// Module dependencies
var React = require('react-native');
var RefreshableListView = require('react-native-refreshable-listview');

var {
  Text,
  View,
  ListView
} = React;

var api = require('../../api');
var stylesheet = require('./style');

var TopicCell = require('./Elements/TopicCell');
var TopicView = require('../Topic');

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
            数据加载中...
          </Text>
        </View>
      );
    }

    return this.renderListView();
  },

  renderListView: function () {
    return (
      <RefreshableListView
        dataSource={this.state.dataSource}
        renderRow={this.renderTopicCell}
        style={stylesheet.topicListView}
        loadData={this.fetchData}
        renderDescription="数据加载中..." />
    )
  },

  renderTopicCell: function (topic) {
    return (
      <TopicCell
        onSelect={() => this.selectTopic(topic)}
        topic={topic} />
    );
  },

  selectTopic: function (topic) {
    this.props.navigator.push({
      title: topic.title,
      component: TopicView,
      passProps: {
        topicId: topic.id
      }
    });
  }
});

module.exports = HomeViewClass;
