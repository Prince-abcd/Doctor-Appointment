
import './App.css'
import Login from './components/Login.jsx'
import Doctors from './components/Doctors.jsx'
import Appointment from './components/Appointment.jsx'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Homepage from './components/Homepage.jsx'
import Navbar from './components/Navbar.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (

    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path='/home' element={<Homepage />} />
        <Route path="/Doctors" element={<Doctors/>} />
        <Route path='/appointment/:doctorId' element={<Appointment />} />
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default App
