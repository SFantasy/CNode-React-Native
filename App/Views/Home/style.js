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
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FFF'
  },
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 10,
    marginRight: 10,
    color: '#999',
  },
  topicListView: {
    backgroundColor: '#F0F0F0',
    marginTop: 10
  }
});
