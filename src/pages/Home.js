import React from 'react'
import CreateStationHistory from '../components/CreateStationHistoryTable'

const Home = (props) => {
  return (
    <React.Fragment>
    <section>
      {/* <div className="centered text-4xl h-screen">This is Home Page</div> */}
      <div><CreateStationHistory userid={props.Userid}/></div>
    </section>
  </React.Fragment>
  )
}

export default Home