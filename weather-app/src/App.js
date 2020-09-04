// import react modules to the project
import React from 'react';
import './App.css';

// linking different files and installations
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //need to use npm to install bootstrap
import Weather from './app_component/weather.component';
import Form from './app_component/form.component';

/*
Current Data
 - api call => api.openweathermap.org/data/2.5/weather?q=London,uk
*/

const API_key = "a49f163dd702125a1cf94ae4889b0662";

// app component 
class App extends React.Component{
    constructor() {
        super();
        // calling state
        this.state = {
            city: undefined,
            country: undefined,
            icon: undefined,
            main: undefined,
            celsius: undefined,
            temp_max: undefined,
            temp_min: undefined,
            description: "",
            error:false

        };

        this.weatherIcon = {

            Thunderstorm: "wi-thunderstorm",
            Drizzle: "wi-sleet",
            Rain: "wi-storm-showers",
            Snow: "wi-snow",
            Atmosphere: "wi-fog",
            Clear: "wi-day-sunny",
            Clouds: "wi-day-fog"
        }
    }

    // calculate the temperature as integer for Fahrenheit
    calCelsius(temp) {
        let cell = Math.floor((temp - 273.15)*9/5 + 32);
        return cell; // this is in fahrenheit, need to change variable name.

    } 

    //create a method: use api range on weather  from api website to get specific weather icon
    get_WeatherIcon(icons, rangeId) {
        switch (true) {
            case rangeId >= 200 && rangeId <= 232:
                this.setState({ icon: this.weatherIcon.Thunderstorm });
                break;
            case rangeId >= 300 && rangeId <= 321:
                this.setState({ icon: this.weatherIcon.Drizzle });
                break;
            case rangeId >= 500 && rangeId <= 531:
                this.setState({ icon: this.weatherIcon.Rain });
                break;
            case rangeId >= 600 && rangeId <= 622:
                this.setState({ icon: this.weatherIcon.Snow});
                break;
            case rangeId >= 701 && rangeId <= 781:
                this.setState({ icon: this.weatherIcon.Atmosphere });
                break;
            case rangeId === 800:
                this.setState({ icon: this.weatherIcon.Clear });
                break;
            case rangeId >=801 && rangeId <= 804:
                this.setState({ icon: this.weatherIcon.Clouds });
                break;
            default:
                this.setState({ icon: this.weatherIcon.Clouds });

        }
    }

    // creating a method to fetch data from the api call
    getWeather = async (e) => {

        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        if (city && country) {
            // calling the API if inputs have values
            const api_call = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`
            );
            //convert data from api to json format
            const response = await api_call.json();

            console.log(response);

            //getting data from api
            // updates variable from undefined in the 'this.state' method
            this.setState({
                city: `${ response.name },${response.sys.country}`,
                celsius: this.calCelsius(response.main.temp),
                temp_max: this.calCelsius(response.main.temp_max),
                temp_min: this.calCelsius(response.main.temp_min),
                description: response.weather[0].description,

            });

            this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);

        } else {
            this.setState({error: true})
        }
    };

    render() {
        // returning jsx code
        return (
            <div className="App">
                <Form loadweather={this.getWeather} error={this.state.error}/>
                <Weather
                    city={this.state.city}
                    country={this.state.country}
                    temp_celsius={this.state.celsius}
                    temp_max={this.state.temp_max}
                    temp_min={this.state.temp_min}
                    description={this.state.description}
                    weatherIcon={this.state.icon}

                />
            </div>
        );
    }
}

export default App;
