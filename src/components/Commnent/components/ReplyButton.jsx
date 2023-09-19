export default function ReplyButton({ commentDispatch }) {
  return(
    <button
      onClick={() => console.log("Show reply form")}
      className="block font-bold capitalize text-purple-600 leading-10"
    >
      icon reply
    </button>
  )
}
