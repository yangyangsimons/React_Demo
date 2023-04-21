import react from "react"
import ReactDOM from "react-dom"

function OrderList() {
  return (
    <div>
      <header>
        <nav>
          <img src = "./logo192.png" width="60px"/>
        </nav>
      </header>
      
      <h1>Reasons why learning React</h1>
      <ol>
        <li>first </li>
        <li>second </li>
        <li>third </li>
        <li>four </li>
        <li>five </li>
      </ol>
      <footer>
        <span>@ 2023 Yang development. All rights reserved</span>
      </footer>
    </div>
  )
}
const root = document.getElementById("root")

ReactDOM.render(<OrderList />,root);
