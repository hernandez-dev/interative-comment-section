export default function ReplyButton({ commentDispatch }) {
  return(
    <button
      onClick={() => console.log("Show reply form")}
      className="block font-bold capitalize text-moderate-blue leading-10"
    >
      reply
    </button>
  )
}
