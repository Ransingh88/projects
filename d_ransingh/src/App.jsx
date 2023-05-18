import "./App.css"
import { Navbar } from "./Components/Navbar/Navbar"
import { Home } from "./Pages/Home/Home"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="banner__notification">
        <p>
          We're deprecating this website, Discover new website{" "}
          <a href="https://debasishransingh.onrender.com/">
            debasishransingh.com
          </a>
        </p>
      </div>
      {/* <Home /> */}
    </div>
  )
}

export default App
