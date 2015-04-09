'use strict';

var React = require('react-native'),

styles = require('./src/styles'),
store = require('./src/store'),
Login = require('./src/components/Login'),

{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  NavigatorIOS,
  ActivityIndicatorIOS
} = React


class CustomReports extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: Login,
          title: 'Login'
        }}/>
    )
  }
}

AppRegistry.registerComponent('CustomReports', () => CustomReports);
