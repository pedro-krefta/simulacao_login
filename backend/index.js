const express = require('express')
const app = express()

const cors = require('cors')

const PORT = 3000  //´port
const hostname = 'localhost' //endereço IP

//-----------------Middleware----------

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//-------------------------------------
app.get('/', (req,res) =>{
    res.status(200).json({message: 'aplicação rodando'})
})

app.post('/login', (req,res)=>{
    const email_bd = 'pedro@gmail.com'
    const senha_bd = 123

    const valores = req.body

    console.log(valores)

    if(email_bd === valores.email){
        if(senha_bd === valores.senha){
            return res.status(200).json({message: 'login realizado com sucesso'})
        }else{
            return res.status(403).json({message: 'senha incorreta'})
        }
    }else{
        res.status(404).json({message: 'usuário não encontrado'})
    }


    res.status(200).json(valores)

})


// app.get('/', (req,res) =>{
//     res.send('hello world')
// })



//--------------------------------------
app.listen(PORT,hostname, ()=>{
    console.log(`http://${hostname}:${PORT}`)
})