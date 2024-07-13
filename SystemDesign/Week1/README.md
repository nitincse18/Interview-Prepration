# Week 1: Fundamentals and Basics
## Day 1-2: Basic Concepts of System Design

## Scalability:
- Example: Horizontal Scaling in MongoDB:
Use MongoDB Atlas to create a sharded cluster.
Distribute data across multiple shards to handle increased read/write operations.
Configure each shard to replicate data for high availability.
Latency:

- Example: Reducing Latency in a React Application:
Use code-splitting and lazy loading to reduce initial load time.
Optimize component rendering and avoid unnecessary re-renders using React’s useMemo and useCallback.
Throughput:

- Example: Increasing Throughput in an Express.js Server:
Use Node.js clustering to take advantage of multi-core systems.
Implement load balancing with NGINX to distribute incoming requests across multiple instances.
Consistency:

- Example: Ensuring Consistency in MongoDB Transactions:
Use MongoDB's multi-document ACID transactions to ensure consistency across multiple operations.
Example code:

```javascript
const session = client.startSession();
session.startTransaction();
try {
  await ordersCollection.insertOne({ /* order data */ }, { session });
  await inventoryCollection.updateOne({ /* query */ }, { $inc: { stock: -1 } }, { session });
  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
} finally {
  session.endSession();
}
```
## Availability:
Example: High Availability with MongoDB Replica Sets:
Set up a MongoDB replica set with one primary and multiple secondary nodes.
Example configuration:
```javascript
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "mongo1:27017" },
    { _id: 1, host: "mongo2:27017" },
    { _id: 2, host: "mongo3:27017" }
  ]
});
```
## Partition Tolerance:
Example: Handling Network Partitions in a Distributed MERN Application:
Use RabbitMQ or Kafka for reliable message queuing and event streaming to ensure system operability during partitions.

## Practice Questions:
Explain the differences between vertical and horizontal scaling.
How do you ensure consistency in a distributed system?

# Day 3-4: Database Concepts

## SQL vs NoSQL:

Example: MongoDB for NoSQL:
Store unstructured data, such as user profiles or product catalog, in MongoDB.
Example:
```javascript
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});
const User = mongoose.model('User', userSchema);
```

## ACID Properties:
Example: Transactions in MongoDB:
Ensure ACID properties for a sequence of operations.
Example:
```javascript
const session = await mongoose.startSession();
session.startTransaction();
try {
  await User.create([{ name: 'Alice', email: 'alice@example.com' }], { session });
  await Order.create([{ productId: '123', userId: '456' }], { session });
  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
} finally {
  session.endSession();
}
```

## Sharding:
Example: Sharding in MongoDB Atlas:
Enable sharding for a collection to distribute data across multiple shards.
Example:
```javascript
await db.admin().command({ enableSharding: 'myDatabase' });
await db.admin().command({ shardCollection: 'myDatabase.myCollection', key: { _id: 'hashed' } });
``` 

## Indexing:
Example: Creating Indexes in MongoDB:
Improve query performance with indexes.
Example:
```javascript
await db.collection('users').createIndex({ email: 1 });
```

## Replication:
Example: Replica Sets in MongoDB:
Configure replica sets for high availability and fault tolerance.
Example configuration as shown above.

## Practice Questions:
Compare and contrast SQL and NoSQL databases.
What is database sharding and when should it be used?

# Day 5-7: Caching and Networking

## Caching:
Example: Using Redis with Node.js:
Cache user session data or frequently accessed data.
Example:
```javascript
Copy code
const redis = require('redis');
const client = redis.createClient();
client.set('user:123', JSON.stringify(userData));
client.get('user:123', (err, data) => {
  console.log(JSON.parse(data));
});
```

## CDNs:
Example: Using a CDN with a React Application:
Host static assets on a CDN for faster delivery.
Example: Upload assets to a service like AWS CloudFront or Cloudflare.

## DNS:
Example: Configuring DNS for a MERN Application:
Use a DNS provider like Route 53 to map domain names to IP addresses of your servers.

## Load Balancers:
Example: Load Balancing with NGINX for Node.js:
Distribute traffic across multiple Node.js instances.

Example configuration:
```nginx
upstream myapp {
  server 127.0.0.1:3000;
  server 127.0.0.1:3001;
}
server {
  listen 80;
  location / {
    proxy_pass http://myapp;
  }
}
```
## HTTP/HTTPS:

Example: Enforcing HTTPS in Express.js:
Redirect HTTP requests to HTTPS.
Example:
```javascript
const express = require('express');
const app = express();
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});

```
## REST:

Example: Building a REST API with Express.js:
Define endpoints for CRUD operations.
Example:
```javascript
Copy code
app.get('/api/users', (req, res) => { /* Fetch users */ });
app.post('/api/users', (req, res) => { /* Create user */ });
app.put('/api/users/:id', (req, res) => { /* Update user */ });
app.delete('/api/users/:id', (req, res) => { /* Delete user */ });
```
## WebSockets:

Example: Real-time Communication with Socket.io:
Implement a chat application.
Example:
```javascript
const io = require('socket.io')(server);
io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    io.emit('message', msg);
  });
});
```
## Practice Questions:

How does a CDN improve website performance?
Explain the difference between HTTP and WebSockets.