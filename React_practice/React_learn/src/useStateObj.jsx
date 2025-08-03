import React,{useState} from 'react'

const useStateObj = () => {
    const [user, setUser] = useState({
        name:'Hari',
        age:22
    })
    const changeUser = () =>{
        setUser(prev=>({
            ...prev,
            name:'Khatijax'
        }))
    }
  return (
    <>
    <h1>{user.name}</h1>
    <h1>{user.age}</h1>
    <button onClick={changeUser}>Change name</button>
    </>
  )
}

export default useStateObj
