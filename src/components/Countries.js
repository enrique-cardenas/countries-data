import React from 'react'
import Country from './Country'

const Countries = ({countries}) => {

  const displayCountries = () => {
    if(countries.length > 10){
      return(
        <p>Too many matches, specify another filter</p>
      )
    }
    else if(countries.length > 1){
      return(
        countries.map(country => <p key={country.name}>{country.name}</p>)
      )
    }
    else if(countries.length === 1){
      const country = countries[0]
      return(
        <>
          <Country country={country}/>
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