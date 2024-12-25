// How do you implement validation in Express.js using Joi?

// In this snippet, we are using the Joi library to implement validation in Express.js.
// We define a schema using Joi.object() and specify the validation rules for the 'name' field.
// In the POST route handler, we validate the request body against the schema using schema.validate(req.body).
// If there is an error, we return a 400 Bad Request status code with the error message.
// Otherwise, we send a success message indicating that the user was created successfully.
// This is a simple example of how to implement validation in Express.js using Joi.
// The Joi library provides a powerful and flexible way to define validation rules and validate data in Node.js applications.

import express from 'express';
import Joi from 'joi';

const app = express();
app.use(express.json());

const schema = Joi.object({
    name: Joi.string().min(3).required()    
});

app.post('/api/users', (req, res) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    res.send(`User created successfully with name: ${req.body.name}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));