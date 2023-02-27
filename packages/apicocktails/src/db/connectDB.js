const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true)
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Database is connected')
  } catch (error) {
    console.log(error)
    throw new Error('Error a la hora de iniciar la base de datos')
  }
}

module.exports = connectDB
