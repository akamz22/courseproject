const pythonConfig = [
    {
        title: "Introduction to Python",
        content: "Python is a popular programming language known for its simplicity and readability. It provides a wide range of libraries and frameworks for various applications. Here's a simple 'Hello, World!' example in Python:",
        code: `print("Hello, World!")`
    },
    {
        title: "Variables and Data Types",
        content: "Variables are used to store data in Python. Python supports different data types, including numeric, string, boolean, list, tuple, dictionary, and more. Here's an example of declaring and using variables in Python:",
        code: `name  = "John Doe"
  age = 25
  salary = 50000.0
  is_employed = True`
    },
    {
        title: "Control Flow Statements",
        content: "Control flow statements in Python allow you to control the flow of program execution based on conditions. They include if-else statements, loops (such as for and while), and conditional expressions. Here's an example of a for loop in Python:",
        code: `for i in range(1, 6):
      print("Iteration:", i)`
    },
    {
        title: "Lists and Tuples",
        content: "Lists and tuples are used to store multiple values in Python. Lists are mutable, meaning you can modify their elements, while tuples are immutable. Here's an example of creating and manipulating lists and tuples in Python:",
        code: `fruits = ['apple', 'banana', 'orange']
  numbers = (1, 2, 3, 4, 5)
  
  fruits.append('grape')
  numbers = numbers + (6,)
  
  print(fruits)   # Output: ['apple', 'banana', 'orange', 'grape']
  print(numbers)  # Output: (1, 2, 3, 4, 5, 6)`
    },
    {
        title: "Functions",
        content: "Functions in Python allow you to encapsulate reusable blocks of code. They help in modularizing your program and promoting code reusability. Here's an example of defining and calling a function in Python:",
        code: `def greet(name):
      print("Hello, " + name + "!")
  
  greet("Alice")   # Output: Hello, Alice!
  greet("Bob")     # Output: Hello, Bob!`
    },
    {
        title: "Exception Handling",
        content: "Exception handling in Python allows you to handle and manage errors or exceptional conditions that may occur during program execution. It helps in making your code more robust. Here's an example of exception handling in Python:",
        code: `try:
      result = 10 / 0  # Division by zero
      print("Result:", result)
  except ZeroDivisionError as e:
      print("An error occurred:", str(e))`
    },
    {
        title: "File Handling",
        content: "File handling in Python allows you to read from and write to files. It provides various methods and modes to perform file-related operations. Here's an example of reading from a text file in Python:",
        code: `with open("sample.txt", "r") as file:
      lines = file.readlines()
  
  for line in lines:
      print(line.strip())`
    },
    {
        title: "Object-Oriented Programming",
        content: "Python supports object-oriented programming (OOP) concepts like classes, objects, inheritance, polymorphism, and encapsulation. It allows you to create and work with objects to build complex systems. Here's an example of defining a class and creating objects in Python:",
        code: `class Circle:
      def __init__(self, radius):
          self.radius = radius
  
      def calculate_area(self):
          return 3.14 * self.radius ** 2
  
  circle1 = Circle(5)
  circle2 = Circle(3)
  
  print("Area of circle1:", circle1.calculate_area())  # Output: Area of circle1: 78.5
  print("Area of circle2:", circle2.calculate_area())  # Output: Area of circle2: 28.26`
    },
    {
        title: "Modules and Packages",
        content: "Modules and packages in Python allow you to organize your code into separate files and directories for better code management and reusability. They help in creating modular and scalable applications. Here's an example of importing and using a module in Python:",
        code: `import math
  
  print("Square root of 16:", math.sqrt(16))  # Output: Square root of 16: 4.0`
    },
    {
        title: "Working with APIs",
        content: "Python provides excellent support for working with APIs (Application Programming Interfaces). It allows you to make HTTP requests, handle responses, and interact with web services. Here's an example of using the requests library to fetch data from an API in Python:",
        code: `import requests
  
  response = requests.get("https://api.example.com/data")
  data = response.json()
  
  print("Response:", data)`
    },
    // Add more topics with their respective titles, content, and code
    // ...
];

export default pythonConfig;
