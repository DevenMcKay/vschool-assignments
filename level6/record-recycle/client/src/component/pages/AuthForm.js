import React from 'react'

export default function AuthForm(props) {
  const {
    inputs: {
      username,
      password,
    },
    handleChange,
    handleSubmit,
    btnText,
    errMsg
  } = props

  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={handleChange}
      />
      <p className='errMsg'>{errMsg}</p>
      <button>{btnText}</button>
    </form>
  )
}