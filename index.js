import { client } from "./lib/client.js";

const response = await client.getEntries();

console.log(response);
