import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (request, response) => response.json({
    message: 'Welcome to the Belvo API challenge app.'
}));

app.listen(PORT, () => {
    console.log(`Server up and running at ${PORT}!`)
})