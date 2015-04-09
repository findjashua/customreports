var React = require('react-native'),

dispatcher = require('../dispatcher'),
styles = require('../styles'),
CampaignList = require('./CampaignList'),
Report = require('./Report'),

{
  Component,
  Text,
  TextInput,
  ListView,
  View,
  NavigatorIOS,
  ActivityIndicatorIOS,
  TouchableHighlight
} = React


class CampaignSelector extends Component {
  constructor(props) {
    super(props)

    this.state = {
      campaignName: '',
      selected: [],
      unselected: []
    }

    this.listeners = {
      'campaigns:updated': this.campaignsUpdated.bind(this)
    }
  }

  componentDidMount() {
    dispatcher.on(this.listeners)
    dispatcher.emit('campaigns:search', '')
  }

  componentWillUnmount() {
    dispatcher.off(this.listeners)
  }

  render() {
    return (
      <View style={styles.container}>
        {this.getSearchBar()}
        <CampaignList type='selected' campaigns={this.state.selected}/>
        <View style={styles.blank}></View>
        <CampaignList type='unselected' campaigns={this.state.unselected}/>
      </View>
    )
  }

  getSearchBar() {
    return (
      <TextInput
        style={styles.searchInput}
        placeholder='Campaign Name'
        value={this.state.campaignName}
        onChange={this.campaignSearchChanged.bind(this)}/>
    )
  }

  getNextButton() {
    var numSelected = this.state.selected.length
    buttonStyle = numSelected > 0 ? styles.active : styles.inactive,
    onPress = numSelected > 0 ? this.navigateToReport : function() {}
    return (
      <View style={styles.rightCorner}>
        <TouchableHighlight style={buttonStyle} onPress={onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableHighlight>
      </View>
    )
  }

  campaignsUpdated(event) {
    var campaigns = event.data,
    selected = campaigns.filter(campaign => {
      return campaign.selected === true
    }),
    unselected = campaigns.filter(campaign => {
      return campaign.selected === false
    })
    this.setState({
      numSelected: selected.length,
      selected: selected,
      unselected: unselected
    })
  }

  campaignSearchChanged(event) {
    var campaignName = event.nativeEvent.text
    dispatcher.emit('campaigns:search', campaignName)
  }

  navigateToReport() {
    this.props.navigator.push({
      component: Report,
      title: 'Report'
    })
  }
}

module.exports = CampaignSelector
