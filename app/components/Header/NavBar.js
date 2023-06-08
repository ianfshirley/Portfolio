import Link from "next/link"


export default function NavBar() {
  return (
    <div className="p-10">
      <nav className="">
        <Link
          href='/'
          className=""
        >
          Home
        </Link>
        <Link
          href='/about'
          className=""
        >
          About
        </Link>
        <Link
          href='/portfolio'
          className=""
        >
          Projects
        </Link>
      </nav>
    </div>
  )
}