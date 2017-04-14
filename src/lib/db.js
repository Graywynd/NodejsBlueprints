var mongoose = require('mongoose');
var mongoUrl = process.env.MONGO_URL || 'mongodb://Graywynd:Fl0renceWelch@ds161400.mlab.com:61400/movies';

module.exports = function(app) {
  mongoose.connect(mongoUrl, {
    mongoose: {
      safe: true
    }
  }, function(err) {
    if (err) {
      return console.log('Mongoose - connection error:', err);
    }
  });

  // mongoose.set('debug', true);

  return mongoose;
};
