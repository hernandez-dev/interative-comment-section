// globla components
import Container from "../../Container.jsx"

// components
import Comment from "../Comment.jsx"

export default function Replies({ replies, currentUser }) {
  return(
    <Container styles="pl-4 mt-4 border-l-2 border-gray-300">
      {replies.map(replie => <Comment key={replie.id} comment={replie} type="replie" currentUser={currentUser} />)}
    </Container>
  )
}
