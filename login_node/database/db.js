import mysql from 'mysql'

const conexion = mysql.createConnection({


    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
})

conexion.connect((error) => {
    if (error) {
        console.log('el error de conexion es:' + error)
        return
    }
    console.log('conectado a la base de datos MYSQL')
})


export default conexion