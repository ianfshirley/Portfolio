import Hero from "./components/Hero"
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"

export default function Home() {
  return (
    <main className="w-screen">
      <Hero />

      <Portfolio />
      <div
        id='about'
        className="h-12"
      ></div>
      <About />
    </main>
  )
}
