const { MongoClient } = require("mongodb");

let database;
async function mongoConnect() {
	// Connection URI
	const uri = process.env.ATLAS_URI;
	// Create a new MongoClient
	const client = new MongoClient(uri);
	try {
		// Connect the client to the server
		await client.connect();
		database = await client.db("Dinosaur_Store");
		// Establish and verify connection
		console.log("Connected to store backend");
	} catch (error) {
		throw Error("Could not connect to store backend. " + error);
	}
}
function db() {
	return database;
}
module.exports = {
	mongoConnect,
	db,
};