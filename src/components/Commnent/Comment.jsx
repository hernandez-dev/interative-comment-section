// global components
import Container from "../Container.jsx"

// components
import { User, ReplyButton, Replies } from "./components/"

function Score({ score, layout }) {
  return(
    <Container styles={`${layout} bg-gray-100 rounded-xl overflow-hidden`}>
      <button className="block w-12 h-12 text-center leading-10">
        +
      </button>
      <span className="w-10 h-10 text-center leading-10">
        {score}
      </span>
      <button className="block w-12 h-12 text-center leading-10">
        -
      </button>
    </Container>
  )
}

export default function Comment({ comment }) {
  return(
    <Container styles="w-full max-w-3xl pt-4 first:pt-0 mx-auto">
      <Container styles="p-4 bg-white rounded-lg">
        <Container styles="flex items-center">
          <User user={comment.user} />
          <span className="inline-block pl-6 text-gray-400 leading-none">
            {comment.createdAt}
          </span>
        </Container>
        <p className="pt-4 leading-8">
          {comment.content}
        </p>
        <Container styles="flex items-center justify-between pt-4">
          <Score score={comment.score} layout="flex items-center" />
          <ReplyButton commentDispatch={() => console.log("Hey.....")} />
        </Container>
      </Container>
      {comment.replies && comment.replies.length ? <Replies replies={comment.replies} /> : ""}
    </Container>
  )
}
