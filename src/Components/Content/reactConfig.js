const reactConfig = [
    {
        title: "Introduction to React",
        content: "React is a popular JavaScript library for building user interfaces. It uses a component-based approach to create reusable UI elements. Here's an example of a basic React component:",
        code: `import React from 'react';
  
  const HelloWorld = () => {
    return <h1>Hello, World!</h1>;
  };
  
  export default HelloWorld;`
    },
    {
        title: "JSX (JavaScript XML)",
        content: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It is used to describe the structure and appearance of React components. Here's an example of using JSX in a React component:",
        code: `import React from 'react';
  
  const Greeting = () => {
    return <h1>Hello, <span className="name">John</span>!</h1>;
  };
  
  export default Greeting;`
    },
    {
        title: "Components and Props",
        content: "Components are the building blocks of React applications. They can be reusable and accept inputs called props. Here's an example of a component that accepts and displays a prop:",
        code: `import React from 'react';
  
  const WelcomeMessage = (props) => {
    return <h1>Welcome, {props.name}!</h1>;
  };
  
  export default WelcomeMessage;`
    },
    {
        title: "State and Lifecycle",
        content: "State allows React components to store and manage data that can change over time. Lifecycle methods enable components to perform actions at different stages of their lifecycle. Here's an example of a component with state and lifecycle methods:",
        code: `import React, { Component } from 'react';
  
  class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    componentDidMount() {
      this.timerID = setInterval(() => {
        this.setState((prevState) => ({
          seconds: prevState.seconds + 1
        }));
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    render() {
      return <div>Seconds: {this.state.seconds}</div>;
    }
  }
  
  export default Timer;`
    },
    {
        title: "Handling Events",
        content: "React provides a convenient way to handle events within components. You can define event handlers as functions and attach them to specific elements. Here's an example of handling a button click event in React:",
        code: `import React, { useState } from 'react';
  
  const ButtonComponent = () => {
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <button onClick={handleClick}>Click me</button>
        <p>Count: {count}</p>
      </div>
    );
  };
  
  export default ButtonComponent;`
    },
    {
        title: "Conditional Rendering",
        content: "Conditional rendering allows you to display different components or elements based on certain conditions. You can use conditional statements or ternary operators to conditionally render content. Here's an example of conditional rendering in React:",
        code: `import React from 'react';
  
  const UserMessage = ({ isLoggedIn }) => {
    return isLoggedIn ? (
      <p>Welcome back, User!</p>
    ) : (
      <p>Please log in to continue.</p>
    );
  };
  
  export default UserMessage;`
    },
    {
        title: "Lists and Keys",
        content: "Lists are commonly used in React to render multiple elements dynamically. Keys are used to uniquely identify elements within a list, enabling React to efficiently update and re-render components. Here's an example of rendering a list with keys in React:",
        code: `import React from 'react';
  
  const UserList = ({ users }) => {
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  };
  
  export default UserList;`
    },
    {
        title: "Forms and Controlled Components",
        content: "In React, form inputs can be managed as controlled components, where their value is controlled by React state. This allows React to handle form submission and user input. Here's an example of a controlled input in a form:",
        code: `import React, { useState } from 'react';
  
  const FormComponent = () => {
    const [name, setName] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission
    };
  
    const handleChange = (event) => {
      setName(event.target.value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default FormComponent;`
    },
    {
        title: "React Router",
        content: "React Router is a popular library for handling routing in React applications. It allows you to create multiple pages and navigate between them without reloading the entire page. Here's an example of using React Router:",
        code: `import React from 'react';
  import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
  
  const Home = () => <h1>Home</h1>;
  const About = () => <h1>About</h1>;
  
  const App = () => {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
  
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    );
  };
  
  export default App;`
    },
];

export default reactConfig;
