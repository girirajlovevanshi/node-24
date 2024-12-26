# Implementing Pagination in an API using Express.js

Pagination is a technique used to divide a large set of data into smaller chunks or pages, making it easier to display and navigate through the data. In an Express.js API, pagination can be implemented by using query parameters to specify the page number and the number of items per page to be returned.

## Example

Here's an example of how you can implement pagination in an API using Express.js:

1. Define a route in your Express.js application that handles pagination:

    ```javascript
    app.get('/users', async (req, res) => {
        const page = parseInt(req.query.page) || 1; // Get the page number from the query parameters
        const limit = parseInt(req.query.limit) || 10; // Get the limit (number of items per page) from the query parameters

        const startIndex = (page - 1) * limit; // Calculate the starting index of the data to be returned
        const endIndex = page * limit; // Calculate the ending index of the data to be returned

        const results = {}; // Create an empty object to store the paginated results

        if (endIndex < await User.countDocuments().exec()) { // Check if there are more pages
            results.next = { // Add a 'next' property to the results object
                page: page + 1, // Set the page number for the next page
                limit: limit // Set the limit for the next page
            };
        }

        if (startIndex > 0) { // Check if there are previous pages
            results.previous = { // Add a 'previous' property to the results object
                page: page - 1, // Set the page number for the previous page
                limit: limit // Set the limit for the previous page
            };
        }

        try {
            results.results = await User.find().limit(limit).skip(startIndex).exec(); // Retrieve the paginated data
            res.json(results); // Send the paginated results as a JSON response
        } catch (err) {
            res.status(500).send('Server Error'); // Send a 500 status code for server error
        }
    });
    ```

In this example, the `/users` route handles pagination by using query parameters `page` and `limit` to specify the page number and the number of items per page to be returned. The route calculates the starting and ending indexes of the data to be returned based on the page number and limit, and retrieves the paginated data using the `limit` and `skip` methods provided by Mongoose. The route also checks if there are more pages or previous pages available, and includes `next` and `previous` properties in the results object to provide navigation links for the client.

To use pagination in the API, the client can make a GET request to the `/users` route with query parameters to specify the page number and the number of items per page to be returned, like this:

```
GET /users?page=1&limit=10
```

This will return the first page of users with 10 items per page, along with navigation links for the next and previous pages if available.