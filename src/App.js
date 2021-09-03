import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  // 1 here we will set our State 
  const [loading , setLoading] = useState(true)
  // 3
  const [tours,setTours] = useState([])

  // 16 
  const removeTour =(id)=>{
    const newTour = tours.filter((tour)=>tour.id !== id)
    setTours(newTour) 

  }

  //we will get our data  from the url
  // 4
  const getTours = async () =>{
    // 5 
    setLoading(true)
    //we will use try  catch to catch any errors 
    //  6
    try {
      const respose = await fetch (url)
      const tours =await respose.json()
      console.log(tours)
      setLoading(false)
      setTours(tours)

      
    } catch (error) {
      setLoading(false)
      console.log(error)


      
    }
    
    

  }
  // 7 
  useEffect(()=>{
    getTours()
  },[])

// 2
  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
// 17 لو التورز خلصت يبقي لما ندوس علي الزارار يرجعلنا كل التورز اللي كانت موجوده وده عن طريق getTours
  if(tours.length === 0){
    return(
      <div className='title'>
        <h2>no tours here </h2>
        <button className='btn' onClick={getTours}>Refresh</button>



      </div>
    )
  }
  return(
    <main>
      {/*we will set the tours props of the Tours component to the tours of our state*/ }
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App
