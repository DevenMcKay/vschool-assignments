import React from "react"
import Issue from "./Issue"

export default function IssueList(props) {
  const { issues, upVote, downVote, deleteIssue, page, deleteComment } = props

  return (
    <div className="issueList">
      {issues ? issues.map(issue =>
        <Issue
          key={issue._id}
          {...issue}
          upVote={upVote}
          downVote={downVote}
          deleteComment={deleteComment}
          deleteIssue={deleteIssue} 
          page={page}/>) : null}
    </div>
  )
}