const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const config = require('config');
const db = config.get('mongoURI');
// const err = new MongooseError(message);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
