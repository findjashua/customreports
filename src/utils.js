var qs = require('qs'),
configs = require('./configs')

module.exports = {
  campaigns: {
    search: function(campaignName) {
      var config = configs.campaigns,
      queryParams = JSON.parse(JSON.stringify(config.queryParams))
      queryParams.name__icontains = campaignName
      return fetch(config.url+qs.stringify(queryParams))
        .then(response => {
          return JSON.parse(response['_bodyText']).objects
        })
    }
  }
}



