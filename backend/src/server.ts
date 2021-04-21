import express from 'express';
import "./database"; // o javascript reconhece q queremos o index. ele tambem executa automaticamente o import

const app = express();

app.get('/', (request, response) => {
    return response.json({
        "status": 500,
    })
})
app.listen(3333,() => {
    console.log("Server is running on port 3333");
});