var Config = {
  dist: './dist',
  src: './src',
  tmp: './tmp',
  github: {
    context: {
      BASE_URL: 'SW-Nanodegree-Meetup-Event-Planner/dist/'
    }
  },
  production: {
    context: {
      BASE_URL: ''
    }
  }
};

module.exports = Config;