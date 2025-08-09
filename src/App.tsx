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
import News from './pages/News'
import Contact from './pages/Contact'
import ComingSoon from './pages/ComingSoon'

function AnimatedRoutes() {
  const location = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  
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
        <Route 
          path="/coming-soon" 
          element={
            <PageTransition>
              <ComingSoon />
            </PageTransition>
          } 
        />
        <Route 
          path="/privacy" 
          element={
            <PageTransition>
              <ComingSoon />
            </PageTransition>
          } 
        />
        <Route 
          path="/terms" 
          element={
            <PageTransition>
              <ComingSoon />
            </PageTransition>
          } 
        />
        <Route 
          path="/login" 
          element={
            <PageTransition>
              <ComingSoon />
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
