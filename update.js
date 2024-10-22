const { dbConnection } = require('./db');

async function main() {
    try {
        const db = await dbConnection();
        const collection = db.collection('users');
        
        const insertResult = await collection.updateMany(
            { name: "john" }, 
            { $set: { age: 22 } }  
        );
        console.log(insertResult.modifiedCount); 
    }
    catch (error) {
        console.log("Error performing the task:", error);
    }
}

main();
