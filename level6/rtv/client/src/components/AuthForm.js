import React from "react"

export default function AuthFrom(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    errMsg,
    inputs: {
      username,
      password
    }
  } = props

  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="text"
        value={password}
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />
      <button>{btnText}</button>
      <p style={{color:"red"}}>{errMsg}</p>
    </form>
  )
}