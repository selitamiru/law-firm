import connection from "./schema/database.config.js";
import express from 'express'
import cors from 'cors'
import registerRoute from "./Routes/registerR.js";
import tableCreateRoute from "./Routes/tableR.js";
import getUsers from "./Routes/allUserR.js"
let app = express()
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // Set this to true
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization,token');
    next();
  });

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3001' }))

app.use('/admin',tableCreateRoute)
app.use('/admin',getUsers)
app.use('/user',registerRoute)

function connectionStep() {
    connection.connect((err) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log('connection with database is successful')
            let PORT = 6000 
            app.listen(PORT, () => {
                console.log(`server is listening to port ${PORT}`)
            })
        }
    })
}
connectionStep()