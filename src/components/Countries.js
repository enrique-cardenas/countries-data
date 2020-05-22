import React from 'react'
import Country from './Country'
import Button from './Button'

const Countries = ({countries, showCountries, setShowCountries, weather}) => {

  const displayCountries = () => {
    if(countries.length > 10){
      return(
        <p>Too many matches, specify another filter</p>
      )
    }
    else if(countries.length <= 10 && countries.length > 1){
      return(
        <>
          {countries.map((country, i) => {
            return [
              <div key={country.name}>
                {country.name}
                <Button text="show" onClick={() => {
                    const copy = [...showCountries]
                    copy[i] = !copy[i];
                    setShowCountries(copy)
                }}/>
                {showCountries[i] === true ? <Country country={country}/> : null}
              </div>
          ]})
          }
        </>
      )
    }
    else if(countries.length === 1){
      const country = countries[0]
      const [ temperature, windSpeed, windDirection ] = weather
      return(
        <>
          <Country country={country} weather={weather}/>
          <h2>Weather in {country.capital}</h2>
          <p><b>temperatue:</b> {temperature} Celsius</p>
          <p><b>wind:</b> {windSpeed} m/s direction {windDirection}</p>
        </>
      )
    }
  }

  return(
    <>
      {displayCountries()}
    </>
  )
}

export default Countries