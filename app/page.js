import Hero from "./components/Hero"
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"

export default function Home() {
  return (
    <main className="w-screen">
      <Hero />
      <div
        id='portfolio'
        className="h-6"
      ></div>
      <Portfolio />
      <div
        id='about'
        className="h-12"
      ></div>
      <About />
    </main>
  )
}
