import React, { useContext, useEffect } from "react"
import IssueList from "./IssueList"
import { UserContext } from "../context/UserProvider"

export default function Public() {
  const {
    issueList,
    upVote,
    downVote,
    deleteIssue,
    setPage,
    userErr,
    setUserErr, 
    sortByVotes } = useContext(UserContext)

  useEffect(() => {
    setPage("public")
    sortByVotes()
  }, [])

  return (
    <div className="public">
      <h1>Issues</h1>
      <IssueList
        issues={issueList}
        upVote={upVote}
        downVote={downVote}
        deleteIssue={deleteIssue}
        userErr={userErr}
        setUserErr={setUserErr} />
    </div>
  )
}