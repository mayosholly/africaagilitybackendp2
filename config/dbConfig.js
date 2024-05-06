const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        const connectionOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        await mongoose.connect(process.env.MONGODB_URI, connectionOptions);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(`Database connection error: ${error}`);
    }
};

module.exports = connectToDatabase;
