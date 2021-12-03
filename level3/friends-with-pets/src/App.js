import React from "react";
import FriendList from "./FriendList"
import Friend from "./Friend"

function App() {
  const friendCard = FriendList.map(item => <Friend key={item.name + "-" + item.index} friend={item}/>)
  return (
    <main>
      {friendCard}
    </main>
  )
}

export default App