import mongoose from 'mongoose'

mongoose.connect('mongodb://user_coba:selaluapace@localhost:27017/coba?authSource=admin')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Server database connected!!')
})