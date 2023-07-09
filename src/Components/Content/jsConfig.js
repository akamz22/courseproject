const jsConfig = [
    {
      title: "Introduction to JavaScript",
      content: "JavaScript is a popular programming language used for creating interactive and dynamic web applications. It runs on the client-side and enables the manipulation of web page elements. Here's an example of displaying 'Hello, World!' using JavaScript:",
      code: `console.log("Hello, World!");`
    },
    {
      title: "Variables and Data Types",
      content: "JavaScript variables are used to store and manipulate data. JavaScript is a dynamically-typed language, which means variables can hold values of different data types. Here's an example of declaring and using variables in JavaScript:",
      code: `let name = "John Doe";
  let age = 25;
  const PI = 3.14;
  let isEmployed = true;`
    },
    {
      title: "Control Flow Statements",
      content: "Control flow statements in JavaScript allow you to control the execution flow based on certain conditions. They include if-else statements, loops (such as for and while), and switch statements. Here's an example of a for loop in JavaScript:",
      code: `for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
  }`
    },
    {
      title: "Arrays and Objects",
      content: "Arrays and objects are commonly used data structures in JavaScript. Arrays allow you to store multiple values, while objects store key-value pairs. Here's an example of creating and accessing arrays and objects in JavaScript:",
      code: `let numbers = [1, 2, 3, 4, 5];
  let person = { name: "John Doe", age: 25, isEmployed: true };
  
  console.log(numbers[0]);        // Output: 1
  console.log(person.name);       // Output: John Doe`
    },
    {
      title: "Functions",
      content: "Functions in JavaScript allow you to group and execute blocks of code. They can be defined and called in various ways. Here's an example of defining and calling a function in JavaScript:",
      code: `function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Alice");   // Output: Hello, Alice!
  greet("Bob");     // Output: Hello, Bob!`
    },
    {
      title: "Exception Handling",
      content: "Exception handling in JavaScript allows you to catch and handle errors that may occur during program execution. It helps in managing and recovering from unexpected situations. Here's an example of exception handling in JavaScript:",
      code: `try {
    let result = 10 / 0;  // Division by zero
    console.log("Result:", result);
  } catch (error) {
    console.log("An error occurred:", error.message);
  }`
    },
    {
      title: "DOM Manipulation",
      content: "JavaScript interacts with the Document Object Model (DOM) to manipulate web page elements dynamically. It allows you to add, modify, or remove HTML content and respond to user actions. Here's an example of changing the text of an HTML element using JavaScript:",
      code: `let heading = document.getElementById("myHeading");
  heading.textContent = "New Heading";`
    },
    {
      title: "Asynchronous Programming",
      content: "JavaScript supports asynchronous programming, allowing you to perform tasks without blocking the main execution thread. Promises and async/await are commonly used for handling asynchronous operations. Here's an example of using async/await with a Promise in JavaScript:",
      code: `function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
  async function delayedGreetings() {
    await delay(2000);
    console.log("Hello after 2 seconds!");
  }
  
  delayedGreetings();`
    },
    {
      title: "AJAX and Fetch API",
      content: "JavaScript provides AJAX (Asynchronous JavaScript and XML) and the Fetch API for making HTTP requests to retrieve data from a server without reloading the entire page. Here's an example of using the Fetch API to fetch data from an API in JavaScript:",
      code: `fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log("Data:", data))
    .catch(error => console.log("An error occurred:", error));`
    },
    // Add more topics with their respective titles, content, and code
    // ...
  ];
  
  export default jsConfig;
  