const javaConfig = [
    {
        title: "Introduction to Java",
        content: "Java is a widely used programming language that follows the object-oriented programming (OOP) paradigm. It provides a robust and secure platform for developing various applications.",
        code: `public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello, World!");
    }
  }`
    },
    {
        title: "Variables and Data Types",
        content: "Variables are used to store data in Java, and each variable has a specific data type. Java supports various data types, including primitive types and reference types.",
        code: `int age = 25;
  double salary = 50000.0;
  String name = "John Doe";`
    },
    {
        title: "Control Flow Statements",
        content: "Control flow statements in Java allow you to control the execution flow of your program based on certain conditions. They include if-else statements, loops (such as for, while, and do-while), and switch statements.",
        code: `for (int i = 1; i <= 5; i++) {
    System.out.println("Iteration: " + i);
  }`
    },
    {
        title: "Arrays and Collections",
        content: "Arrays and collections are used to store multiple values in Java. Arrays are fixed in size, while collections provide dynamic resizing.",
        code: `int[] numbers = {1, 2, 3, 4, 5};
  
  List<String> names = new ArrayList<>();
  names.add("Alice");
  names.add("Bob");
  names.add("Charlie");`
    },
    {
        title: "Object-Oriented Programming",
        content: "Java is an object-oriented programming language, which means it emphasizes the use of objects and classes to structure code. It supports concepts like inheritance, polymorphism, encapsulation, and abstraction.",
        code: `class Animal {
    void sound() {
      System.out.println("The animal makes a sound.");
    }
  }
  
  class Dog extends Animal {
    void sound() {
      System.out.println("The dog barks.");
    }
  }
  
  Animal animal = new Animal();
  Dog dog = new Dog();
  
  animal.sound(); // Output: The animal makes a sound.
  dog.sound();    // Output: The dog barks.`
    },
    {
        title: "Exception Handling",
        content: "Exception handling is used to handle and manage errors or exceptional conditions that may occur during the execution of a program. Java provides a built-in mechanism to handle exceptions using try-catch blocks.",
        code: `try {
    int result = 10 / 0; // Division by zero
    System.out.println("Result: " + result);
  } catch (ArithmeticException e) {
    System.out.println("An error occurred: " + e.getMessage());
  }`
    },
    {
        title: "File Handling",
        content: "File handling in Java allows you to read from and write to files. It provides classes and methods for performing various file operations.",
        code: `import java.io.File;
  import java.io.FileNotFoundException;
  import java.util.Scanner;
  
  public class FileReader {
    public static void main(String[] args) {
      try {
        File file = new File("sample.txt");
        Scanner scanner = new Scanner(file);
  
        while (scanner.hasNextLine()) {
          String line = scanner.nextLine();
          System.out.println(line);
        }
  
        scanner.close();
      } catch (FileNotFoundException e) {
        System.out.println("File not found: " + e.getMessage());
      }
    }
  }`
    },
    {
        title: "Multithreading",
        content: "Multithreading allows concurrent execution of multiple threads within a single program. Threads are lightweight processes that can run concurrently and independently.",
        code: `class MyThread extends Thread {
    public void run() {
      for (int i = 1; i <= 5; i++) {
        System.out.println("Thread: " + i);
      }
    }
  }
  
  public class ThreadExample {
    public static void main(String[] args) {
      MyThread thread = new MyThread();
      thread.start();
    }
  }`
    },
    {
        title: "Networking",
        content: "Networking in Java allows you to develop network applications and communicate with remote systems over the internet. Java provides classes and APIs for networking operations.",
        code: `// Server side
  import java.net.*;
  import java.io.*;
  
  public class Server {
    public static void main(String[] args) throws IOException {
      ServerSocket serverSocket = new ServerSocket(1234);
      Socket socket = serverSocket.accept();
  
      PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
      out.println("Hello, client!");
  
      serverSocket.close();
    }
  }
  
  // Client side
  import java.net.*;
  import java.io.*;
  
  public class Client {
    public static void main(String[] args) throws IOException {
      Socket socket = new Socket("localhost", 1234);
  
      BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
      String message = in.readLine();
      System.out.println("Message from server: " + message);
  
      socket.close();
    }
  }`
    },
    {
        title: "Database Connectivity",
        content: "Java provides support for connecting and interacting with databases using JDBC (Java Database Connectivity). JDBC allows you to execute SQL queries, retrieve and manipulate data, and perform database operations.",
        code: `import java.sql.*;
  
  public class DatabaseExample {
    public static void main(String[] args) {
      try {
        Class.forName("com.mysql.jdbc.Driver");
        Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase", "username", "password");
  
        Statement statement = connection.createStatement();
        ResultSet resultSet = statement.executeQuery("SELECT * FROM customers");
  
        while (resultSet.next()) {
          String name = resultSet.getString("name");
          int age = resultSet.getInt("age");
          System.out.println("Name: " + name + ", Age: " + age);
        }
  
        connection.close();
      } catch (Exception e) {
        System.out.println("An error occurred: " + e.getMessage());
      }
    }
  }`
    },
];

export default javaConfig;
