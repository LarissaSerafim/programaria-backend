const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

const women = [

{
        name: 'Alek Wek',
        image: 'https://1.bp.blogspot.com/_DnDXzj5Ohaw/TDZ6-4LxTdI/AAAAAAAAH-s/DwpaPzF2ZbM/s1600/alek3.jpg',
        bio: 'Alek Wek (born 16 April 1977) is a South Sudanese-British model and designer who began her fashion career at the age of 18 in 1995. She has been hailed for her influence on the perception of beauty in the fashion industry. She is from the Dinka ethnic group in South Sudan,but fled to Britain in 1991 to escape the civil war in Sudan. Reference: https://en.wikipedia.org/wiki/Alek_Wek'
    },
    {
        name: 'Ilhan Omar',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Ilhan_Omar%2C_official_portrait%2C_116th_Congress_%28cropped%29_A.jpg',
        bio: 'Ilhan Abdullahi Omar (Arabic: إلهان عبد الله عمر born October 4, 1981) is a Somali-American politician. She is the member of the U.S House of Representatives from Minnesotas 5th district since January 3, 2019. Omar is also member of "The Squad". In 2016, she was elected a Democratic–Farmer–Labor Party member of the Minnesota House of Representatives. She is the first Somali-American person elected to office in the United States.She is the Director of Policy and Initiatives of the Women Organizing Women Network. Omar was the Democratic Farmer Labor nominee for U.S. Representative in Minnesotas 5th congressional district, having won the primary on August 14, 2018.[7] Omar won the election in November 2018, becoming first Muslim-American woman to be elected to congress, alongside Rashida Tlaib.Omar is a member of "The Squad" along with Tlaib, Alexandria Ocasio-Cortez and Ayanna Pressley. In 2020, Omar endorsed Bernie Sanders for President.'
    }
    
]
function showWomen(request, response){
    response.json(women)
}

app.use(router.get ('/women', showWomen))
app.listen(porta, mostraPorta)


