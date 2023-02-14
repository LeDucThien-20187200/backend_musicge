//
// imports
import dotenv from 'dotenv'
import express from 'express'
import { songs, users } from './data.js'
import pool from './db.js'
import faces from './faces.js'
//
// import middlewares
import errorHandler from './middlewares/error-handler.js'
import search from './routes/search.js'
import songroute from './routes/songs.js'
import tags from './routes/tags.js'
//
// import routes
import user from './routes/user.js'

//
// configure environment variables
dotenv.config({ path: '.env' })

//
// initailize express app
const app = express()
const PORT = process.env.PORT || 4444

// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// initialize routes
app.get('/', (req, res) => res.json('welcome to the api'))


app.use('/api/v1/', user)
app.use('/api/v1/songs/', songroute)
app.use('/api/v1/tags/', tags)
app.use('/api/v1/search/', search)
app.use(errorHandler)

// set up express app to listen for requests
app.listen(PORT, () => console.log('listening on port 4444'))
