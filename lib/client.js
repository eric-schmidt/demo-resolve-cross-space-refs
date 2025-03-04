import dotenv from "dotenv";
import contentful from "contentful";

// Init dotenv.
dotenv.config();

// Store additional Space IDs/keys.
const secondarySpaceId = process.env.CONTENTFUL_SECONDARY_SPACE_ID;
const additionalKeys = {
  spaces: {
    [secondarySpaceId]: process.env.CONTENTFUL_SECONDARY_DELIVERY_KEY,
  },
};

// Generate a base64 encoded string of Space IDs/keys to pass to x-contentful-resource-resolution.
var additionalKeysEncoded = new Buffer.from(
  JSON.stringify(additionalKeys)
).toString("base64");

console.log("ENCODED KEYS", additionalKeysEncoded);

// Create and export the Contentful environment for use in other files.
export const client = await contentful.createClient({
  space: process.env.CONTENTFUL_PRIMARY_SPACE_ID,
  accessToken: process.env.CONTENTFUL_MARKETING_DELIVERY_KEY,
  headers: {
    "x-contentful-resource-resolution": additionalKeysEncoded,
  },
});
