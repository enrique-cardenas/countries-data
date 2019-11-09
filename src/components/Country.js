import React from 'react'

const Country = ({country}) => {
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

export default Country