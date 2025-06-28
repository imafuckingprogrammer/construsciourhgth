import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import PageLoader from './components/PageLoader'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Industries from './pages/Industries'
import Quality from './pages/Quality'
import Innovation from './pages/Innovation'
import News from './pages/News'
import Contact from './pages/Contact'
import './App.css'

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          } 
        />
        <Route 
          path="/about" 
          element={
            <PageTransition>
              <About />
            </PageTransition>
          } 
        />
        <Route 
          path="/products" 
          element={
            <PageTransition>
              <Products />
            </PageTransition>
          } 
        />
        <Route 
          path="/industries" 
          element={
            <PageTransition>
              <Industries />
            </PageTransition>
          } 
        />
        <Route 
          path="/quality" 
          element={
            <PageTransition>
              <Quality />
            </PageTransition>
          } 
        />
        <Route 
          path="/innovation" 
          element={
            <PageTransition>
              <Innovation />
            </PageTransition>
          } 
        />
        <Route 
          path="/news" 
          element={
            <PageTransition>
              <News />
            </PageTransition>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <div className="App bg-gradient-animated">
        <PageLoader isLoading={isLoading} />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
