const {MongoClient} = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    try {

        console.time("Connection time");//start the timer

        await client.connect();
        console.log("Connected to MongoDB");

        console.timeEnd("Connection time");//end the timer

        const database = client.db("testDB");
        const collection = database.collection("users");
   
        await collection.insertOne({name: "Syafiq Iman", age: 23});
        console.log("Document inserted");

        const result = await collection.findOne({name: "Syafiq Iman"});
        console.log("Query result: ", result);

    }catch (err){
        console.error("Error:", err);

    }finally {
        await client.close(); 
    }

}    

main();