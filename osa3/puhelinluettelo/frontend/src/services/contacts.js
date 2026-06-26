import axios from "axios";
const baseurl = 'http://localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(baseurl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseurl, newObject)
    return request.then(response => response.data)
}

const remove = id => {
    const url = `${baseurl}/${id}`
    const request = axios.delete(url)
    return request.then(response => response.data)
}

const update = updatedObject => {
    const url = `${baseurl}/${updatedObject.id}`
    const request = axios.put(url, updatedObject)
    return request.then(response => response.data)
}

export default { getAll, create, remove, update }