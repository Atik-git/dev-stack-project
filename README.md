Project Name: 
- Dev-Stack
Description: 
- A technology stack builder that allows users to explore different technologies and build their ideal development stack by selecting and managing technologies from various categories.

Technologies: React, Node.js, TypeScript, Tailwind CSS, react-toastify, Vite, React icons

Features:
- Here one can select different technologies
- Remove technologies from the stack
- view the technologies in the stack in a beautiful card format

Answers to some questions:
1. What is JSX, and why is it used in react?
   Ans: JSX is a javascript extensin that alows us write HTML like syntax in Javascript. And we use JSX in react.
2. What is the difference between props and state?
   Ans: Props are used to pass data from parent component to child component. State is used to update  , manage, store , and display data in a component.  
3. What does the useState hook do, and where did you use it in this project?
    Ans: Like normal javascript variables, if we want to display something in the webpage based on the change of the variable, we can not do it in react. So we use useState hook to to store and manage the data in a component. In this project, I used useState hook to store the selected technologies in the stack and update the stack when a technology is added or removed. 
4.  What does the useEffect hook do, and why did you need it to load the JSON data?
    Ans: The useEffect hook is used to perform side effects in a component, such as fetching data from an API or updating the DOM. In this project. 
5.  Why does every item in a .map() list need a unique key prop?
    Ans: Every item in a .map() list needs a unique key prop to help React identify which items have changed, been added, or removed. 
6.  What is conditional rendering? Show one place you used it (example: the empty stack message).
    Ans: Conditional rendering is a technique in React that allows us to render different components or elements based on conditions. In this project, I used conditional rendering to display a message when the stack is empty, indicating that no technologies have been selected yet.
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
    Ans: Data is passed from a parent component to a child component using props. The parent component can pass data as attributes to the child component, which can then access those values through the props object. To send data back from a child to a parent, we can use callback functions. The parent can define a function and pass it down to the child as a prop. The child can then call that function and pass data back to the parent when needed.