const mongoose = require('mongoose')

const  ItemSchema = new mongoose.Schema({


    name :{
        type:String ,
    },
    shape:{
        type:String,
    },
    color:{
       type: String 
    }


})

module.exports = mongoose.model('Item',ItemSchema)