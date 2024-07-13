# Plan to Prepare for System Design Interview

## Week 1: Fundamentals of System Design 
### Day 1-2: Basic Concepts of System Design

- Scalability:
    - Vertical Scaling: Enhancing the capacity of a single server by adding more resources (CPU, RAM, storage). Suitable for limited increase in load but has physical and cost limitations.
    - Horizontal Scaling: Adding more servers to distribute the load. More cost-effective and scalable, especially for large-scale applications.
- Latency: The delay before a transfer of data begins following an instruction for its transfer. Important to minimize for better user experience.
- Throughput: The amount of data processed in a given amount of time. Higher throughput indicates better performance.
- Consistency: Ensures that all nodes in a distributed system reflect the same data at the same time. Critical in financial systems where data accuracy is crucial.
- Availability: The system's ability to remain operational and accessible over a period of time. Measured by uptime percentages.
- Partition Tolerance: The system continues to operate despite network partitions that separate nodes from each other.
# Practice Questions



### Day 1-2: Scaling and Databases

#### Vertical vs Horizontal Scaling

Explain the differences between vertical and horizontal scaling.

#### Consistency in Distributed Systems

How do you ensure consistency in a distributed system?

#### Day 3-4: Database Concepts

##### SQL vs NoSQL

Compare and contrast SQL and NoSQL databases.

##### ACID Properties

Explain the ACID properties in database transactions.

##### BASE Properties

Explain the BASE properties in distributed systems.

##### Sharding

What is database sharding and when should it be used?

#### Day 5-7: Caching and Networking

##### Caching

How does caching improve website performance? Discuss Redis and Memcached.

##### CDNs and Load Balancers

Explain the role of CDNs and load balancers in improving website performance.

##### HTTP, HTTPS, REST, and WebSockets

Compare and contrast HTTP, HTTPS, REST, and WebSockets.

## - Details Study [Week 1](Week1/README.md)
## Week 2: Architecture and System Components 

### Day 8-9: Microservices vs Monolithic Architecture

#### Microservices

Discuss the advantages and disadvantages of microservices over monolithic architecture.

#### Service Discovery and API Gateway

Explain the concepts of service discovery and API gateway in a microservices architecture.

### Day 10-11: Message Queues and Event-driven Architecture

#### Message Queues

Describe the role of message queues in a microservices architecture.

#### Event-driven Architecture

What are the benefits of an event-driven architecture? Discuss CQRS.

### Day 12-14: Design Patterns and Distributed Systems

#### Design Patterns

Explain the Singleton, Factory, Observer, Strategy, and Proxy design patterns.

#### Distributed Systems

Discuss the CAP theorem and consensus algorithms in distributed systems.
## - Details Study [Week 2](Week2/README.md)

## Week 3: Real-world System Design

### Day 15-16: Case Studies

#### Twitter

How does Twitter handle the scalability of its feed service?

#### Instagram

Describe the data storage strategy of Instagram.

### Day 17-18: URL Shortening Service

#### Components

Design a URL shortening service with a focus on scalability.

#### Collision Handling

How would you handle collisions in the URL shortening service?

### Day 19-21: E-commerce System

#### Components

Design an e-commerce system with a focus on transaction handling.

#### Real-time Inventory Management

How would you ensure real-time inventory management?

## - Details Study [Week 3](Week3/README.md)

## Week 4: Mock Interviews and Advanced Topics

### Day 22-23: Social Media Platform

#### Components

Design a social media platform with a focus on the news feed.

#### Real-time Messaging

How would you implement real-time messaging in a social media app?

### Day 24-25: Ride-sharing Service

#### Components

Design a ride-sharing service focusing on real-time location tracking.

#### Surge Pricing

How would you handle surge pricing in a ride-sharing service?

### Day 26-27: Mock Interviews

Conduct mock interviews and practice different system design scenarios.

### Day 28-30: Revision and Final Preparation

Revise all key concepts covered over the past month and conduct a final mock interview.

## - Details Study [Week 4](Week4/README.md)
**