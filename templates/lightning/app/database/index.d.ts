import { Database, Statement } from "bun:sqlite";

export abstract class Model<
  P extends Record<string, any> = Record<string, any>,
> {
  name: string;
  tableName: string;
  database: Database;
  properties: P = {};

  constructor(db: Database) {
    if (!db) {
      throw new Error("Database is not defined");
    }
    this.database = db;
  }

  createTable(): Statement;
}
