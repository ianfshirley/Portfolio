import Link from "next/link"


export default function NavBar() {
  return (
    <div className="py-10 px-4 sm:px-10">
      <nav>
        <Link
          href='/'
          className="p-2 text-mist-50 hover:text-peach-500 hover:text-lg"
        >
          Home
        </Link>
        <Link
          href='#portfolio'
          className="p-2 text-white hover:text-peach-500 hover:text-lg"
        >
          Projects
        </Link>
        <Link
          href='#about'
          className="p-2 text-white hover:text-peach-500 hover:text-lg"
        >
          About
        </Link>
      </nav>
    </div>
  )
}