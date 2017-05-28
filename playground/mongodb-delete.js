const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongo database server');
  }
  console.log('connected to Mongo DB server');

  //db.collection('Todos').deleteMany({text : 'Eat Dinner'}).then((result) => {
  //  console.log(result);
  //});

//  db.collection('Todos').deleteOne({text : 'Eat Dinner'}).then((result) => {
//    console.log(result);
//  });

  db.collection('Todos').findOneAndDelete({text : 'Eat lunch'}).then((result) => {
    console.log(result);
  });
  //db.close();
});
