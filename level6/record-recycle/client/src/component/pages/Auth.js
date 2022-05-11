import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'
import { UserContext } from '../../context/UserProvider'

const initInputs = { username: "", password: "" }

export default function Auth() {

  const {signup,login, resetAuthErr, errMsg} = useContext(UserContext)

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
    signup(inputs)
  }

  function handleLogin(e) {
    e.preventDefault()
    login(inputs)
  }


  function toggleForm() {
    setToggle(prev => !prev)
    resetAuthErr()
  }


  return (
    <main className="auth">
      <h1>Engage In Sound</h1>
      {toggle ?
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign Up"
            errMsg={errMsg}
          />
          <p className='toggleForm' onClick={toggleForm}>Login Page</p>
        </>
        :
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg}
          />
          <p className='toggleForm'onClick={toggleForm}>Become A Member!</p>
        </>
      }

    </main>
  )
}