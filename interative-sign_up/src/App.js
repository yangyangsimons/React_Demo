import React from "react"

export default function App() {

      /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
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
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign Up</button>
      </form>
    </div>
  )
}
