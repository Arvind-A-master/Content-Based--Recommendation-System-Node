const mongoose = require('mongoose');
const Item = require('./model/Items');

const items = [
    { name: 'Item 1', shape: 'circle', color: 'red' },
    { name: 'Item 2', shape: 'square', color: 'blue' },
    { name: 'Item 3', shape: 'triangle', color: 'green' },
    { name: 'Item 4', shape: 'circle', color: 'blue' },
    { name: 'Item 5', shape: 'square', color: 'red' },
];

const url = '<your mongo uri>'

mongoose.connect(url,{
    useNewUrlParser: true,
   useCreateIndex: true,
   useFindAndModify: false,
   useUnifiedTopology: true,
   })

   const db = mongoose.connection;
   db.on('error', console.error.bind(console, 'connection error:'));
   db.once('open', async () => {
       console.log('Connected to MongoDB');
   
       try {
           // Clear existing data
           await Item.deleteMany({});
           console.log('Existing data cleared');
   
           // Insert sample data
           await Item.insertMany(items);
           console.log('Sample data added');
   
           // Close the connection
           mongoose.connection.close();
       } catch (err) {
           console.error('Error inserting sample data:', err);
       }
   });