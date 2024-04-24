import app from './app'
import mongoose from 'mongoose'
import config from './config'

// getting-started.js

async function server() {
  try {
    await mongoose.connect(config.database_url)
    console.log('Connected to MongoDB')
    app.listen(5000, () => {
      console.log(`Example app listening on port `)
    })
  } catch (error) {
    console.log(error)
  }
}

server().catch((err) => console.log(err))
