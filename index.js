const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);
const dbName = 'mydatabase';

async function main() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to server');

        // Get the database and collection
        const db = client.db(dbName);
        const collection = db.collection('users');

        // Query the collection and convert the result to an array
        const findResult = await collection.find().toArray();
        console.log(findResult);
    } catch (err) {
        console.error(err);
    } finally {
        // Ensure that the client closes the connection
        await client.close();
    }
}

main();
