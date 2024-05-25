import express from 'express'
import routers from './server/routers.js'
import cors from 'cors'

const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(routers)

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})