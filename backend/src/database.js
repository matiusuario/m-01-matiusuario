import { connect } from "mongoose";

export const connectDb = async () => {
	try {
		const db = await connect(process.env.MONGODB_URI, {
			dbName: process.env.DB_NAME
		});
		console.log(`Conectado a la base de datos ${db.connection.name}`);
	} catch (error) {
		console.error("error conectando a la base de datos", error);
	}
}
