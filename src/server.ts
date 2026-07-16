import express from "express"
import cors from "cors"
import clientes from "./routes/clientes.js"
import routes from "./routes.js"

const app = express()

app.use(cors({ origin: '*'}))


app.use(express.json()) 

app.use(routes)

app.listen(3000, () => {
    console.log ("servidor rolando")
})


