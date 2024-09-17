import express from 'express';
import cors from "cors"

const app = express()
const PORT = 3000 ;

//Middlewares
app.use(express.json())
app.use(cors())


app.listen(PORT , ()=> {
    console.log(`Server is running in the ${PORT}`)
})