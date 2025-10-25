import "./App.css"
import { Navbar } from "./Components/Navbar/Navbar"
import { Home } from "./Pages/Home/Home"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="banner__notification">
        <p>
          I'm deprecating this website, Discover new portfolio{" "}
          <a href="https://debasishransingh.dev">
            debasishransingh.com
          </a>
        </p>
      </div>
      <Home />
    </div>
  )
}

export default App
