//Explain the MVC architecture with an example in an Express.js application

// Model-View-Controller (MVC) is a software design pattern 
// that separates an application into three main components: Model, View, and Controller. 
// Each of these components has a specific role in the application, 
// and they work together to achieve the overall functionality of the application.

// Model: The Model represents the data and business logic of the application.
// It interacts with the database to retrieve and store data,
// and contains the application's business rules and logic.
// In an Express.js application, the Model can be represented by Mongoose models,
// which define the structure and behavior of the data stored in the database.

// View: The View represents the user interface of the application.
// It is responsible for presenting the data to the user in a readable format,
// and for handling user input and interactions.
// In an Express.js application, the View can be represented by HTML templates,
// which are rendered by the server and sent to the client's browser for display.

// Controller: The Controller acts as an intermediary between the Model and the View.
// It receives user input from the View, processes it using the Model,
// and sends the results back to the View for display.
// In an Express.js application, the Controller can be represented by route handlers,
// which handle incoming requests, interact with the Model to retrieve or store data,
// and send the response back to the client.

// Example:
// create an express program with MVC architecture