const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);
const dbName = 'mydatabase';

let db; // To store the database connection for reuse

const dbConnection = async () => {
    try {
        // If the connection is already established, return the existing one
        if (!db) {
            await client.connect();
            console.log('Connected to the server');
            db = client.db(dbName);
        }
        return db;
    } catch (error) {
        console.log('Failed to connect to the database:', error);
        throw error;
    }
};

// Close the MongoDB connection when the Node.js process is stopped
process.on('SIGINT', async () => {
    await client.close();
    console.log('MongoDB connection closed');
    process.exit(0);
});

module.exports = { dbConnection };
