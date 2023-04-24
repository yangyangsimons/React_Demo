import react from "react"
import ReactDOM from "react-dom"
import "./style.css"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"


function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}
const root = document.getElementById("root")

ReactDOM.render(<App />,root);
 