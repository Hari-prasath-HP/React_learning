import React,{useState,useEffect} from 'react'
import axios from 'axios'

const fetch1 = () => {
    const [count, setCount] = useState(1)
    const [user, setUser] = useState(null)   
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
        .then((response)=>{
            setUser(response.data)
        })
    },[count])
  return (
    <>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count=>(count <10?count+1:count))}>Inc</button>
      <button onClick={()=>setCount(count=>(count >1?count-1:count))}>dec</button>
      {user &&(
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      )}
    </>
  )
}

export default fetch1
