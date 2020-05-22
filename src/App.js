import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'


const App = () => {

  const [ countries, setCountries] = useState([]) 
  const [ newFilter, setNewFilter ] = useState('')
  const [ showCountries, setShowCountries ] = useState(new Array(10).fill(false))
  const [ oneCountry, setOneCountry ] = useState('')
  const [ weather, setWeather ] = useState([])
  const api_key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY


  useEffect( () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  
  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase()))
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    setShowCountries(new Array(10).fill(false))
    if(filteredCountries.length === 1){
      setOneCountry(filteredCountries[0])
    }
  }

  useEffect( () => {
    if(oneCountry !== ''){
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${oneCountry.capital}&units=metric&APPID=${api_key}`)
        .then(response => {
          setWeather([response.data.main.temp, response.data.wind.speed, response.data.wind.deg])
        })
    }
  }, [oneCountry, api_key])



  return (
    <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <Countries countries={filteredCountries} showCountries={showCountries} setShowCountries={setShowCountries} weather={weather}/>
    </div>
  );
}

export default App;