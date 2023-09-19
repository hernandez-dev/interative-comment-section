// global components
import Container from "../../Container.jsx"

export default function User({ user }) {
  return(
    <Container styles="flex items-center">
      <Container styles="w-12 h-12 rounded-full overflow-hidden">
        <img src={user.image.webp} className="block w-full" alt={user.username} />
      </Container>
      <Container styles="">
        <h2 className="pl-6 font-semibold">
          {user.username}
        </h2>
      </Container>
    </Container>
  )
}
