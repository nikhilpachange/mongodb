const {dbConnection} = require('./db');

async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('users');

        const findResult = await collection.find().toArray();

    }
    catch(error){
        console.log("Error performing the task :",error)
    }
}
main();