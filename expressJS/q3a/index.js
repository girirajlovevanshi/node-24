
//Describe the different HTTP status codes and their meanings

// HTTP status codes are standard response codes given by web site servers on the internet.
// The status codes are divided into five categories:

// 1. Informational - 1xx
// 2. Success - 2xx
// 3. Redirection - 3xx
// 4. Client Error - 4xx
// 5. Server Error - 5xx

// 1xx Informational
// This class of status code indicates a provisional response, 
// consisting only of the Status-Line and optional headers, and is terminated by an empty line.
// There are no required headers for this class of status code.
// Since HTTP/1.0 did not define any 1xx status codes, 
// servers must not send a 1xx response to an HTTP/1.0 client except under experimental conditions.

// 2xx Success
// This class of status code indicates that the client's request was successfully received, understood, and accepted.


// 3xx Redirection
// This class of status code indicates that further action needs to be taken by the user agent in order to fulfill the request.
// The action required may be carried out by the user agent without interaction with the user if and only if the method used in the second request is GET or HEAD.
// A user agent should not automatically redirect a request more than five times, since such redirections usually indicate an infinite loop.

// 4xx Client Error
// This class of status code is intended for situations in which the error seems to have been caused by the client.
// Except when responding to a HEAD request, the server should include an entity containing an explanation of the error situation, and whether it is a temporary or permanent condition.
// These status codes are applicable to any request method.

// 5xx Server Error
// This class of status code is intended for situations in which the error seems to have been caused by the server.
// Except when responding to a HEAD request, the server should include an entity containing an explanation of the error situation, and whether it is a temporary or permanent condition.
// These status codes are applicable to any request method.

// Some of the most common HTTP status codes are:

// 1. 200 OK - The request has succeeded. 
// The information returned with the response is dependent on the method used in the request.

// 2. 201 Created - The request has been fulfilled and has resulted in one or more new resources being created.

// 3. 204 No Content - The server successfully processed the request and is not returning any content.

// 4. 400 Bad Request - The server cannot or will not process the request due to an apparent client error.

// 5. 401 Unauthorized - Similar to 403 Forbidden, 
// but specifically for use when authentication is required and has failed or has not yet been provided.

// 6. 403 Forbidden - The request was valid, but the server is refusing action. 
// The user might not have the necessary permissions for a resource, or may need an account of some sort.

// 7. 404 Not Found - The requested resource could not be found 
// but may be available in the future. Subsequent requests by the client are permissible.

// 8. 500 Internal Server Error - A generic error message, 
// given when an unexpected condition was encountered and no more specific message is suitable.

// 9. 502 Bad Gateway - The server was acting as a gateway or proxy 
// and received an invalid response from the upstream server.

// 10. 503 Service Unavailable - The server is not ready to handle the request. 
// Common causes are a server that is down for maintenance or that is overloaded.

// 11. 504 Gateway Timeout - The server was acting as a gateway or proxy 
// and did not receive a timely response from the upstream server.

// 12. 505 HTTP Version Not Supported 
// - The server does not support the HTTP protocol version used in the request.

// 13. 507 Insufficient Storage 
// - The server is unable to store the representation needed to complete the request.

// 14. 511 Network Authentication Required 
// - The client needs to authenticate to gain network access.

// 15. 418 I'm a teapot - This code was defined in 1998 as one of the traditional IETF April Fools' jokes,
//  in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers.

// 16. 451 Unavailable For Legal Reasons - A server operator has received a legal demand 
// to deny access to a resource or to a set of resources that includes the requested resource.