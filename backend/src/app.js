import 'dotenv/config';
import express from "express";
import cors from "cors";
import { connectDb } from "./database.js";
import { router } from './routes/routes.js';

const PORT = process.env.PORT || 4000;
const app = express();

connectDb();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
