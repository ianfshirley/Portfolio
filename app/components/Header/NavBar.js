import Link from "next/link"


export default function NavBar() {
  return (
    <div className="p-10 ">
      <nav className="">
        <Link
          href='/'
          className="p-2 text-mist-50 hover:text-peach-500"
        >
          Home
        </Link>
        <Link
          href='/about'
          className="p-2 text-white hover:text-peach-500"
        >
          About
        </Link>
        <Link
          href='/portfolio'
          className="p-2 text-white hover:text-peach-500"
        >
          Projects
        </Link>
      </nav>
    </div>
  )
}