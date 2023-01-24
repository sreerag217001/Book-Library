const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/book',()=>{
    console.log('connected to MongoDB');
  
});

const Book = mongoose.model('Book',{
  id:Number,
  author:String,
  country:String,
  price:Number,
  image:String,
  language:String,
  title:String,
  year:Number
})
const Action = mongoose.model('Action',{
  id1:Number,
  author1:String,
  country:String,
  price1:Number,
  image1:String,
  language:String,
  title1:String,
  year:Number
})
const Classic = mongoose.model('Classic',{
  id2:Number,
  author2:String,
  country2:String,
  price22:Number,
  image2:String,
  language2:String,
  title2:String,
  year2:Number
})
const Fantacy = mongoose.model('Fanatacy',{
  id3:Number,
  author3:String,
  country3:String,
  price3:Number,
  image3:String,
  language3:String,
  title3:String,
  year3:Number
})
const Horror = mongoose.model('Horror',{
  id4:Number,
  author4:String,
  country4:String,
  price4:Number,
  image4:String,
  language4:String,
  title4:String,
  year4:Number
})
const Historical = mongoose.model('Historical',{
  id5:Number,
  author5:String,
  country5:String,
  price5:Number,
  image5:String,
  language5:String,
  title5:String,
  year5:Number
})
 const User=mongoose.model('User',{
  username:String,
  email:String,
  password:Number,
  place:String
 })

module.exports={
    Book,
    Action,
    Classic,
    Fantacy,
    Horror,
    Historical,
    User
}