import { client } from "./lib/client.js";

const response = await client.getEntries();

// Log the Space ID of each entry to showcase resolved refs.
response.includes.Entry.forEach((entry) => {
  console.log("ADDITIONAL SPACE ID", entry.sys.space.sys.id);
});

console.log("ITEMS", response.items);
console.log("INCLUDES", response.includes.Entry);
