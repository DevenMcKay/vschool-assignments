import React, { useContext, useEffect } from "react"
import { UserContext } from "../context/UserProvider"
import IssueForm from './IssueForm'
import IssueList from "./IssueList"

export default function Profile() {
  const { user: {
    username,
    _id
  },
    addIssue,
    upVote,
    downVote,
    issueList,
    deleteIssue,
    deleteComment,
    setPage,
    page,
    userErr,
    setUserErr,
    sortByVotes
  } = useContext(UserContext)

  const userIssueList =
    issueList ?
      issueList.filter(issue => {
        if (issue.user === _id) {
          return issue
        }
      }) : null

      useEffect(() => {
        setPage("profile")
        sortByVotes()
      }, [])
      
      return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <IssueForm addIssue={addIssue} />
      <h2>Your Issues</h2>
      <IssueList
        issues={userIssueList}
        upVote={upVote}
        downVote={downVote}
        deleteIssue={deleteIssue}
        deleteComment={deleteComment}
        page={page}
        userErr={userErr}
        setUserErr={setUserErr} />
    </div>
  )
}