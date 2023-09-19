// components
import Container from "./Container.jsx"

export default function DeleteCommentConfirmation(props) {
  return(
    <Container styles="fixed top-0 left-0 z-10 flex w-full h-full bg-black/50">
      <Container styles="w-full max-w-sm p-6 bg-white m-auto rounded-lg">
        <h2 className="font-bold text-2xl text-dark-blue leading-none">
          Delete comment
        </h2>
        <p className="mt-4 text-dark-blue leading-7 tracking-wide">
          Are you sure you want delete this comment? This will remove the comment
          and can't be undone.
        </p>
        <Container styles="grid grid-cols-2 gap-2 mt-6 text-base text-white">
          <button className="block bg-grayish-blue rounded-lg font-semibold uppercase leading-[2.8rem]">
            no, cancel
          </button>
          <button className="block bg-soft-red rounded-md font-semibold uppercase leading-[2.8rem]">
            yes, delete
          </button>
        </Container>
      </Container>
    </Container>
  )
}
