import express from "express";
import cors from "cors";
//importamos la conexion de la base de datos
import db from "./database/db.js";

import blogRoutes from './routes/routes.js'

const app = express();

app.use(cors())
app.use(express.json());
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la base de datos')
} catch (error) {
  console.log(`El error de conexion es:${error}`)

}

// app.get('/', (req, res) => {
//   res.send('Hola mundo')
// })

app.listen(8000,()=>{
  console.log('El servidor esta corriendo en http://localhost:8000/')
})