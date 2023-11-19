import express from 'express';

import { AppDataSource } from './data-source';
import router from './router';


AppDataSource.initialize()
    .then(() => {
        console.log("DB has been initialized!")
    })
    .catch((err) => {
        console.error("Error during DB initialization:", err)
    })

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/posts', router);

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default server;