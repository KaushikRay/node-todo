const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongo database server');
  }
  console.log('connected to Mongo DB server');
  // db.collection('Todos').insertOne({
  //   text : 'Something to do',
  //   completed : false
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo');
  //   }
  //
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'kaushik',
  //   age: 24,
  //   location: 'berlin'
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('error added data to users');
  //   }
  //
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  db.close();
});
