import { connect } from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

export const connectDb = async () => {
	try {
		const db = await connect(MONGODB_URI, {
			dbName: DB_NAME
		});
		console.log(`Conectado a la base de datos ${db.connection.name}`);
	} catch (error) {
		console.error("error conectando a la base de datos", error);
	}
}
