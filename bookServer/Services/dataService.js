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




module.exports={
   getBooks,
   getAction,
   getClassic,
   getFantacy,
   getHorror,
   getHistorical
}