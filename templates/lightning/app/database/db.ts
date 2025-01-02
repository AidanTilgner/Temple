import Database from "better-sqlite3";
import { config } from "dotenv";

config();

const { DB_LOCATION } = process.env;

if (!DB_LOCATION) {
  throw new Error("DB_LOCATION is not defined");
}

export const getDatabase = () => {
  return Database(DB_LOCATION);
};
