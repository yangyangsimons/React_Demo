import React from "react"

export default function App() {

    const [formData, setFormData] = React.useState({
      email: "",
      password: "",
      rePassword: "",
      joinNews: true
    })

    function handleChange(event) {
      const {name,value,type, checked} = event.target
      setFormData(preData => {
        return {
          ...preData,
          [name]: type === "checkbox" ? checked : value
        }
      })
    }
    function handleSubmit(event) {
      event.preventDefault()
      console.log("submit")

    }
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="email"
          placeholder="Email Address"
          className="form--input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="form--input"
          name="rePassword"
          value={formData.rePassword}
          onChange={handleChange}
        />
        <div className="form--marketing">
          <input
            type="checkbox"
            id="okayToEmail"
            name="joinNews"
            checked={formData.joinNews}
            onChange={handleChange}
          />
          <label htmlFor="okayToEmail">I understand terms and conditions</label>
        </div>
        <button className="form--submit">Sign Up</button>
      </form>
    </div>
  )
}
