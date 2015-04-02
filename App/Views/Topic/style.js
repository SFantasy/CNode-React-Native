/**
 *
 * style.js
 *
 * @description
 * @author shaochunhua <shaochunhua@tuniu.com>
 * @create 2015-03-31
 * @update 2015-04-02
 */

'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {

  },
  loadingText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000000',
    marginTop: 75
  },
  webView: {
    height: 500,
    backgroundColor: 'white',
  },
  title: {
    marginTop: 75,
    color: '#333',
    fontSize: 18,
    marginLeft: 20
  },
  tag: {
    marginTop: 5,
    marginBottom: 10,
    color: '#666',
    fontSize: 14,
    marginLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  }
});
