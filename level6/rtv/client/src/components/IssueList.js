import React, {useContext} from "react"
import Issue from "./Issue"

export default function IssueList(props){
  const {issues} = props

  return(
    <div className="issueList">
      {issues.map(issue => <Issue key={issue._id} {...issue}/>)}
    </div>
  )
}