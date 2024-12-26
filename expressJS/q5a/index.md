// Explain the importance of Environment Variables in Node.js applications.

// Environment variables are a set of dynamic named values 
// that can affect the way running processes will behave on a computer.
// They are part of the environment in which a process runs. 
// For example, a running process can query the value of the TEMP environment variable 
// to discover a suitable location to store temporary files, or the HOME or USERPROFILE variable 
// to find the directory structure owned by the user running the process.

// In Node.js, environment variables are available through the process.env global object.
// The process.env object is a global variable that provides access to predefined environment variables.
// These variables are accessible by the user and can be used to configure the behavior of the application.
// Environment variables are used to store sensitive information such as API keys, database credentials,
// and other configuration settings that should not be hard-coded into the application code.
// By using environment variables, you can keep sensitive information separate from the application code,
// making it easier to manage and more secure.

// Environment variables are also useful for configuring the behavior of the application 
// based on the environment it is running in.
// For example, you can use environment variables to specify different database connection strings
// for development, testing, and production environments.
// This allows you to easily switch between different configurations without modifying the application code.

// Overall, environment variables are an important part of Node.js applications
// and are used to store sensitive information, configure the behavior of the application,
// and manage different environments. They provide a flexible and secure way to customize the application
// without hard-coding configuration settings into the code.

// Example of using environment variables in Node.js application

// we use dotenv package to load environment variables from a .env file into process.
// To use dotenv, you need to install it using npm install dotenv
// Terminal
```bash 
npm install dotenv
```
```javascript
// index.js
// import dotenv package
import dotenv from 'dotenv';

// Load environment variables from .env file
 dotenv.config({
    path : './.env' // path to the .env file
 }); // loads environment variables from .env file into process.env

// Now you can access the environment variables using process.env
const port = process.env.PORT || 3000; // use PORT environment variable or default to 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
```
// .env file
```plaintext
PORT=3000
```
PORT=3000
```
// Terminal
// Start the server
```plaintext
node index.js
```
// Output
```plaintext
Server is running on port 3000
```

// In this example, we use the PORT environment variable to specify the port number 
// that the server should listen on.

// By using environment variables, we can easily change the port number
// without modifying the application code.
// This makes it easier to deploy the application to different environments
// without having to make changes to the code.