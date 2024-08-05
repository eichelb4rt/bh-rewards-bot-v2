import { DBWrapper } from "./db_wrapper";

let users = await DBWrapper.instance.getUsers();
console.log(users);