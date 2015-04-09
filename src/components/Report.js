'use strict';

var React = require('react-native'),
qs = require('qs'),

styles = require('../styles'),

{
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  TextInput,
  ListView,
  View,
  NavigatorIOS,
  ActivityIndicatorIOS
} = React


class Report extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      metricsArray: [
        {
          name: 'kpi_lifetime',
          label: 'KPI'
        },
        {
          name: 'pacing',
          label: 'Pacing'
        },
        {
          name: 'spend_lifetime',
          label: 'Spend'
        }
      ]
    }
  }

  componentWillMount() {
    this.fetchCampaigns()
  }

  render() {
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderHeader={this.renderHeader.bind(this)}
        renderRow = {this.renderRow.bind(this)}/>
    )
  }

  renderHeader() {
    return (
      <View style={styles.row}>
        <Text style={styles.campaignHeader}>Campaign Name</Text>
        <View style={styles.metricsContainer}>
          {this.state.metricsArray.map(metric => {
            return <Text style={styles.margin} key={metric.label}>{metric.label}</Text>
          })}
        </View>
      </View>
    )
  }

  renderRow(campaign) {
    var metrics = this.state.metricsArray.map(metric => {
      return <Text key={metric.name}>{campaign[metric.name].toFixed(2)}</Text>
    })
    return (
      <View style={styles.row}>
        <Text style={styles.campaign} key={campaign.id}>{campaign.name}</Text>
        <View style={styles.metricsContainer}>{metrics}</View>
      </View>
    )
  }

}

module.exports = Report
