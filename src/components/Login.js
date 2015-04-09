'use strict';

var React = require('react-native'),
qs = require('qs'),

styles = require('../styles'),
configs = require('../configs'),
CampaignSelector = require('./CampaignSelector'),

sessionUrl = configs.bouncer.url + 'session/',
userUrl = configs.bouncer.url + 'user/current/',

{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  NavigatorIOS,
  TouchableHighlight,
  WebView
} = React


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: configs.google.url + qs.stringify(configs.google.queryParams),
      status: 'No Page Loaded',
      backButtonEnabled: false,
      forwardButtonEnabled: false,
      loading: true
    }
  }

  render() {
    return (
      <WebView
        ref='webview'
        automaticallyAdjustContentInsets={false}
        style={styles.webView}
        url={this.state.url}
        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        startInLoadingState={true} />
    )
  }

  onNavigationStateChange(navState) {
    var that = this,
    access_token = qs.parse(navState.url.split('#')[1]).access_token
    if (!access_token) {
      return
    }
    fetch(sessionUrl, {
      method: 'post',
      body: JSON.stringify({access_token}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if(response.status >= 200 && response.status < 300) {
        this.props.navigator.push({
          component: CampaignSelector,
          title: 'Campaigns'
        })
      }
    })
    .catch(error => {
      console.log(error)
    })
  }
}

module.exports = Login
