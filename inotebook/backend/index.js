
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sohammanjrekar:soham12345@cluster0.wzrzbv3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
