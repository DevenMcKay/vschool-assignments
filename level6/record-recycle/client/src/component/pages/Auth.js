import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'

const initInputs = { username: "", password: "" }

export default function Auth() {

  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e) {
    e.preventDefault()
  }

  function handleLogin(e) {
    e.preventDefault()
  }

  return (
    <main className="auth">
      <h1>Engage In Sound</h1>
      {!toggle ?
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign Up"
          />
          <p onClick={() => setToggle(prev => !prev)}>Login Page</p>
        </>
        :
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
          />
          <p onClick={() => setToggle(prev => !prev)}>Become A Member!</p>
        </>
      }

    </main>
  )
}