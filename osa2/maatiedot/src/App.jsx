import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import countryApis from "./services/countryApis";
import axios from 'axios';
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('Effect run.')
    countryApis.getAll()
      .then(countrydata => setCountries(countrydata))
    }, [])

  const handleNewFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const getCountry = countryName => {
    setFilter(countryName)
  }

  const filteredCountries = () => {
    const countryObjects = countries.filter(country => 
        country.name.common
        .toLowerCase()
        .includes(filter.toLowerCase()))

    return countryObjects
  }

  const filteredCountryNames = filteredCountries().map(c => c.name.common)

  return (
    <div>
      <Filter filter={filter} handleFilter={handleNewFilter}/>
      <CountryList nameList={filteredCountryNames} 
                   countryObjects={filteredCountries()}
                   buttonLogic={getCountry}/>
    </div>
  )
}

export default App