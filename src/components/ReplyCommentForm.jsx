import { useEffect } from "react"
import { useImmerReducer } from "use-immer"

// components
import Container from "./Container.jsx"

export default function ReplyCommentForm({ currentUser }) {
  // initialState
  const initialState = {
    comment: {
      value: "",
      invalid: false,
      placeholder: "add a comment"
    },
    requestCount: 0,
    sending: false
  }

  // reducer
  function reducer(draft, action) {
    switch(action.type) {
      case "set-comment":
        draft.comment.invalid = false
        draft.comment.value = action.value.trim() ? action.value : ''
        break
      case "submit":
        if (!draft.comment.invalid) {
          draft.data = {
            createdAt: Date.now(),
            comment: draft.comment.value,
            user: 10
          }
        }
        draft.requestCount++
        break
    }
  }

  const [state, dispatch] = useImmerReducer(reducer, initialState)

  // handleSubmit
  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: "set-comment", value: state.comment.value.trim() })
    dispatch({ type: "submit" })
  }

  // requestCount
  useEffect(() => {
    if (state.requestCount) {
      console.log(state.data)
    }
  }, [state.requestCount])

  return(
    <form onSubmit={handleSubmit} className="p-4 mt-4 rounded-lg bg-white">
      <textarea
        className={`outline-none block w-full h-32 p-4 border-2 border-gray-200 rounded-lg resize-none text-dark-blue leading-7 focus:border-moderate-blue`}
        onChange={e => dispatch({ type: "set-comment", value: e.target.value })}
        value={state.comment.value}
        placeholder={state.comment.placeholder}
      />
      <Container styles="flex items-center justify-between mt-4">
        <Container styles="w-8 h-8 rounded-full overflow-hidden">
          <img src={currentUser.image.webp} alt={currentUser.username} className="block w-full" />
        </Container>
        <button className="block px-5 bg-moderate-blue rounded-md font-semibold text-sm uppercase text-white leading-10 tracking-wide">
          send
        </button>
      </Container>
    </form>
  )
}
