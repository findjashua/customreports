'use strict'

var React = require('react-native'),

{StyleSheet} = React

module.exports = StyleSheet.create({
  container: {
    flex: 1
  },
  shiftedContainer: {
    marginTop: 100
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    marginTop: 10,
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  selected: {
    backgroundColor: 'rgba(0, 255, 0, 1)',
    borderColor: 'rgba(0, 255, 0, 1)',
  },
  unselected: {
    backgroundColor: 'rgba(255, 0, 0, 1)',
    borderColor: 'rgba(255, 0, 0, 1)',
  },
  blank: {
    height: 20
  },
  buttonText: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 1)',
    padding: 5
  },
  text: {
    color: 'rgba(0, 0, 0, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    margin: 80
  },
  webView: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 350,
  },
  rightCorner: {
    height: 20,
    width: 40
  },
  active: {
    backgroundColor: 'rgba(0, 0, 255, 1)'
  },
  inactive: {
    backgroundColor: 'rgba(192, 192, 192, 1)'
  },
  searchInput: {
    height: 30,
    borderWidth: 1,
    borderColor: 'rgba(192, 192, 192, 1)',
    color: 'rgba(0, 0, 0, 1)'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'rgba(192, 192, 192, 1)',
    borderWidth: .25
  },
  campaignHeader: {
    flex: 4,
    margin: 10
  },
  campaign: {
    flex: 4,
    margin: 10,
    color: 'rgba(0, 0, 255, 1)'
  },
  metricsContainer: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10
  },
  metric: {
    margin: 15,
    alignSelf: 'center',
    flexWrap: 'wrap'
  }
})
