import express from "express"
import cors from 'cors';


const app = express();

app.listen(3000);

app.use(
    cors({
        origin:'http://localhost:5173'
    })
)

app.get('/', (req,res) =>{
res.send('Server BeatWave funzionante')
})

app.get('/api/deezer/track', async (req,res) => {
    try {
        if(!req.query.q){
            throw new Error(`Errore: valore Input mancante`)
        }
        const inputValue = req.query.q;
        const response = await fetch(`https://api.deezer.com/search?q=${inputValue}`);
        if(!response.ok){
            throw new Error(`Errore nella chiamata:${response.error}`);
        }
        const result = await response.json();
        res.json(result)
        
    } catch (error) {
        console.error(error)
        res.send(error)
    }
   
})