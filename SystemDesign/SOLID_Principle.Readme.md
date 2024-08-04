# The SOLID principles are a set of design principles that help developers create more maintainable and scalable software. These principles can be applied in any object-oriented programming language, including JavaScript. Here's an example of each SOLID principle in JavaScript:

## Single Responsibility Principle (SRP)
    A class should have only one reason to change, meaning it should only have one job or responsibility.

```javascript

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getUserDetails() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

class UserRepository {
  saveUser(user) {
    // Logic to save user to a database
  }
}

class UserNotifier {
  sendNotification(user, message) {
    // Logic to send notification to the user
  }
}
```

## Open/Closed Principle (OCP)
    Software entities should be open for extension but closed for modification.

```javascript

class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const shapes = [new Rectangle(2, 3), new Circle(5)];
const totalArea = shapes.reduce((sum, shape) => sum + shape.area(), 0);
console.log(totalArea);
```

## Liskov Substitution Principle (LSP)
    Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.

```javascript

class Bird {
  fly() {
    console.log("Flying");
  }
}

class Sparrow extends Bird {}

class Ostrich extends Bird {
  fly() {
    throw new Error("Ostriches can't fly");
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

const sparrow = new Sparrow();
makeBirdFly(sparrow); // Works fine

const ostrich = new Ostrich();
makeBirdFly(ostrich); // Throws error
```

## Interface Segregation Principle (ISP)
    Clients should not be forced to depend on interfaces they do not use.

```javascript

class Printer {
  print() {
    console.log("Printing");
  }
}

class Scanner {
  scan() {
    console.log("Scanning");
  }
}

class MultiFunctionDevice {
  constructor(printer, scanner) {
    this.printer = printer;
    this.scanner = scanner;
  }

  print() {
    this.printer.print();
  }

  scan() {
    this.scanner.scan();
  }
}

const printer = new Printer();
const scanner = new Scanner();
const multiFunctionDevice = new MultiFunctionDevice(printer, scanner);

multiFunctionDevice.print();
multiFunctionDevice.scan();
```


## Dependency Inversion Principle (DIP)
    High-level modules should not depend on low-level modules. Both should depend on abstractions.

```javascript

class Database {
  connect() {
    throw new Error("Method 'connect()' must be implemented.");
  }
}

class MySQLDatabase extends Database {
  connect() {
    console.log("Connecting to MySQL database");
  }
}

class MongoDBDatabase extends Database {
  connect() {
    console.log("Connecting to MongoDB database");
  }
}

class Application {
  constructor(database) {
    this.database = database;
  }

  start() {
    this.database.connect();
  }
}

const mySQLDatabase = new MySQLDatabase();
const app1 = new Application(mySQLDatabase);
app1.start();

const mongoDBDatabase = new MongoDBDatabase();
const app2 = new Application(mongoDBDatabase);
app2.start();
```