// import react modules
import React from 'react';

// didnt use a class......instead uses a stateless functional component 
const Weather = (props) => {
    // return jsx
    return (
        <div className="container text-light">
            <div className="cards pt-4">
                <h1>{props.city}</h1>
                {/*specify top and bottom padding to these h5 tags*/}
                <h5 className="ph-4">
                    {/*(UI icon/ font-awe)adding icon and was imported from git hub*/}
                    <i className={`wi ${props.weatherIcon} display-1`}/>
                </h5>
                {/*display current temperature of the search location */}
                {props.temp_celsius ? (<h1 className="py-2">{props.temp_celsius}&deg;</h1>) : null}
 
                {/** show max and min function */}
                {minmaxTemp(props.temp_min, props.temp_max)}

                <h4 className="py-3">{props.description}</h4>
            </div>
        </div>

    );
};

// the function is used to calculate the range of temperature
function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <h3>
                {/**span tag for left & right padding */}
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        );
    }
}

// export weather component
export default Weather;