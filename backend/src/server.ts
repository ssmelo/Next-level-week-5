import express from 'express';
import "./database"; // o javascript reconhece q queremos o index. ele tambem executa automaticamente o import
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333,() => {
    console.log("Server is running on port 3333");
});