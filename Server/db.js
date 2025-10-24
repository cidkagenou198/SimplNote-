const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://sunnysaicharanc1_db_user:kBCCsz8mBE2xCSrc@cluster0.puduzfn.mongodb.net/?appName=Cluster0";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToMongo;
