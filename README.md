# Demo - Resolve Contentful Cross-Space References

This demo showcases how to automatically resolve Contentful cross-space references using the JavaScript client library.

## Instructions

1. Clone this repo.
2. Copy the `.env.example` file and rename to `.env`.
3. Replace the Space ID and Delivery Key values with those from your own spaces. This example assumes you are querying for the primary space and want to also retrieve additional data from the secondary space as needed. You could also extend this to add tertiary spaces (or more!) by adding additional variables to the `.env` file and updating the `additionalKeys` var in `./lib/client.js` to accept additional spaces.
4. Run `node index.js` to run the query. This will log out the response; however, you will probably want to dig deeper into this response on an individual entry to see how the referenced entry data is automatically resolved.
