import React from "react"
import Issue from "./Issue"

export default function IssueList(props) {
  const { issues, upVote, downVote, deleteIssue } = props

  return (
    <div className="issueList">
      {issues ? issues.map(issue => <Issue key={issue._id} {...issue} upVote={upVote} downVote={downVote} deleteIssue={deleteIssue} />) : null}
    </div>
  )
}