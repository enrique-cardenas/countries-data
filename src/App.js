import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {

  const [ countries, setCountries] = useState([]) 
  const [ newFilter, setNewFilter ] = useState('')

  useEffect( () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })

  }, [])

  console.log(countries)

  const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase()))

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const displayCountries = () => {
    if(countriesToShow.length > 10){
      return(
        <p>Too many matches, specify another filter</p>
      )
    }
    else if(countriesToShow.length > 1){
      return(
        countriesToShow.map(country => <p key={country.name}>{country.name}</p>)
      )
    }
    else if(countriesToShow.length === 1){
      const country = countriesToShow[0]
      return(
        <>
          <h1>{country.name}</h1>
          <p>capital is {country.capital}</p>
          <p>population {country.population}</p>
          <h2>languages</h2>
          <ul>
            {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
          </ul>
          <img src={country.flag} alt={`${country.name}'s flag`} height="80" width="100" />
        </>
      )
    }
  }

  return (
    <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      
      {displayCountries()}
    </div>
  );
}

export default App;