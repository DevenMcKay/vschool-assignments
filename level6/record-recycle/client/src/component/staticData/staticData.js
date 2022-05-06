const staticSound = [
  {
    title: "Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://placeimg.com/640/480/arch",
    username: "User 1",
    user: 123,
    _id: "123",
    votedUsers: ["me", "her"],
    comments: ["no", "yes"],
    tags: ["music", "sound", "beats"],
    favorites: ["Title 1", "Title 2"]
  },
  {
    title: "Title 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imgUrl: "https://placeimg.com/640/480/arch",
    username: "User 2",
    user: 123,
    _id: "234",
    votedUsers: ["me", "her"],
    comments: ["no", "yes"],
    tags: ["effect", "outside"],
    favorites: ["Title 3", "Title 4"]
  },
  {
    title: "Title 3",
    description: "Des 2",
    imgUrl: "https://placeimg.com/640/480/arch",
    username: "User 2",
    user: 123,
    _id: "345",
    votedUsers: ["me", "her"],
    comments: ["no", "yes"],
    tags: [],
    favorites: ["Title 3", "Title 4"]
  }]



const staticUser = {
  username: "User 1",
  password: "pass 1",
  memberSince: "today",
  isAdmin: true,
  avatar: "https://placeimg.com/640/480/people"
}

export {staticSound, staticUser}