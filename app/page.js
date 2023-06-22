import Hero from "./components/Hero"
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"

export default function Home() {
  return (
    <main className="w-screen">
      <Hero />
      <div
        id='portfolio'
        className="h-0 sm:h-12"
      ></div>
      <Portfolio />
      <div className="h-12"></div>
      <About />
    </main>
  )
}
