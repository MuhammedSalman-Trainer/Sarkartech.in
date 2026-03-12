import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Hackathons from './components/Hackathons'
import Products from './components/Products'
import IdeaForm from './components/IdeaForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Hackathons />
        <Products />
        <IdeaForm />
      </main>
      <Footer />
    </>
  )
}

export default App
