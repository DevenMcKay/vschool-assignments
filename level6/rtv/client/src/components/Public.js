import React, { useContext } from "react"
import IssueList from "./IssueList"
import { UserContext } from "../context/UserProvider"

export default function Public() {
  const {
    issueList,
    upVote,
    downVote,
  deleteIssue } = useContext(UserContext)

  return (
    <div className="public">
      <IssueList issues={issueList} upVote={upVote} downVote={downVote} deleteIssue={deleteIssue}/>
    </div>
  )
}