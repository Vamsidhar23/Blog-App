import Topbar from './components/Topbar/Topbar'
import Home from './pages/Home/Home'
import Single from './pages/SinglePage/Single'
import Write from './pages/Write/Write'
import Setting from './pages/Settings/Setting'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { BrowserRouter,  Routes, Route , Navigate } from "react-router-dom";
import { useContext } from 'react'
import { Context } from './context/Context'

function App() {

  const {user} = useContext(Context) ;
  // const user = false;


  return (
   <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={user ? <Home/> :<Register/>}></Route>
        <Route path='/login' element={user ? <Home/> : <Login/>}></Route>
        <Route path='/write' element={user ? <Write/> :<Register/>}></Route>
        <Route path='/settings' element={user ? <Setting/> :<Register/>}></Route>
        <Route path='/post/:postid' element={<Single/>}></Route>
      </Routes>
   </BrowserRouter>
    
    

  )
}

export default App
