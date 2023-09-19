// global components
import Container from "../Container.jsx"

// components
import {
  CommentActions,
  User,
  ReplyButton,
  Replies
} from "./components/"

function Score({ score, layout }) {
  return(
    <Container styles={`${layout} bg-gray-100 rounded-xl text-moderate-blue overflow-hidden`}>
      <button className="block w-12 h-12 opacity-50 text-center leading-10">
        <i className="fa-solid fa-plus" />
      </button>
      <span className="w-10 h-10 font-semibold text-center leading-10">
        {score}
      </span>
      <button className="block w-12 h-12 opacity-50 text-center leading-10">
        <i className="fa-solid fa-minus" />
      </button>
    </Container>
  )
}

export default function Comment({ comment, currentUser }) {
  // local variables
  const commentActions = [
    {
      id: 1,
      name: "delete",
      icon: "fa-trash",
      event: "show-comment-delete-confirmation"
    },
    {
      id: 2,
      name: "reply",
      icon: "fa-reply",
      event: "show-reply-form"
    },
    {
      id: 3,
      name: "edit",
      icon: "fa-pencil",
      event: "enable-edit-mode"
    }
  ]
  return(
    <Container styles="w-full pt-4 first:pt-0">
      <Container styles="p-4 bg-white rounded-lg">
        <Container styles="flex items-center">
          <Container styles="flex items-center flex-1">
            <User user={comment.user} />
            <span className="inline-block pl-6 text-gray-400 leading-none">
              {comment.createdAt}
            </span>
          </Container>
          <CommentActions
            layout="hidden"
            actions={commentActions.filter(action => currentUser.username == comment.user.username ? action.name != "reply" : action.name == "reply")}
            comment={comment}
            currentUser={currentUser}
            media="sm:flex"
          />
        </Container>
        <p className="pt-4 text-dark-blue leading-8">
          {comment.content}
        </p>
        <Container styles={`flex items-center justify-between pt-4 sm:hidden`}>
          <Score score={comment.score} layout="flex items-center" />
          <CommentActions
            layout="flex"
            actions={commentActions.filter(action => currentUser.username == comment.user.username ? action.name != "reply" : action.name == "reply")}
            comment={comment}
            currentUser={currentUser}
            media="sm:hidden"
          />
        </Container>
      </Container>
      {comment.replies && comment.replies.length ? (
        <Replies replies={comment.replies} currentUser={currentUser} />
      ) : ""}
    </Container>
  )
}
