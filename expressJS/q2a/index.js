//What are the different levels of software testing? Explain with an example.

// Answer:
// There are mainly four levels of software testing:
// 1. Unit Testing
// 2. Integration Testing
// 3. System Testing
// 4. Acceptance Testing

// 1. Unit Testing:
// Unit Testing is the first level of software testing. 
// It is the process of testing individual units or components of a software.
//  It is done by the developers during the development phase of the software.
//  The main purpose of unit testing is to validate that each unit of the software performs as designed.
//  It helps to identify and fix bugs early in the development process.

// Example:
// Consider a simple function that adds two numbers.
function add(a, b) {
    return a + b;
}
// A unit test for this function would test if the function returns the correct sum of two numbers.
describe('add function', () => {
    it('should return the sum of two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
});

// 2. Integration Testing:
// Integration Testing is the second level of software testing.
// It is the process of testing the integration of multiple units or components of a software.
// It is done after unit testing and before system testing.
// The main purpose of integration testing is to ensure that the integrated units work together as expected.
// It helps to identify and fix issues related to the interaction between units.

// Example:
// Consider a software application that consists of multiple modules.
// An integration test for this application would test if the modules work together correctly.
describe('software application', () => {
    it('should work correctly', () => {
        // Test the interaction between modules
    });
});

// 3. System Testing:
// System Testing is the third level of software testing.
// It is the process of testing the entire software system as a whole.
// It is done after integration testing and before acceptance testing.
// The main purpose of system testing is to validate that the software meets the specified requirements.
// It helps to identify and fix issues related to the overall functionality of the software.

// Example:
// Consider a web application that allows users to create and manage tasks.
// A system test for this application would test if all the features of the application work correctly.
describe('web application', () => {
    it('should allow users to create and manage tasks', () => {
        // Test the functionality of the application
    });
});

// 4. Acceptance Testing:
// Acceptance Testing is the fourth level of software testing.
// It is the process of testing the software from the end user's perspective.
// It is done after system testing and before the software is released to the end users.
// The main purpose of acceptance testing is to ensure that the software meets the user's requirements.
// It helps to validate that the software is ready for deployment.

// Example:
// Consider a mobile application that allows users to book flights.
// An acceptance test for this application would test if the user can successfully book a flight.
describe('mobile application', () => {
    it('should allow users to book flights', () => {
        // Test the booking process from the user's perspective
    });
});

// Overall, these four levels of software testing help to ensure the quality and reliability of the software before it is released to the end users.
//  Each level of testing has its own purpose and helps to identify different types of issues in the software. 
// By following a structured testing approach, software developers can deliver high-quality software that meets the user's requirements.