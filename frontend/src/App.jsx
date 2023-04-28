import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import { GameProvider } from './components/context/GameContext'
import SignIn from './components/pages/Signin'
import SignUp from './components/pages/Signup'
import Logout from './components/pages/Logout'
import Details from './components/pages/Details'

function App() {
  return (
    <GameProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <NavBar />

          <main className="container mx-auto px-3 pb-12 flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
              <Route
                path="/signin"
                element={
                  <SignIn>
                    <Routes>
                      <Route to={'/'} element={<Home />}></Route>
                    </Routes>
                  </SignIn>
                }
              />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/game/:id" element={<Details />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </GameProvider>
  )
}

export default App
