
import './App.css'
import { useEffect, useState } from 'react'
import BackToTop from './common/BackToTop'
import Loader from './common/Loader'
import MainRoutes from './common/MainRoutes'

function App() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (showLoader) {
    return <Loader />
  }

  return (
    <>
      <BackToTop />
      <MainRoutes />
    </>
  )
}

export default App
