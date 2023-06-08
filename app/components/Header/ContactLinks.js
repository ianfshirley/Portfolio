import Link from "next/link"


export default function ContactLinks() {
  return (
    <div className="p-10">
      <nav className="rounded border-2">
        <a href='https://github.com/ianfshirley' target='_blank' rel='noopener noreferrer' className="p-2">
          GitHub
        </a>
        <a href='https://www.linkedin.com/in/ianfshirley/' target='_blank' rel='noopener noreferrer' className="p-2">
          LinkedIn
        </a>
        <a href='mailto:ianfshirley88@gmail.com' target='_blank' rel='noopener noreferrer' className="p-2">
          Email
        </a>
      </nav>
    </div>
  )
}