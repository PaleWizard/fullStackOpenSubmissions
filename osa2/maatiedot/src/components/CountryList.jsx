import CountryDetails from "./CountryDetails"

const CountryList = ({nameList, countryObjects, buttonLogic}) => {

    // Jos filter palauttaa yli 10 mätsiä
    if (nameList.length > 10){
        return (
            <div>
                Too many matches, specify another filter.
            </div>
        )

    // Jos filter palauttaa tasan yhden mätsin
    } else if (nameList.length == 1){
        const country = countryObjects.filter(c =>
            c.name.common.toLowerCase() === nameList[0].toLowerCase()
        )   
        
        return (
            <div>
                <CountryDetails country={country[0]}/>
            </div>
        )
    }
    
    // Tämä palautetaan jos maita on enemmän kuin yksi ja vähemmän kuin kymmenen
    return (
        <div>
            {nameList.map(name => {
                return (
                        <div key={name}>
                            {name}
                            <button onClick={() => buttonLogic(name)}>SHOW</button>
                        </div>
                )}
            )}
        </div>
    )
}


export default CountryList