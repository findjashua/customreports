var dispatcher = require('./dispatcher'),
utils = require('./utils')

class Store {
    constructor() {
        this.initializeData()
        this.initializeListeners()
        dispatcher.on(this.listeners)
    }

    initializeData() {
        this.data = {
            campaigns: []
        }
    }

    initializeListeners() {
        this.listeners = {
            'campaigns:search': this.searchCampaigns.bind(this),
            'campaign:selectedToggled': this.toggleSelected.bind(this)
        }
    }

    searchCampaigns(event) {
        var campaignName = event.data,
        self = this
        utils.campaigns.search(campaignName)
        .then(campaigns => {
            self.data.campaigns = campaigns.map(campaign => {
                campaign.selected = false
                return campaign
            })
            self.emitCampaignsUpdated(self.data.campaigns)
        })
        .catch(error => {
            console.log(error)
        })
    }

    toggleSelected(event) {
        var campaignId = event.data
        this.data.campaigns = this.data.campaigns.map(campaign => {
            if (campaign.id === campaignId) {
                campaign.selected = !campaign.selected
            }
            return campaign
        })
        this.emitCampaignsUpdated(this.data.campaigns)
    }

    emitCampaignsUpdated(campaigns) {
        dispatcher.emit('campaigns:updated', campaigns)
    }
}

module.exports = new Store()
