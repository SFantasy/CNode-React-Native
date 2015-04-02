/**
 *
 * style.js
 *
 * @description
 * @author shaochunhua <shaochunhua@tuniu.com>
 * @create 2015-03-31
 * @update 2015-03-31
 */

'use strict';

var React = require('react-native');

var {
  StyleSheet
} = React;

module.exports = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 10
  },
  topicTitle: {
    color: '#666666',
    fontSize: 16
  },
  topicDetailRow: {
    flexDirection: 'row',
    marginTop: 5
  },
  topicTab: {
    color: '#80BD01',
    marginRight: 10
  },
  topicInfo: {
    color: '#999999',
    fontSize: 12
  }
});
