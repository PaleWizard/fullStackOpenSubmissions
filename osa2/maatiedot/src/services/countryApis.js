import axios from "axios";

const baseurl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
    const url = `${baseurl}/all`
    const request = axios.get(url)
    return request.then(response => response.data)
}

const getByName = (name) => {
    const url = `${baseurl}/name/${name}`
    const request = axios.get(url)
    return request.then(response => response.data)
}

export default { getAll, getByName }