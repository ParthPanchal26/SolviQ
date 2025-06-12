import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './pages/About';
import Courses from './pages/Courses';
import Home from './pages/Home';
import MyLearning from './pages/MyLearning';
import Navbar from './pages/Navbar';
import SignIn from './pages/SignIn';
import LoginSignup from './pages/LoginSignup';



const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/courses' element={<Courses />} />
                    <Route path='/my-learning' element={<MyLearning />} />
                    <Route path='/about-us' element={<About />} />
                    <Route path='/sign-in' element={<SignIn />} />
                      <Route path='/Signup' element={<LoginSignup />} />
                  
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App