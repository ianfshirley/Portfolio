import NavBar from "./NavBar"
import ContactLinks from "../ContactLinks"


export default function Header() {
  return (
    <div className="w-screen flex flex-row justify-between">
      <h1
        className='p-10 text-peach-500 text-xl'
      >Ian F. Shirley</h1>
      <NavBar />
      
    </div>
  )
}