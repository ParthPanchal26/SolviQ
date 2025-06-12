import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Courses, ForgotPassword, Home, MyLearning, Navbar, PrivateRoute, ResetPassword, SignIn, SignUp } from './pages'
import { Toaster } from 'react-hot-toast'

const App = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/courses' element={<Courses />} />
                    <Route path='/my-learning' element={<PrivateRoute><MyLearning /></PrivateRoute>} />
                    <Route path='/about-us' element={<About />} />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                    <Route path='/reset-password' element={<ResetPassword />} />
                </Routes>
                <Toaster />
            </div>
        </BrowserRouter>
    )
}

export default App