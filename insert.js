const { dbConnection } = require('./db');

async function main() {
    try {
        const db = await dbConnection();
        const collection = db.collection('users');
        
        const data = [
            { name: "john", age: 20 },
            { name: "zak", age: 22 },
            {} // This empty object may be intentional, but note that it won't have any fields
        ];

        const insertResult = await collection.insertMany(data);
        console.log("Insert Result:", insertResult);
    }
    catch (error) {
        console.log("Error performing the task:", error);
    }
}

main();
