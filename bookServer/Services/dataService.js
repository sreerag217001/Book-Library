const db=require('./db')

const getBooks =()=>{
    return db.Book.find().then(
      (result)=>{
         if(result){
            return{
                status:true,
                statusCode:200,
                book:result
            }
         }
         else{
            return{
                status:false,
                statusCode:404,
                message:'No books found'
            }
         }
      }
    )
}

const getAction =()=>{
   return db.Action.find().then(
     (result)=>{
        if(result){
           return{
               status:true,
               statusCode:200,
               book:result
           }
        }
        else{
           return{
               status:false,
               statusCode:404,
               message:'No books found'
           }
        }
     }
   )
}

const getClassic =()=>{
   return db.Classic.find().then(
     (result)=>{
        if(result){
           return{
               status:true,
               statusCode:200,
               book:result
           }
        }
        else{
           return{
               status:false,
               statusCode:404,
               message:'No books found'
           }
        }
     }
   )
}

const getFantacy =()=>{
   return db.Fantacy.find().then(
     (result)=>{
        if(result){
           return{
               status:true,
               statusCode:200,
               book:result
           }
        }
        else{
           return{
               status:false,
               statusCode:404,
               message:'No books found'
           }
        }
     }
   )
}

const getHorror =()=>{
   return db.Horror.find().then(
     (result)=>{
        if(result){
           return{
               status:true,
               statusCode:200,
               book:result
           }
        }
        else{
           return{
               status:false,
               statusCode:404,
               message:'No books found'
           }
        }
     }
   )
}

const getHistorical =()=>{
   return db.Historical.find().then(
     (result)=>{
        if(result){
           return{
               status:true,
               statusCode:200,
               book:result
           }
        }
        else{
           return{
               status:false,
               statusCode:404,
               message:'No books found'
           }
        }
     }
   )
}
userDetails={
   "sreeragp@gmail.com":{email:"sreeragp@gmail.com",password:1000,username:"Sreerag",place:"Kannur"},
   "avani@gmail.com":{email:"avani@gmail.com",password:1001,username:"Aavani",place:"Wayanad",place:"Kannur"},
   "jeritbenny@gmail.com":{email:"jeritbenny@gmail.com",password:1002,username:"Jerit",place:"Kozhikode"},
   "amalkumar@gmail.com":{email:"amalkumar@gmail.com",password:1003,username:"Amalkumar",place:"Malapuramr"},
 }

register=(uname,email,psw,place)=>{
   return db.User.findOne({email}).then(user=>{
      if(user){
         return{
            statusCode:400,
            status:false,
            message:'User already exist'
         }
      }
      else{
         const newuser=new db.User({
            email,
            username:uname,
           password:psw,
           place:place,

         })
         newuser.save()
        
         return{
            statusCode:200,
            status:true,
            message:'Registration Successfull'
         }
      }
   })
    
}



login=(email,psw)=>{

   return db.User.findOne({email,password:psw}).then(user=>{
    if(user){
      return {
        statusCode:200,
        status:true,
         message:"login successfull",
         currentEmail:email,
         currentUser:user.username,
    }
    }
    else{
      return {
        statusCode:401,
        status:false,
        message:"Incorrect password or Email"
    }
  }
    
})
}



module.exports={
   getBooks,
   getAction,
   getClassic,
   getFantacy,
   getHorror,
   getHistorical,
   register,
   login
}