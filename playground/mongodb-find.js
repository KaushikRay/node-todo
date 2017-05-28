const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongo database server');
  }
  console.log('connected to Mongo DB server');
  db.collection('Todos').find({
    _id: new ObjectId("592adcdc78ae30086c8ca0a6")
  }).toArray().then((docs) => {
    console.log('Todos -->', JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todo arrays');
  });

  //db.close();
});
