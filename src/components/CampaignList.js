var React = require('react-native'),

dispatcher = require('../dispatcher'),
styles = require('../styles'),
CampaignItem = require('./CampaignItem'),

{
  Component,
  Text,
  ListView
} = React

class CampaignList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      datasource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    }
  }

  render() {
    return (
      <ListView
      dataSource = {this.state.datasource.cloneWithRows(this.props.campaigns)}
      renderHeader = {this.renderHeader.bind(this)}
      renderRow = {this.renderRow.bind(this)}/>
    )
  }

  renderHeader() {
    return (
      <Text style={styles.buttonText}>{this.props.type}</Text>
    )
  }

  renderRow(campaign) {
    return <CampaignItem campaign={campaign}/>
  }
}

module.exports = CampaignList
