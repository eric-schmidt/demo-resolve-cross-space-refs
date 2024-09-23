import { client } from './lib/client.js';

const response = await client.getEntries();

// Log the Space ID of each entry to showcase resolved refs.
response.includes.Entry.forEach((entry) => {
  console.log(entry.sys.space.sys.id);
});
