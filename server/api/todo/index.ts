import { db } from "../../db";

export default defineEventHandler((event) => {
	console.log({ event });
	const method = event.req.method;

	if (method === "GET") {
		return db.todos;
	}

});
