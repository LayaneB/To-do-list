import axios from 'axios'
const BaseUrl = "https://jsonplaceholder.typicode.com/"

export const getRequest = async (path, setUsers, setOpen, setMessageError) => {
    try {
      const response = await axios.get(`${BaseUrl}${path}`, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        setUsers(response.data)

    }
    catch(error) {
      setOpen(true)
      setMessageError(`Error ${error.response.status}: Something went wrong, try again later!`)
    }
  }

  export const putRequest = async (path, body, setOpen, setMessageError) => {
    try {
  
      const response = await axios.put(`${BaseUrl}${path}`, body,{
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        return response.data
    }
    catch(error) {
      setOpen(true)
      setMessageError(`Error ${error.response.status}: Something went wrong, try again later!`)
    }
  }

  export const postRequest = async (path, body, setOpen, setMessageError) => {
    try {
      
      const response = await axios.post(`${BaseUrl}${path}`, body,{
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        return response.data
    }
    catch(error) {
      setOpen(true)
      setMessageError(`Error: ${error.response.status}`)
    }
  }