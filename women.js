const express = require("express") //inicializing express
const router = express.Router() //setting the first router
const { v4: uuidv4 } = require('uuid') //generate ids

const app = express() // inicializing the app
app.use(express.json())
const porta = 3333 // creating the door

//creating women's list
const women = [

{
    
        id: '1',
        name: 'Alek Wek',
        image: 'https://1.bp.blogspot.com/_DnDXzj5Ohaw/TDZ6-4LxTdI/AAAAAAAAH-s/DwpaPzF2ZbM/s1600/alek3.jpg',
        bio: 'Alek Wek (born 16 April 1977) is a South Sudanese-British model and designer who began her fashion career at the age of 18 in 1995. She has been hailed for her influence on the perception of beauty in the fashion industry. She is from the Dinka ethnic group in South Sudan,but fled to Britain in 1991 to escape the civil war in Sudan. Reference: https://en.wikipedia.org/wiki/Alek_Wek'
    },
    {
        id: '2',
        name: 'Ilhan Omar',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Ilhan_Omar%2C_official_portrait%2C_116th_Congress_%28cropped%29_A.jpg',
        bio: 'Ilhan Abdullahi Omar (Arabic: إلهان عبد الله عمر born October 4, 1981) is a Somali-American politician. She is the member of the U.S House of Representatives from Minnesotas 5th district since January 3, 2019. Omar is also member of "The Squad". In 2016, she was elected a Democratic–Farmer–Labor Party member of the Minnesota House of Representatives. She is the first Somali-American person elected to office in the United States.She is the Director of Policy and Initiatives of the Women Organizing Women Network. Omar was the Democratic Farmer Labor nominee for U.S. Representative in Minnesotas 5th congressional district, having won the primary on August 14, 2018.[7] Omar won the election in November 2018, becoming first Muslim-American woman to be elected to congress, alongside Rashida Tlaib.Omar is a member of "The Squad" along with Tlaib, Alexandria Ocasio-Cortez and Ayanna Pressley. In 2020, Omar endorsed Bernie Sanders for President.'
    }
    
]

//POST
function addWomen(request, response) {
    const addWomen = {
        id: uuidv4(),
        name: request.body.name,
        image: request.body.image,
        bio: request.body.bio
    }

    women.push(addWomen)

    response.json(women)
}

//GET
function showWomen(request, response){
    response.json(women)
}

//PATCH
function editWoman(request, response){
    function findWoman(woman) {
        if (woman.id === request.params.id) {
            return woman
        } 
    }

    const womanFound = women.find(findWoman)

    if (request.body.name) {
        womanFound.name = request.body.name
    }

    if (request.body.image) {
        womanFound.image = request.body.image
    }

    if (request.body.bio) {
        womanFound.bio = request.body.bio
    }

    response.json(women)

}

//DELETE
function deleteWoman(request, response) {
        function allExcept(woman) {
        if (woman.id !== request.params.id) {
            return woman
        } 
    }

const womenwhostay = women.filter(allExcept)

response.json(womenwhostay)

}

//DOOR
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}


app.use(router.get ('/women', showWomen)) // setting router GET/women
app.use(router.post ('/women', addWomen)) // setting router POST/women
app.use(router.patch('/women/:id', editWoman))// setting router PATCH/women
app.use(router.delete('/women/:id', deleteWoman))
app.listen(porta, mostraPorta) // listening the door


