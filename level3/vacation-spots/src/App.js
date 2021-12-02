import React from "react"
import Card from "./Card"
import vacationSpots from "./vacationSpots"
import Head from "./Head"

function App() {
  const vacationComponents = vacationSpots.map(spot => <Card key={spot.place} spot={spot} />)
  console.log(vacationComponents)
  return (
    <div>
      <Head />
      {vacationComponents}

    </div>
  )

}

export default App