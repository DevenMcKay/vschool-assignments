import React from "react"
import Card from "./Card"
import vacationSpots from "./vacationSpots"
import Head from "./Head"

function App() {
  const vacationComponents = vacationSpots.map((spot, index) => <Card key={spot.place + " - " + index} spot={spot} />)
  console.log(vacationComponents)
  return (
    <div>
      <Head />
      {vacationComponents}
    </div>
  )

}

export default App