import express from 'express'
import blogsRoutes from './routes/blogsRoutes.js'
import usersRoutes from './routes/usersRoutes.js'
import { config } from 'dotenv';
import mongoose from 'mongoose';

config();
const app = express();
const port = process.env.PORT;

app.use(express.json())

app.use('/api/blogs', blogsRoutes)
app.use('/api/users', usersRoutes)

const startServer = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongo db")
        app.listen(process.env.PORT, () => {
            console.log(`server running on port ${process.env.PORT}`);
        })
    }
    catch (error) {
        console.log(error.message)
    }
}

startServer();
