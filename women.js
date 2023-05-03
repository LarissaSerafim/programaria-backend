const express = require("express") //inicializing express
const router = express.Router() //setting the first router
const cors = require("cors") // setting cors for enableing this API on the front-end

const connectDataBase = require('./dataBase') // connecting data base
connectDataBase() // initializing the function

const Women = require('./womenModel')
const app = express() // inicializing the app
app.use(express.json())
app.use(cors())

const porta = 3333 // creating the door

//POST
async function addWomen(request, response) {
    const addWomen = new Women({
        name: request.body.name,
        image: request.body.image,
        bio: request.body.bio
    })

    try {
        const addedWomen = await addWomen.save()
        response.status(201).json(addedWomen)
    }catch (error) {
        console.log(error)
        
    }

}

//GET
async function showWomen(request, response){
    try {
        const womenFromDataBase = await Women.find()

        response.json(womenFromDataBase)
    }catch (error) {
        console.log(error)
        
    }
}

//PATCH
async function editWoman(request, response){
    try {
        const womenFound = await Women.findById(request.params.id)
    
    if (request.body.name) {
        womenFound.name = request.body.name
    }

    if (request.body.image) {
        womenFound.image = request.body.image
    }

    if (request.body.bio) {
        womenFound.bio = request.body.bio
    }

    const updatedWomen = await womenFound.save()
    response.json(updatedWomen)

    } catch(error) {
        console.log(error)

}
}

//DELETE
async function deleteWoman(request, response) {
    try {
        await Women.findByIdAndDelete(request.params.id)
        response.json({mensagem: 'Women deleted successfully'})


    } catch(error) {
        console.log(error)
    }

}

//DOOR
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}


app.use(router.get ('/women', showWomen)) // setting router GET/women
app.use(router.post ('/women', addWomen)) // setting router POST/women
app.use(router.patch('/women/:id', editWoman))// setting router PATCH/women
app.use(router.delete('/women/:id', deleteWoman)) // setting router DELETE/women
app.listen(porta, mostraPorta) // listening the door


