// global components
import Container from "../../Container.jsx"

export default function CommentActions({ actions, layout, comment, currentUser, media }) {
  return(
    <Container styles={`${layout} space-x-4 text-base font-semibold ${media}`}>
      {actions.map(action => (
        <button
          key={action.id}
          className={`flex items-center ${action.name == "delete" ? 'text-soft-red' : 'text-moderate-blue'} capitalize`}
        >
          <i className={`inline-block mr-2 text-xs fa-solid ${action.icon}`} /> {action.name}
        </button>
      ))}
      {/*<button className="flex items-center text-soft-red capitalize">
        <i className="inline-block mr-2 text-xs fa-solid fa-trash" /> delete
      </button>
      <button className="flex items-center text-moderate-blue capitalize">
        <i className="inline-block mr-2 text-xs fa-solid fa-reply" /> reply
      </button>*/}
    </Container>
  )
}
