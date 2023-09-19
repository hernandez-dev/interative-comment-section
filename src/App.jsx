import { useState, useEffect } from "react"

// components
import Container from "./components/Container.jsx"
import Comment from "./components/Commnent/"

function App() {
  // state
  const [comments, setComments] = useState([])

  // coponent mounted
  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch("/data.json")
        const { currentUser, comments } = await response.json()
        setComments(comments)
      } catch (e) {
        console.log(e)
      }
    }
    fetchComments()
  }, [])

  return (
    <Container styles="p-4">
      {comments.map(comment => <Comment key={comment.id} comment={comment} type="comment" />)}
    </Container>
  )
}

export default App
