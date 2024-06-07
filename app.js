const express = require('express')
const connectDB = require('./db/connect.js')
const app = express()
const recRouter =require('./router/recRouter')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Shape and Color Recommendation System');
});

app.use('/api/v1',recRouter)

const dbURI = '<your mongo uri>'
const port = process.env.PORT || 3000;

const start = async ()=>{
    try {
        await connectDB(dbURI)
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
          );
        
    } catch (error) {
        console.log(error);
    }
}

start()