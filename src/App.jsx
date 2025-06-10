import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Courses, Home, MyLearning, Navbar, SignIn } from './pages'

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
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App