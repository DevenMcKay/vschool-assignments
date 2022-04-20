import React, { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import IssueForm from './IssueForm'
import IssueList from "./IssueList"


export default function Profile() {
  const { user: {
    username
  },
    addIssue,
    issues
  } = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <IssueForm addIssue={addIssue} />
      <h3>Your Issues</h3>
      <IssueList issues={issues} />
    </div>
  )
}