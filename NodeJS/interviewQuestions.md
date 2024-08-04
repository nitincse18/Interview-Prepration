### 0. What is Node.js and how does it work?
Node.js is a free, open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It is built on the V8 JavaScript engine from Google Chrome, which is written in C++ and compiles JavaScript code directly to native machine code.

Node.js uses an event-driven, non-blocking I/O model that allows it to handle large amounts of I/O-intensive tasks efficiently. This means that when a request is made, instead of blocking the thread and waiting for a response, Node.js will continue to process other requests, and when the response is ready, it will handle it asynchronously.

### Everything in JS happens inside an Execution Context.
**Execution Context:** Component where JS is executed. It has:
- Memory or Variable Env.
  Here variables are stored as key: value pair.
- Code Env or Thread of execution
  This is the place where code is executed one line at a time.

**Note:** JavaScript is a synchronous single-thread language.

#### 1st Phase: Memory creation phase
- Everything happens in a ‘Global’ execution context.
- In this phase, memory is allocated to all variables and function(s).
- For variable(s), key is the variable name itself and value is undefined (even if the variable is initialized). And, for function(s), key is the function name and value is body of the code.

#### 2nd Phase: Code Execution phase
- Code is traversed line by line and actual value of variables are assigned to them.
- A new ‘local’ execution context is created, when function ‘invocation’ is encountered. Again, two phase perform their role.


![alt text](https://github.com/nitincse18/Interview-Prepration/blob/main/executionContext.png)

#### Advantage:
One of the main advantages of Node.js is that it allows developers to write server-side JavaScript code. This means that the same language can be used on both the front-end and back-end, which simplifies the development process and reduces the need to learn multiple programming languages.

Node.js also has a vast ecosystem of third-party packages available through its package manager, npm. These packages provide a range of functionality, from database drivers and web frameworks to utilities for working with JSON and XML.

In summary, Node.js is a powerful tool for building server-side applications using JavaScript. It provides an efficient and scalable platform for handling I/O-intensive tasks, and its large ecosystem of third-party packages makes it easy to develop complex applications quickly.
#### Example
```


```
### 1. What is the difference between Node.js and JavaScript?
The main difference between Node.js and JavaScript is that Node.js is a runtime environment, while JavaScript is a programming language. 
Node.js provides a platform for executing JavaScript code on the server-side, while JavaScript is primarily used on the client-side in web browsers. Additionally, Node.js provides access to system resources like the file system and network sockets, which are not available in a web browser.

Node.js is a platform for executing JavaScript code outside of a web browser, while JavaScript is a programming language primarily used for front-end web development.
#### Example
```


```
### 2. How do you handle errors in Node.js?
Handling errors is an essential part of building robust and reliable applications in Node.js. 
There are several ways to handle errors in Node.js:
#### I. Try-Catch Blocks:
One of the most common ways to handle errors in Node.js is to use try-catch blocks. This allows you to catch errors that occur within a specific block of code and handle them in a way that makes sense for your application.
#### Example
```javascript
try {
  // some code that might throw an error
} catch (error) {
  // handle the error
}
```
#### II. Error-First Callbacks:
Another common pattern in Node.js is to use error-first callbacks. This means that the first parameter passed to a callback function is always an error object. 
If the error is null or undefined, it means that the operation was successful, and the callback can continue with the expected behavior. 
If the error object is not null, it means that an error occurred, and the callback can handle the error appropriately.
```javascript
function someFunction(callback) {
  if (/* something goes wrong */) {
    callback(new Error('Something went wrong'));
  } else {
    callback(null, 'Success');
  }
}

someFunction(function(error, result) {
  if (error) {
    // handle the error
  } else {
    // handle the result
  }
});
```
#### III. Promises:
Promises are another way to handle errors in Node.js. A Promise represents a value that may not be available yet, but will be available at some point in the future. Promises have two possible outcomes: resolved (with a value) or rejected (with an error).
```javascript
somePromiseFunction()
  .then(function(result) {
    // handle the result
  })
  .catch(function(error) {
    // handle the error
  });
```
#### IV. Middleware:
In a Node.js web application, middleware functions can be used to handle errors that occur during the request/response cycle. Middleware functions are functions that have access to the request object, the response object, and the next middleware function in the application's request/response cycle.
```javascript
app.use(function(error, req, res, next) {
  // handle the error
});
```

### 3. What is callback in Node.js and how does it work?
In Node.js, a callback is a function that is passed as an argument to another function and is called when the parent function completes its task.It allows asynchronous operations to be performed without blocking the main event loop.

When a function in Node.js takes an asynchronous action, it typically accepts a callback function as one of its arguments. 
Once the asynchronous action completes, the callback function is called, passing any data or error information as arguments.
#### Example
```javascript
const fs = require('fs');

fs.readFile('/path/to/file', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
```
In the above code, fs.readFile() is a function that reads a file asynchronously. 
The second argument to this function is a callback function that will be called when the file reading operation is complete. 
The callback function takes two arguments: err and data. 
If an error occurs while reading the file, the err argument will contain information about the error. If the file is read successfully, 
the data argument will contain the contents of the file as a buffer.

Callbacks are a fundamental concept in Node.js and are used extensively in many built-in and third-party modules to handle asynchronous operations.

### 4. What are Promises in Node.js and how do they work?
In Node.js, a Promise is an object that represents the eventual completion or failure of an asynchronous operation and allows you to handle the 
result of that operation asynchronously.

A Promise has three possible states:

* Pending: The initial state when a Promise is created.
* Fulfilled: The state when the operation is completed successfully and the Promise returns a value.
* Rejected: The state when the operation fails and the Promise returns an error.
#### Example1
```javascript
const fs = require('fs');

const readFilePromise = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readFilePromise('/path/to/file')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
```
In the above code, readFilePromise() is a function that returns a Promise object. The Promise object wraps the fs.readFile() function call and returns a Promise that can be used to handle the results of the asynchronous operation.

The then() method is used to handle the successful completion of the operation and the catch() method is used to handle any errors that occur during the operation. If the operation is successful, the data argument passed to resolve() is passed to the then() method. If an error occurs, the err argument passed to reject() is passed to the catch() method.

Promises are a powerful tool for handling asynchronous operations in Node.js and are widely used in many built-in and third-party modules. They make it easy to handle both successful and failed operations and to chain multiple asynchronous operations together.

#### Example2
```javascript
function getSumNum(a, b) {
  const customPromise = new Promise((resolve, reject) => {
    const sum = a + b;

    if(sum <= 5){
      resolve("Let's go!!")
    } else {
      reject(new Error('Oops!.. Number must be less than 5'))
    }
  })

  return customPromise
}

// consuming the promise
getSumNum(1, 3).then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})
```

### Chaining promises
In Node.js, promises can be chained together to perform a sequence of asynchronous operations. Chaining promises allows you to write more concise and readable code.
```javascript
const fs = require('fs');

const readFilePromise = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const writeFilePromise = (filePath, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

readFilePromise('/path/to/input/file')
  .then((data) => {
    const processedData = processData(data);
    return writeFilePromise('/path/to/output/file', processedData);
  })
  .then(() => {
    console.log('File successfully written!');
  })
  .catch((err) => {
    console.error(err);
  });

```
In the above code, readFilePromise() and writeFilePromise() are two functions that return Promise objects. The then() method is used to chain these two Promises together. When the readFilePromise() is fulfilled, the then() method calls the processData() function to process the contents of the file. Then, the writeFilePromise() function is called with the processed data as an argument. When the writeFilePromise() Promise is fulfilled, the then() method logs a success message. If an error occurs at any point in the chain, the catch() method is called to handle the error.

Chaining promises in Node.js allows you to perform complex asynchronous operations with ease and maintain readability in your code.

```javascript
let value;

function getSumNum(a, b) {
  const customPromise = new Promise((resolve, reject) => {
    const sum = a + b;

    if(sum < 5){
      resolve(sum)
    } else {
      reject(new Error('Oops!.. Number must be less than 5'))
    }
  })

  return customPromise
}

getSumNum(1, 3)
.then(data => {
  console.log("initial data: " + data)
  value = data + 1 // modifying the returned data

  return value
})
.then(newData => {
  console.log("modified data: " + newData)
})
.catch(err => {
  console.log(err)
})
```
### Converting an existing callback API to a promise
#### Plain callback API code
```javascript
function perfectSquare (number, callback) {
    const bool = Number.isInteger(Math.sqrt(number))
    if (!bool) {
      return callback(`Number ${number} is NOT a perfect square` )
    }
    callback(`Number ${number} is a perfect square`)
  }

  // callback function
  function callback(data){
    console.log(data)
  }
  perfectSquare(25, callback)
```
#### Promise API code
```javascript
function perfectSquare (number) {
    return new Promise(function (fulfilled, rejected) {
      const bool = Number.isInteger(Math.sqrt(number))
      if (!bool) {
          return rejected( new Error(`Number ${number} is NOT a perfect square`) )
      }
      fulfilled( `Number ${number} is a perfect square` )
    })
  }
  perfectSquare(25).then(res => {
    console.log(res)
  })
```

### 5. How do you handle asynchronous operations in Node.js?
#### To handle asynchronous operations in Node.js, you can use callbacks, promises, or async/await.
1. Callbacks: Callbacks are a common way to handle asynchronous operations in Node.js. You pass a function as an argument to an asynchronous function, and that function gets called once the operation is complete. 

- Example
```javascript
// Example using callbacks
function fetchData(callback) {
  setTimeout(() => {
    const data = 'Some data';
    callback(data);
  }, 2000);
}

fetchData((data) => {
  console.log(data);
});
```
- In this example, the fetchData function simulates an asynchronous operation using setTimeout. Once the operation is complete, it calls the callback function with the fetched data.

2. Promises: Promises provide a more structured way to handle asynchronous operations. They allow you to chain multiple asynchronous operations together and handle success or failure using then and catch methods. 

- Example:
```javascript
// Example using promises
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Some data';
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```
- In this example, the fetchData function returns a promise that resolves with the fetched data. You can use the then method to handle the successful result and the catch method to handle any errors.

3. Async/await: Async/await is a more recent addition to JavaScript and provides a more synchronous-looking way to handle asynchronous operations. It allows you to write asynchronous code that looks like synchronous code, making it easier to read and understand.

- Example:
```javascript
// Example using async/await
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Some data';
      resolve(data);
    }, 2000);
  });
}

async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();
```
- In this example, the fetchDataAsync function is declared as async, allowing the use of the await keyword inside it. The await keyword pauses the execution of the function until the promise is resolved or rejected.

### 6. What is the purpose of the EventEmitter class in Node.js?

#### The EventEmitter class in Node.js is used to handle events. You can create an event emitter instance and register multiple listener functions. When the EventEmitter object emits an event, all the functions attached to that event are called synchronously.
#### Example
```javascript
const EventEmitter = require('events');

// Create an event emitter instance
const myEmitter = new EventEmitter();

// Register a listener
myEmitter.on('event', function(a, b) {
  console.log(a, b, this);
});

// Emit an event
myEmitter.emit('event', 'a', 'b');
```
- In this example, when the 'event' is emitted, the listener function is called with the arguments ('a', 'b').

- The EventEmitter is a core part of many Node.js modules. For example, it's used in streams, HTTP servers, and many other places where you need to handle events.

### 7. How do you use streams in Node.js?
#### Streams in Node.js are used to handle reading and writing data in a continuous manner. They are especially useful when dealing with large amounts of data, as they allow you to process data piece by piece, rather than loading the entire data into memory at once.

- There are four types of streams in Node.js:

  1. Readable: For reading operation.
  2. Writable: For writing operation.
  3. Duplex: Can read and write.
  4. Transform: A type of duplex stream where the output is computed based on input.

- Here's an example of how to use a Readable stream to read data from a file:
```javascript
const fs = require('fs');

const readStream = fs.createReadStream('./largeFile.txt');

readStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

readStream.on('end', () => {
  console.log('There is no more data to read.');
});
```
- In this example, fs.createReadStream is used to create a readable stream. This stream emits 'data' events as it reads data from the file. The 'end' event is emitted when there is no more data to read.

- Here's an example of how to use a Writable stream to write data to a file:
```javascript
const fs = require('fs');

const writeStream = fs.createWriteStream('./output.txt');

writeStream.write('Hello, ');
writeStream.write('World!\n');
writeStream.end();
```
- In this example, fs.createWriteStream is used to create a writable stream. You can use the write method to write data to the stream, and the end method to signal that no more data will be written to the stream.

- Streams can also be piped together. For example, you can create a readable stream and a writable stream, and then pipe the readable stream into the writable stream:

```javascript
const fs = require('fs');

const readStream = fs.createReadStream('./largeFile.txt');
const writeStream = fs.createWriteStream('./output.txt');

readStream.pipe(writeStream);
```

- In this example, data is read from largeFile.txt and written to output.txt. This is done piece by piece, allowing you to copy large files without consuming a lot of memory.




### 8. What is the purpose of the module.exports object in Node.js?
#### The module.exports object in Node.js is used to export values from a module so they can be used by other modules with the require function.

- When you create a module in Node.js, you can decide what to expose to other modules by adding properties to the module.exports object. This could be a function, an object, a value, or even a class.

- Here's an example:
```javascript
// myModule.js
module.exports.myFunction = function() {
  console.log('Hello, world!');
};

module.exports.myValue = 42;
```
- In this example, myModule.js exports a function myFunction and a value myValue. Other modules can use these as follows:
```javascript
// anotherModule.js
const myModule = require('./myModule');

myModule.myFunction(); // Outputs: 'Hello, world!'
console.log(myModule.myValue); // Outputs: 42
```
- In anotherModule.js, the require function is used to import the exports from myModule.js. The returned value is an object that has the same properties as module.exports in myModule.js.

- You can also export a single value, like a function or a class, by assigning it directly to module.exports:
```javascript
// yetAnotherModule.js
module.exports = function() {
  console.log('Hello, world!');
};
```
- In this case, the require function will return the function itself, not an object:
```javascript
// someOtherModule.js
const myFunction = require('./yetAnotherModule');

myFunction(); // Outputs: 'Hello, world!'
```
- In summary, module.exports is a fundamental part of the module system in Node.js, allowing you to structure your application into separate modules with clear interfaces.



### 9. How do you test Node.js applications?
#### Example
```


```
### 10. How do you optimize the performance of a Node.js application?
#### Optimizing the performance of a Node.js application involves several strategies:
**1. Use Clustering:** Node.js runs on a single thread, which means it doesn't take full advantage of multi-core systems by default. The cluster module allows you to create child processes (workers) that run simultaneously and share the same server port.

```javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
```

**2. Avoid Synchronous Code:** Node.js is single-threaded, which means synchronous operations can block the entire server. Always use asynchronous APIs in your Node.js server.

**3. Use Caching:** Caching can greatly improve the performance by storing the result of expensive function calls and reusing the cached result when the same inputs occur again.

**4. Use Load Balancing:** Load balancing helps to distribute the load among different servers, which can help to increase the application performance.

**5. Use a Reverse Proxy:** Using a reverse proxy like Nginx can help to manage load balancing, serve static files, SSL processing, and more.

**6. Use Gzip Compression:** Gzip compressing can greatly decrease the size of the response body and hence increase the speed of a web app.

**7. Database Optimization:** Use indexing, limit the result set, use database views, etc. to optimize database operations.

**8. Use Tools for Performance Tuning:** Use tools like Node Clinic, Autocannon, v8-profiler to identify performance bottlenecks and optimize them.

**9. Keep Node.js Up to Date:** Newer versions of Node.js often include performance improvements, so it's a good idea to keep your Node.js version up to date.




### 11. What is npm and how do you use it?
#### Example
```


```
### 12. How do you use middleware in Node.js?
#### Example
```


```
### 13. What is clustering in Node.js and how do you use it?
#### Example
```


```
### 14. How do you debug Node.js applications?
#### Example
```


```
### 15. What is the difference between Node.js and other server-side languages like PHP or Ruby?
#### Example
```


```
### 16. How do you manage dependencies in Node.js?
#### Example
```


```
### 17. Can you explain the concept of event-driven programming in Node.js?
#### Example
```


```
### 18. What is the role of the package.json file in Node.js?
#### Example
```


```
### 19. How do you implement authentication and authorization in Node.js?
#### Example
```


```
### 20. Can you explain the difference between spawn and exec in Node.js?
#### Example
```


```
### 21. How do you implement file uploading in Node.js?
#### Example
```


```
### 22. What is the role of middleware in Express.js?
#### Example
```


```
### 23. How do you handle file I/O operations in Node.js?
#### Example
```


```
### 24. How do you deploy a Node.js application to a production environment?
#### Example
```


```
### 25. What is the role of the Node.js module system?
#### Example
```


```
### 26. How do you handle database operations in Node.js?
#### Example
```


```
### 27. What is the role of the Node.js event loop?
#### Example
```


```
### 28. Can you explain the concept of non-blocking I/O in Node.js?
#### Example
```


```
### 29. How do you handle concurrency in Node.js?
#### Example
```


```
### 30. What is the difference between HTTP and HTTPS in Node.js?
#### Example
```


```
### 31. Can you explain the role of the cluster module in Node.js?
#### Example
```


```
### 32. How do you handle cross-site scripting (XSS) attacks in Node.js?
#### Example
```


```
### 33. How do you handle cross-site request forgery (CSRF) attacks in Node.js?
#### Example
```


```
### 34. Can you explain the role of the Node.js REPL (Read-Eval-Print Loop)?
#### Example
```


```
### 35. How do you handle caching in Node.js?
#### Example
```


```
### 36. How do you use the Node.js crypto module?
#### Example
```


```
### 37. Can you explain the concept of middleware chaining in Express.js?
#### Example
```


```
### 38. How do you use templates in Node.js?
#### Example
```


```
### 39. Can you explain the concept of blocking I/O in Node.js?
#### Example
```


```
### 40. How do you implement real-time communication in Node.js?
#### Example
```


```
### 41. Can you explain the role of the Node.js Buffer class?
#### Example
```


```
### 42. How do you implement pagination in Node.js?
#### Example
```


```
### 43. How do you use the Node.js child_process module?
#### Example
```


```
### 44. Can you explain the concept of garbage collection in Node.js?
#### Example
```


```
### 45. How do you use the Node.js URL module?
#### Example
```


```
### 46. How do you use the Node.js querystring module?
#### Example
```


```
### 47. How do you handle routing in Node.js?
#### Example
```


```
### 48. How do you implement server-side rendering in Node.js?
#### Example
```


```
### 49. Can you explain the role of the Node.js console object
#### Example
```


```
### 50. How do you implement web sockets in Node.js?
#### Example
```


```
### 51. Can you explain the concept of middleware error handling in Express.js?
#### Example
```


```
### 52. How do you use the Node.js fs module?
#### Example
```


```
### 53. How do you implement authentication with JSON Web Tokens (JWT) in Node.js?
#### Example
```


```
### 54. Can you explain the role of the Node.js process object?
#### Example
```


```
### 55. How do you use the Node.js path module?
#### Example
```


```
### 56. How do you use the Node.js os module?
#### Example
```


```
### 57. Can you explain the concept of streaming in Node.js?
#### Example
```


```
### 58. How do you implement rate limiting in Node.js?
#### Example
```


```
### 59. How do you use the Node.js readline module?
#### Example
```


```
### 60. Can you explain the role of the Node.js http module?
#### Example
```


```
### 61. How do you use the Node.js request module?
#### Example
```


```
### 62. How do you use the Node.js response module?
#### Example
```


```
### 63. Can you explain the role of the Node.js timers module?
#### Example
```


```
### 64. How do you implement a RESTful API in Node.js?
#### Example
```


```
### 65. Can you explain the concept of web hooks in Node.js?
#### Example
```


```
### 66. How do you use the Node.js net module?
#### Example
```


```
### 67. How do you implement server-side caching in Node.js?
#### Example
```


```
### 68. Can you explain the concept of serverless architecture in Node.js?
#### Example
```


```
### 69. How do you use the Node.js zlib module?
#### Example
```


```
### 70. Can you explain the role of the Node.js assert module?
#### Example
```


```
### 71. How do you use the Node.js crypto module to hash passwords?
#### Example
```


```
### 72. How do you implement input validation in Node.js?
#### Example
```


```
### 73. Can you explain the role of the Node.js util module?
#### Example
```


```
### 74. How do you implement pagination with cursor-based pagination in Node.js?
#### Example
```


```
### 75. How do you implement internationalization (i18n) in Node.js?
#### Example
```


```
### 76. Can you explain the role of the Node.js http2 module?
#### Example
```


```
### 77. How do you implement server-side events (SSE) in Node.js?
#### Example
```


```
### 78. How do you use the Node.js cluster module to create worker processes?
#### Example
```


```
### 79. Can you explain the role of the Node.js url module?
#### Example
```


```
### 80. How do you use the Node.js cluster module to manage worker processes?
#### Example
```


```
### 81. How do you implement a job queue in Node.js?
#### Example
```


```
### 82. Can you explain the role of the Node.js punycode module?
#### Example
```


```
### 83. How do you use the Node.js request module to make HTTP requests?
#### Example
```


```
### 84. How do you use the Node.js body-parser middleware to parse request bodies?
#### Example
```


```
### 85. Can you explain the role of the Node.js url-join module?
#### Example
```


```
### 86. How do you implement server-side caching with Redis in Node.js?
#### Example
```


```
### 87. How do you use the Node.js winston module for logging?
#### Example
```


```
### 88. Can you explain the role of the Node.js cookie-parser middleware?
#### Example
```


```
### 89. How do you implement server-side rendering with React in Node.js?
#### Example
```


```
### 90. Can you explain the role of the Node.js dns module?
#### Example
```


```
### 91. How do you use the Node.js helmet middleware for security?
#### Example
```


```
### 92. How do you implement file downloading in Node.js?
#### Example
```


```
### 93. Can you explain the role of the Node.js querymen module?
#### Example
```


```
### 94. How do you use the Node.js multer middleware for handling file uploads?
#### Example
```


```
### 95. How do you implement web scraping in Node.js?
#### Example
```


```
### 96. Can you explain the role of the Node.js serve-favicon middleware?
#### Example
```


```
### 97. How do you use the Node.js mongoose module for working with MongoDB?
#### Example
```


```
### 98. How do you implement a cron job in Node.js?
#### Example
```


```
### 99. Can you explain the role of the Node.js debug module?
#### Example
```


```
### 100 How do you use the Node.js pino module for logging?
#### Example
```


```
### 101 How do you implement rate limiting with Redis in Node.js?
#### Example
```


```
### 102 Can you explain the role of the Node.js cors middleware?
#### Example
```


```
### 103 How do you use the Node.js express-validator middleware for input validation?
#### Example
```


```
### 104 How do you implement error handling with the Node.js errorhandler middleware?
#### Example
```


```
### 105 Can you explain the role of the Node.js formidable module for handling file uploads?
#### Example
```


```
### 106 How do you use the Node.js helmet-csp middleware for content security policy?
#### Example
```


```
### 107 How do you implement server-side rendering with Vue.js in Node.js?
#### Example
```


```
### 108 Can you explain the role of the Node.js jwt-simple module for working with JWTs?
#### Example
```


```
### 109 How do you use the Node.js node-cron module for scheduling jobs?
#### Example
```


```