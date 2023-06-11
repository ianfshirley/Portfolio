import Hero from "./components/Hero"
import About from "./about/page"
import Portfolio from "./portfolio/page"


export default function Home() {
  return (
    <main className="w-screen">
      <Hero />
      <Portfolio />
      <About />
    </main>
  )
}
