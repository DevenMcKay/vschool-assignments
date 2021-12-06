import React from "react";
import FriendList from "./FriendList"
import Friend from "./Friend"

function App() {
  const friendCard = FriendList.map((item, index) => <Friend key={item.name + " - " + index} friend={item} />)
  // console.log(friendCard)
 
  return (
    <main>
      {friendCard}
    </main>
  )
}

export default App