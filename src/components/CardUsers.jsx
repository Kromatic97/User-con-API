import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardUsers = () => {
  const [user, setUser] = useState()
  
  useEffect(() => {
    const URL="https://randomuser.me/api/"
    axios.get(URL)
    .then(res => setUser(res.data.results[0]))
    .catch(err => console.log(err.message))
  },[])

  return (
    <article className="conteiner">
          <h1>{user?.name.title} {user?.name.first} {user?.name.last}</h1>
          <img src={user?.picture.large} alt="" />
          <ul>
            <li><b>Country: </b>{user?.location.country}</li>
            <li><b>City: </b>{user?.location.city}</li>
            <li><b>Number: </b>{user?.location.street.number}</li>
            <li><b>Email: </b>{user?.email}</li>
            <li><b>Gender: </b>{user?.gender}</li>
          </ul>
      </article>
  )
}

export default CardUsers