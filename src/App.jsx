import { useState, useEffect } from "react"
import { useImmer } from "use-immer"

// components
import Container from "./components/Container.jsx"
import { Comment } from "./components/Commnent/"
import ReplyCommentForm from "./components/ReplyCommentForm.jsx"

function App() {
  // state
  const [state, setState] = useImmer({ comments: [], currentUser: null })

  // coponent mounted
  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch("/data.json")
        const { currentUser, comments } = await response.json()
        setState(draft => {
          draft.comments = comments
          draft.currentUser = currentUser
        }) // setState end
      } catch (e) {
        console.log(e)
      }
    }
    fetchComments()
  }, [])

  return (
    <Container styles="p-4">
      {state.comments.map(comment => <Comment key={comment.id} comment={comment} type="comment" />)}
      {state.currentUser ? <ReplyCommentForm currentUser={state.currentUser} /> : ""}
    </Container>
  )
}

export default App
