import Link from "next/link"


export default function NavBar() {
  return (
    <div className="p-10 ">
      <nav className="rounded border-2 bg-fog border-mist-50">
        <Link
          href='/'
          className="p-2"
        >
          Home
        </Link>
        <Link
          href='/about'
          className="p-2"
        >
          About
        </Link>
        <Link
          href='/portfolio'
          className="p-2"
        >
          Projects
        </Link>
      </nav>
    </div>
  )
}