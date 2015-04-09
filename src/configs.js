module.exports = {
  campaigns: {
    url: 'https://app.socialcode.com/api/advisor/v1/campaign/?',
    queryParams: {
      limit: 20,
      sort_by: 'spend_today',
      order: 'desc',
      offset: 0,
      order_by: '-spend_today',
      name__icontains: '',
      format: 'json'
    }
  },
  bouncer: {
    url: 'https://app.socialcode.com/api/bouncer/v2/auth/'
  },
  google: {
    url: 'https://accounts.google.com/o/oauth2/auth?',
    queryParams: {
      scope: 'profile email',
      state: 'googleAuthResponse',
      response_type: 'token',
      client_id: '80354957556-e6m2ro9en17a1hvdh2g0lto2bm6jrjvq.apps.googleusercontent.com',
      redirect_uri: 'https://app.socialcode.com/accounts/'
    }
  }
}
