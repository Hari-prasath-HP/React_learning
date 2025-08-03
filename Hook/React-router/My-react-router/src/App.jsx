import {BrowserRouter,Route,Routes}  from "react-router-dom"
import Home from "./Pages/Home"
import User from "./Pages/User"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import NavBar from "./components/NavBar"
import Error from "./Pages/Error"
function App (){
  return(
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users/:username" element={<User/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App