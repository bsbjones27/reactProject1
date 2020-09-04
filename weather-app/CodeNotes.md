# Background picture web
	- https://www.pexels.com/search/weather/
# weather api
	- https://openweathermap.org/weather-conditions
# weather icons
	- https://github.com/erikflowers/weather-icons



## Addition implementation for future

	- using font awesome icon
	- Responsive to other devices
	- Present day weather tile plus other tile for the next 7 days !!
	- Change back ground base on weather search !!
	- Change submit button
	- Option to switch between c/f/k
	- does error message work if one field is left out ??


# React App Code Reviewal 

## Form component 

*Code Structure Explanation*
	
- Need Node install for React Project to work
	- npm install -g create-react-app
	- npx create-react-app "name"
	- npm start, this start web server for react (localhost:3000 (default for react))
- This Form Component is responsible for the user input to the web application.
- The Component is use to search the weather application base on location input by user.
- use of a functional component for this form.
- An error message is implemented if user does not enter anything in the fields.
- Input fields are wrap in a **form** tag with an onSubmit attribute.
- The form is wrap in a single row container and is made up of 3 columns.
	- Note each column has its own **div** tag.
	- Uses the **Bootstrap Grid System template**
	- Row container has 2 **input** tag column (City and Country) and a column for the button. 
	

*Description of the Code Concept used*

- What is a stateless (function) component? 
	- https://programmingwithmosh.com/javascript/stateful-stateless-components-react/
	- This type of Component is a plain **JavaScript Function** which takes props as an argument and returns a react element.
	- This type of Component has not state. (can not use *this.state*)
	- This type of Component does not has a Component LifeCycle.
		- Unable to use different method associated with **Mount, Update, and Unmount.**
		- Can not use Hooks.
	- Return of React Element
		- A React Element has many properties but the main 2 properties are:
			- Type(string)
			- Props(object)
 
- What are the Arrow Function?
	- https://www.w3schools.com/js/js_arrow_function.asp
	- The Concept of Arrow Functions were introduce in ES6.
	- The Arrow Function is a very simple and concise syntax for creating functions that's often better than Function Expressions.
	- Syntax: **const function = (props) => { }.**

- Difference between normal function and arrow function?
	- https://levelup.gitconnected.com/arrow-function-vs-regular-function-in-javascript-b6337fb87032
	- https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
	- Regular functions created using function declarations or expressions are constructible and callable. Since regular functions. are constructible, they can be called using the new keyword. 
	- The arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions.

- How does the className="container" works?
	- https://www.pair.com/support/kb/understanding-bootstraps-grid-system/
	- https://react-bootstrap.github.io/layout/grid/
	- This mainly relate to the Bootstrap's Grid System (BGS)
	- The BGS is made up of containers, rows, and column, all of which are used to define the site's layout.

- What are forms and its attributes?
	- https://reactjs.org/docs/forms.html
	- https://www.w3schools.com/react/react_forms.asp
	- https://www.w3schools.com/tags/tag_form.asp
	- Handling forms is about how you handle the data when it changes value or gets submitted. 
	- In HTML, form data is usually handled by the DOM. In React, form data is usually handled by the components. 
	- When the data is handled by the components, all the data is stored in the component state .

- Learning about React States and Props?
	- **States**
		- https://www.w3schools.com/react/react_state.asp
		- https://reactjs.org/tutorial/tutorial.html
		- https://reactjs.org/docs/state-and-lifecycle.html
		- The State of a component is an object that holds some information that may change over the lifetime of the component.
		- React components has a built-in state object. The state object is where you store property values that belongs to the component. 
		- When the state object changes, the component re-renders.
	- **Props**
		- https://reactjs.org/docs/components-and-props.html
		- https://www.w3schools.com/react/react_props.asp
		- https://learn.co/lessons/react-props
		- Props are immutable (read-only) data used to make React components �talk� to each other.
		- **Props** is a special keyword in React, which stands for properties and is being used for passing data from one component to another.

- Learn about input and its attributes?
	- https://www.w3schools.com/tags/tag_input.asp
	- https://www.w3schools.com/html/html_form_attributes.asp
	- The **input** tag specifies an input field where the user can enter data. 
	- The **input** element is the most important form element. 
	- The **input** element can be displayed in several ways, depending on the type attribute.

- Learn about button and its attributes?
	- https://www.w3schools.com/tags/tag_button.asp
	- https://www.w3schools.com/css/css3_buttons.asp
	- The HTML button element represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.


- **DIV** vs. **React.Fragment** ?
	- https://www.barrymichaeldoyle.com/fragment/
	- https://www.barrymichaeldoyle.com/fragment/
	- https://getstream.io/blog/react-fragments/
	- https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html

- **DIV** vs. **span** ?
	- https://www.tutorialspoint.com/What-is-the-difference-between-HTML-tags-div-and-span
	- https://htmldog.com/guides/html/intermediate/spandiv/#:~:text=The%20difference%20between%20span%20and,group%20larger%20chunks%20of%20code.
	- Span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph)
	- A div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.
	 

## Weather Componment 
	
*Code Structure Explanation*

- The file is used to display the result from the search input
- the component will render the weather Icon, Area of the weather, and the temperatures.
- The File contain a Functional Component and another  function to calculate the range of temperature 

		

## App.js (Root Component) 

- This is consider the root component and is the parent component of the application

*Code Structure Explanation*

- importing different Files, installations and modules
	- import weather icon from website to display icon display
	- BootStrap was used to improve the view of the UI components
	- The  weather and Form Component import into the root component to render

- What are API?
	- Application Program Interface (API) is a set of procedures and tools for building software applications.
	
- What is an API call?
	- The moment you add an endpoint to a URL and send a request to a server, this is what counts as making an API call
	- API Doc for websites normally have an example for data fetch syntax with api calls.

- API Fetch??

- The Class App Component
	- Constructor
		- Super
		- this.state
		- this.weather

	- calculate temperature to be in Fahrenheit as API data is represented in Celcius

	- This section is being used to determine the weather icon to use.
		- The range from weather api contain different symbols for different

	- Making the API call
		- fetching api data specifying the data needed along with the APi Key stored

	- The Render method is used to render the different component
		- As the App.js is the root component it will contain other component to render
		- The Form Component and The Weather Component
		- These components contain props to be passed into the component to render and display day on the view.