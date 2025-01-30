    const {MongoClient}=require("mongodb");

const    MONGODB_URL="mongodb+srv://jet15fuze:S1w00KqUap88hHow@cluster0.bqm8i.mongodb.net/"

    // get a client to connect to db
    const client=new MongoClient(MONGODB_URL);

    // connect 
    const dbName="FirstDb";
    const collectionName="learning";

    async function connectToDb(){
        await client.connect();
        console.log("connection to mongodb is sucessfull!");
        const db=client.db(dbName);
        const collection=db.collection(collectionName);

        // insert operation
        const new_user_data={
            "name":"Ketaki",
            "age":20
        };

        const inserted_data=await collection.insertOne(new_user_data);
        console.log(`Inserted docs => ${inserted_data}`);
        // read operation 
        const data=await collection.find({}).toArray();
        console.log(data);

        return 'done';
    }

    connectToDb()
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.error("An error occurred:", error); 
    })
    .finally(() => {
        client.close(); 
        console.log("MongoDB client closed.");
    });