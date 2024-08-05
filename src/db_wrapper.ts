import { Database } from "bun:sqlite";
import type User from "./user";

export class DBWrapper {
    private static _instance: DBWrapper;
    private static db: Database;

    private constructor() {
        DBWrapper.db = new Database("db/codes.db");
    }

    public static get instance(): DBWrapper {
        if (!DBWrapper._instance) {
            DBWrapper._instance = new DBWrapper();
        }

        return DBWrapper._instance;
    }

    public async getUsers(): Promise<User[]> {
        return DBWrapper.db.query("select * from users").all() as User[];
    }
}