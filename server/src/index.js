import express from 'express';
import router from './routers.js';
import cors from 'cors';

const PORT = process.env.port || 3000;
const HOSTNAME = process.env.hostname || 'http://localhost';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello Cotacoins Hi!");
});

app.use(cors({
    origin: [`http://localhost:3001`]
}))

app.use("/api", router);

app.use((req, res) => {
    res.status(404).send("Not Found");
})

app.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
})