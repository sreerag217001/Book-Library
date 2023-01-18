const express=require('express')
const cors=require('cors')
const dataService=require('./Services/dataService')

const app=express()
app.use(express.json())

app.listen(3000,()=>{
    console.log('listening on port 3000');
})

app.use(cors({
    origin:'http://localhost:4200'
}))

app.get('/all-books',(req,res)=>{
    dataService.getBooks()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.get('/action',(req,res)=>{
    dataService.getAction()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.get('/classic',(req,res)=>{
    dataService.getClassic()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.get('/fantacy',(req,res)=>{
    dataService.getFantacy()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.get('/horror',(req,res)=>{
    dataService.getHorror()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })

})
app.get('/historical',(req,res)=>{
    dataService.getHistorical()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })

})




