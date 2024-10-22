const { dbConnection } = require('./db');

async function main() {
    try {
        const db = await dbConnection();
        const collection = db.collection('users');
        const filter = { name: "john" };
        
        // Perform the delete operation
        const deletedResult = await collection.deleteOne(filter);
        
        // Log the result of the delete operation
        console.log("Deleted Count:", deletedResult.deletedCount);
    } catch (error) {
        console.log("Error performing the task:", error.message);
    }
}

main();
