# Background picture web
	https://www.pexels.com/search/weather/
# weather api
	https://openweathermap.org/weather-conditions
# weather icons
	https://github.com/erikflowers/weather-icons

##Addition implementation

	•	Responsive to other devices
	•	Present day weather tile plus other tile for the next 7 days !!
	•	Change back ground base on weather search !!
	•	Change submit button
	•	Option to switch between c/f/k
	- does error message work if one field is left out ??


# React App Code Reviewal 



## Form component 

*Code Structure Explanation*
	
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

- What is a stateless (function) component? Why?
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
	- 
- What is the Arrow Function?

- How does the className="container" works?

- What are forms and its attributes?

- Leaarning about States and Props?

- Learn about input and its attributes?

- Learn about button and its attributes?

- **DIV** vs. **React.Fragment** ??
	 

## weather.componment 

		what is a stateless functional component?

		Creating regular function 


## App.js (Root Component) 
	 - root component