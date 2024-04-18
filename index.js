import express from 'express'
import blogsRoutes from './routes/blogsRoutes.js'
import { config } from 'dotenv';

config();
const app = express();
const port = process.env.PORT;

app.use(express.json())

app.use('/api/blogs', blogsRoutes)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
