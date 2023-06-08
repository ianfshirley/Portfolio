import NavBar from "./NavBar"
import ContactLinks from "./ContactLinks"


export default function Header() {
  return (
    <div className="w-full flex flex-row">
      <h1
        className='p-10'
      >Ian F. Shirley</h1>
      <NavBar />
      <ContactLinks />
    </div>
  )
}