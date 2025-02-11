import React from 'react'
import Landing from './Pages/Landing'
import { BrowserRouter , Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' exact element={<Landing />}></Route>
        {/*<Route path="/counselling" exact element={<Counselling />} ></Route>
        <Route path="/overseas" exact element={<Overseas />} ></Route>
        <Route path="/crashcourse" exact element={<CrashCourse />} ></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App