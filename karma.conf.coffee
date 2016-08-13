class Config
  @basePath: './'
  @frameworks: ['jasmine']
  @files: []
  @exclude: []
  @preprocessors: []
  @reporters: ['mocha']
  @port: 9876
  @colors: true
  @autoWatch: true
  @browsers: ['Chrome']
  @singleRun: false
  @concurrency: Infinity

if process.env.TRAVIS
  Config.browsers = ['Firefox']
  Config.singleRun = true

module.exports = (config) -> config.set Config
