### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
 	* react is a js library used for building user interfaces. It allows reuseable components. 

- What is Babel?
	* Babel is a js compilier  that allows ECMAScript even if the current browser isn't supported 

- What is JSX?
	*  JSX is JS XML which allows HTML code to be written in JS

- How is a Component created in React?
	* can be created using function or class components. function components is JS that returns JSX while class components are JS classes that can be reused with render

- What are some difference between state and props?
	* state is used for managing internal data within a componennt.
	* props are used to pass data from parent component to child component 

- What does "downward data flow" refer to in React?
	* is the practice of passing data from parent to child

- What is a controlled component?
	*   is a react component that allows inputs and is updated through event handlers

- What is an uncontrolled component?
	* elements that rely on internal state or refs instead of a react statae 

- What is the purpose of the `key` prop when rendering a list of components?
	* used to give react a way to identify and track invididual elements 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
	* it can lead to issues when items are added, removed, or reordered  

- Describe useEffect.  What use cases is it used for in React components?
	* allows data fetching, dom manipulation in a react component 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
	* is a react hook used to create   

- When would you use a ref? When wouldn't you use one?
	* you use a ref when you need to access or manipulate  a dom element.  

- What is a custom hook in React? When would you want to write one?
	* a custom hook allows you to reuse logic 