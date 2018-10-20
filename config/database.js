if(process.env.NODE_ENV === 'production') {
  module.exports = { mongoURI: 'mongodb://default:default18@ds137483.mlab.com:37483/vidjot-prod'}
} else {
  module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev'}
}