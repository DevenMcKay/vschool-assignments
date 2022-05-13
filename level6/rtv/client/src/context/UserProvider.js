import React, { useState, useEffect } from 'react'
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
    issues: [],
    errMsg: ""
  }

  const [userState, setUserState] = useState(initState)
  const [issueList, setIssueList] = useState()
  const [page, setPage] = useState("")
  const [userErr, setUserErr] = useState("")

  // useEffect(() => {
  //   sortByVotes()
  // }, [issueList])

  function sortByVotes() {
    issueList && issueList.sort((a, b) => {
      return b.votes - a.votes
    })
  }

  function getAllIssues() {
    userAxios.get("/api/issue")
      .then(res => setIssueList(res.data))
      .then(sortByVotes())
      .catch(err => console.log(err))

  }

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
      .catch(err => handleAuthErr(err.response.data.errMsg))
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
      .catch(err => handleAuthErr(err.response.data.errMsg))
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

  function handleAuthErr(errMsg) {
    setUserState(prevUserState => ({
      ...prevUserState,
      errMsg
    }))
  }

  function resetAuthErr() {
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }))
  }

  function getUserIssues() {
    userAxios.get("/api/issue/user")
      .then(res => {
        setUserState(prevUserState => ({
          ...prevUserState,
          issues: res.data
        }))
      })
      .catch(err => console.log(err))
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
      .catch(err => console.log(err))
  }

  function upVote(votedIssue) {
    issueList.forEach(issue => {
      if (issue._id === votedIssue && userState.user._id === issue.user) {
        return setUserErr("User cannot self vote")
      } else if (issue._id === votedIssue && issue.votedUsers.includes(userState.user._id)) {
        return setUserErr("User already voted")
      } else if (issue._id === votedIssue) {
        setUserErr("")
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
          .catch(err => console.log(err))
      } else { return null }
    })
  }

  function downVote(votedIssue) {
    issueList.forEach(issue => {
      if (issue._id === votedIssue && userState.user._id === issue.user) {
        return setUserErr("User cannot self vote")
      } else if (issue._id === votedIssue && issue.votedUsers.includes(userState.user._id)) {
        return setUserErr("User already voted")
      } else if (issue._id === votedIssue) {
        setUserErr("")
        return userAxios.put(`api/issue/downvote/${votedIssue}`)
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
          .catch(err => console.log(err))
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
      .catch(err => console.log(err))
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
      .catch(err => console.log(err))
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
        page,
        resetAuthErr,
        userErr,
        setUserErr,
        sortByVotes
      }}>
      {props.children}
    </UserContext.Provider>

  )
}
