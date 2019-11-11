import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {

  const [ countries, setCountries] = useState([]) 
  const [ newFilter, setNewFilter ] = useState('')
  const [ showCountries, setShowCountries ] = useState(new Array(10).fill(false))

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
  }



  return (
    <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <Countries countries={filteredCountries} showCountries={showCountries} setShowCountries={setShowCountries} />
    </div>
  );
}

export default App;