require('dotenv').config();
import * as mongo from 'mongodb';

export const collections: { books?: mongo.Collection } = {};

export async function databaseConnection() {
  const mongoURI = process.env.URI_MONGODB;

  if (!mongoURI) {
    throw new Error('MongoDB URI is not provided in environment variables.');
  }

  const client: mongo.MongoClient = new mongo.MongoClient(mongoURI);

  try {
    await client.connect();
    const db: mongo.Db = client.db("library");

    const bookCollection: mongo.Collection = db.collection('books');
    collections.books = bookCollection;

    console.log("Successfully connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}
