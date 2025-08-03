import Props from "./props";

const User = () =>{
    const UserDate = {
        name:'Hari',
        age:22
    }
    return(
        <>
        <Props {...UserDate}course="MERN" />
        </>
    )
}

export default User