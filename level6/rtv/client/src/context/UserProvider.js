import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

// INSERTS TOKEN PRIOR TO REQUEST
const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem('token') || "",
    issues: []
  }

  function getAllIssues() {
    userAxios.get("/api/issue")
      .then(res => setIssueList(res.data))
      .catch(err => console.log(err))
  }

  const [userState, setUserState] = useState(initState)
  const [issueList, setIssueList] = useState()
  const [page, setPage] = useState("")

  function signup(credentials) {
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        getAllIssues()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => console.log(err))
  }

  function login(credentials) {
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getAllIssues()
        getUserIssues()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => console.log(err))
  }

  function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      issues: []
    })
  }

  function getUserIssues() {
    userAxios.get("/api/issue/user")
      .then(res => {
        setUserState(prevUserState => ({
          ...prevUserState,
          issues: res.data
        }))
      })
  }

  function addIssue(newIssue) {
    userAxios.post("/api/issue", newIssue)
      .then(res => {
        setUserState(prevUserState => ({
          ...prevUserState,
          issues: [...prevUserState.issues, res.data]
        }))
        getAllIssues()
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function deleteIssue(issueId) {
    userAxios.delete(`/api/issue/${issueId}`)
    const filteredArr = issueList.filter(issue => {
      if (issueId !== issue._id) {
        return issue
      }
    })
    setIssueList(
      filteredArr
    )
  }

  function upVote(votedIssue) {
    issueList.forEach(issue => {
      if (issue._id === votedIssue && userState.user._id === issue.user) {
        console.log("User cannot self-vote")
      } else if (issue._id === votedIssue && issue.votedUsers.includes(userState.user._id)) {
        console.log("User already voted")
      } else if (issue._id === votedIssue) {
        userAxios.put(`api/issue/upvote/${votedIssue}`)
          .then(res => {
            const updatedIssueArr = issueList.map(issue => {
              if (votedIssue === issue._id) {
                return res.data
              } else {
                return issue
              }
            })
            setIssueList(
              updatedIssueArr
            )
          })
      }
    })
  }

  function downVote(votedIssue) {
    issueList.forEach(issue => {
      if (issue._id === votedIssue && userState.user._id === issue.user) {
        return console.log("User cannot self-vote")
      } else if (issue._id === votedIssue && issue.votedUsers.includes(userState.user._id)) {
        return console.log("User already voted")
      } else if (issue._id === votedIssue) {
        userAxios.put(`api/issue/downvote/${votedIssue}`)
          .then(res => {
            const updatedIssueArr = issueList.map(issue => {
              if (votedIssue === issue._id) {
                return res.data
              } else {
                return issue
              }
            })
            setIssueList(
              updatedIssueArr
            )
          })
      }
    })
  }

  function addComment(commentIssue, issueId) {
    userAxios.put(`/api/issue/addcomment/${issueId}`, commentIssue)
      .then(res => {
        const updateCommentsArr = issueList.map(issue => {
          if (issueId === issue._id) {
            issue.comments.push(commentIssue)
            return issue
          } else {
            return issue
          }
        })
        setIssueList(
          updateCommentsArr
        )
      })
  }

  function deleteComment(comments, issueId) {
    userAxios.put(`/api/issue/deletecomment/${issueId}`, comments)
      .then(res => {
        const updateCommentsArr = issueList.map(issue => {
          if (issueId === issue._id) {
            issue = res.data
            return issue
          } else {
            return issue
          }
        })
        setIssueList(
          updateCommentsArr
        )
      })
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addIssue,
        deleteIssue,
        issueList,
        upVote,
        downVote,
        addComment,
        deleteComment,
        setPage,
        page
      }}>
      {props.children}
    </UserContext.Provider>

  )
}