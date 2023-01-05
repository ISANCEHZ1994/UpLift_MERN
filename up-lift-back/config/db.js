const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        await mongoose.connect( db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...we are on? I think we are..');
    } catch (err) {
        console.log(err);
        process.exit(1);
    };
};
module.exports = connectDB;