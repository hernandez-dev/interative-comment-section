import { useState, useEffect } from "react"

// components
import Container from "./components/Container.jsx"

function App() {
  // state
  const [comments, setComments] = useState([])

  // coponent mounted
  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch("/data.json")
        const commets = await response.json()
        console.log(commets)
        setComments(commets)
      } catch (e) {
        console.log(e)
      }
    }
    fetchComments()
  }, [])

  return (
    <>
      app init
    </>
  )
}

export default App
