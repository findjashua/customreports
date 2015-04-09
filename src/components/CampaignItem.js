var React = require('react-native'),

dispatcher = require('../dispatcher'),
styles = require('../styles'),

{
  Component,
  Text,
  View,
  TouchableHighlight
} = React


class CampaignItem extends Component {
  render() {
    var campaign = this.props.campaign,
    buttonStyle = campaign.selected ? styles.selected : styles.unselected
    return (
      <View style={styles.itemContainer}>
        <TouchableHighlight style={buttonStyle} onPress={this.buttonPressed.bind(this)}>
          <Text style={styles.buttonText} key={campaign.id}>{campaign.name}</Text>
        </TouchableHighlight>
      </View>
    )
  }

  buttonPressed() {
    var campaignId = this.props.campaign.id
    dispatcher.emit('campaign:selectedToggled', campaignId)
  }
}

module.exports = CampaignItem
