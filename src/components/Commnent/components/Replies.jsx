// globla components
import Container from "../../Container.jsx"

// components
import Comment from "../Comment.jsx"

export default function Replies({ replies }) {
  return(
    <Container styles="pl-4 mt-4 space-y-2 border-l-2 border-gray-200">
      {replies.map(replie => <Comment key={replie.id} comment={replie} type="replie" />)}
    </Container>
  )
}
